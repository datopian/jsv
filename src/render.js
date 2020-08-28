import fs from "fs";

import { ckanToJsonSchema } from "./ckan.js";
import {
  templateEngine,
  toHtml,
  toJson,
  toMarkDown,
  toPython
} from "./engines.js";

const engines = { html: toHtml, json: toJson, md: toMarkDown, py: toPython };
const available = Object.keys(engines).join(", ");

// helper function to validade engine's options
const validateOptions = ({ input = null, output = null, template = null }) => {
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

  if (output === "json" && input === "json") {
    throw new Error("Input and output set to JSON, no transformation needed.");
  }
};

const validateJson = input => {
  let schema = {};
  try {
    schema = JSON.parse(input);
  } catch (err) {
    throw new Error(`Invalid JSON input.\n${err}`);
  }
  return schema;
};

// helper function to switch between different rendering engines/formats
const engine = async (
  content,
  { input = null, output = null, template = null, file = null } = {}
) => {
  validateOptions({
    input: input,
    output: output,
    template: template,
    file: file
  });

  if (file !== null && fs.existsSync(file)) {
    content = fs.readFileSync(file);
  }
  let schema = validateJson(content);
  if (input === "ckan") {
    schema = ckanToJsonSchema(schema);
  }

  if (output !== null) {
    return engines[output](schema);
  }

  if (template !== null) {
    return templateEngine(schema, { template: template });
  }
};

export { available, engine };
