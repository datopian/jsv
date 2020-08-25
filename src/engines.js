import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";

import nunjucks from "nunjucks";
import showdown from "showdown";

const templateEngine = (schema, template = null) => {
  let templateName = "";
  let templateDir = "";
  const srcDir = path.dirname(fileURLToPath(import.meta.url));

  if (template === null) {
    templateName = "base.md";
    templateDir = path.join(srcDir, "templates");
  } else {
    templateName = path.basename(template);
    templateDir = path.dirname(template);
  }

  const loader = new nunjucks.FileSystemLoader(templateDir);
  const env = new nunjucks.Environment(loader);
  env.addFilter("parseJson", JSON.parse); // TODO document filter for custom templates
  return env.render(templateName, schema);
};

const toMarkDown = (schema) => templateEngine(schema);

const toHtml = (schema) => {
  const sd = new showdown.Converter();
  return sd.makeHtml(toMarkDown(schema));
};

export { templateEngine, toHtml, toMarkDown };
