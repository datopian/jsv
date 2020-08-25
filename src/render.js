import path from "path";
import { fileURLToPath } from "url";

import nunjucks from "nunjucks";
import showdown from "showdown";

import { removeExtraEmptyLines } from "./text.js";

// load converters & template engines
const srcDir = path.dirname(fileURLToPath(import.meta.url));
const templateDir = path.join(srcDir, "templates");
const sd = new showdown.Converter();
const loader = new nunjucks.FileSystemLoader(templateDir);
const env = new nunjucks.Environment(loader);
env.addFilter("parseJson", JSON.parse);

/// basic convertion functions
const toMarkDown = (schema) => env.render("base.md", schema);
const toHtml = (schema) => sd.makeHtml(toMarkDown(schema));

// helpers for the engine function below
const engines = { html: toHtml, md: toMarkDown };
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
