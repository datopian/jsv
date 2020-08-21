#!/usr/bin/env node

import commander from "commander";
import { available, engine } from "./render.js";
import { createRequire } from "module";

const require = createRequire(import.meta.url);
const pkg = require("../package.json");
const doc = `jsv (JSON Scheme Viewer)

JSON Schema viewer is a lightweight javascript library and tool that turns JSON
schemas into a elegant human readable documents.

It expects a JSON Schema from stdin and outputs to stdout its version for
visualization in MarkDown, unless another format is passed using --output.`;

const main = () => {
  let stdin = "";
  const cli = commander.program;
  cli
    .version(pkg.version)
    .description(doc)
    .arguments("[<json>]")
    .option("-p, --output <format>", `Format of the output: ${available}`, "md")
    .action((json, options) =>
      engine(stdin || json, options.output)
        .then(console.log)
        .catch(console.error)
    );

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
