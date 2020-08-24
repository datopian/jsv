import { dirname } from "path";
import { fileURLToPath } from "url";

import nunjucks from "nunjucks";

import { removeExtraEmptyLines } from "./text.js";

// load converters & template engines
const srcDir = dirname(fileURLToPath(import.meta.url));
const env = new nunjucks.Environment(new nunjucks.FileSystemLoader(srcDir));
env.addFilter("parseJson", JSON.parse);

/// basic convertion functions
const toMarkDown = (schema) => env.render("template.md", schema);

// helpers for the engine function below
const engines = { md: toMarkDown };
const available = Object.keys(engines).join(", ");

// helper function to switch between different rendering engines/formats
const engine = async (input, format) => {
  let errorMsg = "";
  if (!(format in engines)) {
    errorMsg = `${format} is not a valid output format. Options are: ${available}.`;
    throw new Error(errorMsg);
  }

  let schema = {};
  try {
    schema = JSON.parse(input);
  } catch (err) {
    errorMsg = `Invalid JSON input.\n${err}`;
    throw new Error(errorMsg);
  }

  const converted = engines[format](schema);
  return removeExtraEmptyLines(converted);
};

export { available, engine };
