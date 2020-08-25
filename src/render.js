import fs from "fs";

import { removeExtraEmptyLines } from "./text.js";
import { templateEngine, toHtml, toMarkDown } from "./engines.js";

const engines = { html: toHtml, md: toMarkDown };
const available = Object.keys(engines).join(", ");

// helper function to validade engine's options
const validateOptions = ({ template = null, output = null }) => {
  if (output === null && template === null) {
    throw new Error("The engine needs an output or a template.");
  }

  if (output !== null && template !== null) {
    throw new Error("The engine needs an output or a template (not both).");
  }

  if (output !== null && !(output in engines)) {
    throw new Error(`${output} is not valid. Options are: ${available}.`);
  }

  if (template !== null && !fs.existsSync(template)) {
    throw new Error(`Could not find the template: ${template}.`);
  }
};

const validateJson = (input) => {
  let schema = {};
  try {
    schema = JSON.parse(input);
  } catch (err) {
    throw new Error(`Invalid JSON input.\n${err}`);
  }
  return schema;
};

// helper function to switch between different rendering engines/formats
const engine = async (input, { template = null, output = null } = {}) => {
  validateOptions({ template: template, output: output });
  const schema = validateJson(input);
  let converted = "";

  if (output !== null) {
    converted = engines[output](schema);
  } else if (template !== null) {
    converted = templateEngine(schema, template);
  }

  return removeExtraEmptyLines(converted);
};

export { available, engine };
