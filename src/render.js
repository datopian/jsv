import fs from "fs";

import handlebars from "handlebars";

import { removeExtraEmptyLines } from "./text.js";

handlebars.registerHelper("counter", (index) => index + 1);
handlebars.registerHelper("safe", (text) => new handlebars.SafeString(text));

async function toMarkDown(input) {
  const contents = await fs.promises.readFile("./src/template.md", "utf8");
  const template = handlebars.compile(contents);
  const schema = JSON.parse(input);
  return removeExtraEmptyLines(template(schema));
}

export { toMarkDown };
