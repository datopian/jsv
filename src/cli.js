#!/usr/bin/env node

import { createRequire } from "module";
import commander from "commander";

const require = createRequire(import.meta.url);
const pkg = require("../package.json");
const doc = `jsv (JSON Scheme Viewer)

JSON Schema viewer is a lightweight javascript library and tool that turns JSON
schemas into a elegant human readable documents.

It expects URL to be a location of a JSON scheme file, and it decides the
format of the output based on the file extension of OUTPUT (which is created
as a result) or the format provided via the --output option.`;

const main = () => {
  const cli = commander.program;
  cli
    .version(pkg.version)
    .description(doc)
    .arguments("<URL> <OUTPUT>")
    .option("--output=<output>", "Format of the output file.")
    .option(
      "--css=<css>",
      "URL of a CSS stylesheet (to be included in HTML outputs)."
    )
    .option(
      "--embed-css",
      "Include the contents of the CSS in the HTML output."
    )
    .option(
      "--stdout",
      "No output file is created and the result goes to stdout."
    );
  cli.parse(process.argv);

  // TODO download URL
  // TODO detect output format (md|html)
  // TODO render md
  // TODO render html
  // TODO render HTML with embedded CSS
  // TODO render HTML with external CSS
  // TODO render HTML with external CSS embbedded
  // TODO return to stdout
};

main();
