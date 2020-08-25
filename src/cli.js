#!/usr/bin/env node

import commander from "commander";
import { available, engine } from "./render.js";
import { createRequire } from "module";

const require = createRequire(import.meta.url);
const pkg = require("../package.json");
const doc = `jsv (JSON Scheme Viewer)

JSON Schema viewer is a lightweight javascript library and tool that turns JSON
schemas into elegant human-readable documents.

It expects a JSON Schema from stdin and outputs to stdout its version for
visualization in MarkDown, unless another format is passed using --output.
Alternatively, a custom Jinja2/Nunjucks template can be passed using --format
(if --format is used, --output is ignored).`;

const run = (input, options) => {
  // if template was provided, clean up the default output
  if (options.template !== null) {
    options.output = null;
  }
  engine(input, options).then(console.log).catch(console.error);
};

const main = () => {
  let stdin = "";
  const cli = commander.program;
  cli
    .version(pkg.version)
    .description(doc)
    .arguments("[<json>]")
    .option("-o, --output <format>", `Format of the output: ${available}`, "md")
    .option("-t, --template <template>", "Template to use for rendering")
    .action((json, options) => run(stdin || json, options));

  // input is available right away
  if (process.stdin.isTTY) {
    cli.parse();
    return;
  }

  // read input from pipe
  process.stdin.on("readable", () => {
    let chunk = process.stdin.read();
    if (chunk !== null) {
      stdin += chunk;
    }
  });
  process.stdin.on("end", () => cli.parse());
};

main();
