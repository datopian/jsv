import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";

import nunjucks from "nunjucks";
import prettier from "prettier";
import showdown from "showdown";

import {
  cleanExample,
  getDefault,
  getDescription,
  stringifyToR,
} from "../src/filters.js";
import { removeEmptyLines, removeExtraEmptyLines } from "./text.js";

const getRenderer = (template = null, output = null) => {
  const srcDir = path.dirname(fileURLToPath(import.meta.url));
  let templateName = "";
  let templateDir = "";

  if (template === null) {
    templateName = `base.${output}`;
    templateDir = path.join(srcDir, "templates");
  } else {
    templateName = path.basename(template);
    templateDir = path.dirname(template);
  }

  const loader = new nunjucks.FileSystemLoader(templateDir);
  const env = new nunjucks.Environment(loader);

  env.addFilter("cleanExample", cleanExample);
  env.addFilter("getDefault", getDefault);
  env.addFilter("getDescription", getDescription);
  env.addFilter("parseJson", JSON.parse);
  env.addFilter("stringify", JSON.stringify);
  env.addFilter("stringifyToR", stringifyToR);

  return (schema) => env.render(templateName, schema);
};

const templateEngine = (
  schema,
  { template = null, output = "md", postRender = [] } = {}
) => {
  const render = getRenderer(template, output);
  let result = render(schema);

  // make sure post-render is an array (pipeline of transformations)
  if (!Array.isArray(postRender)) {
    postRender = [postRender];
  }

  // inject default post-render functions
  if (output === "md") {
    postRender.push(removeExtraEmptyLines);
  }
  if (output === "js" || output === "py" || output === "r") {
    postRender.push(removeEmptyLines);
  }
  if (output === "js") {
    postRender.push((result) => prettier.format(result, { parser: "babel" }));
  }

  // run post-render functions
  for (var idx = 0; idx < postRender.length; idx++) {
    result = postRender[idx](result);
  }

  return result;
};

const md2html = (md) => {
  const sd = new showdown.Converter();
  return sd.makeHtml(md);
};

const toMarkDown = (schema) => templateEngine(schema);
const toHtml = (schema) => templateEngine(schema, { postRender: md2html });
const toPython = (schema) => templateEngine(schema, { output: "py" });
const toR = (schema) => templateEngine(schema, { output: "r" });
const toJavaScript = (schema) => templateEngine(schema, { output: "js" });
const toJson = (schema) =>
  prettier.format(JSON.stringify(schema), { parser: "json" });

export {
  templateEngine,
  toHtml,
  toJavaScript,
  toJson,
  toMarkDown,
  toPython,
  toR,
};
