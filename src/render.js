import nunjucks from "nunjucks";

import { removeExtraEmptyLines } from "./text.js";

async function toMarkDown(input) {
  const schema = JSON.parse(input);
  return removeExtraEmptyLines(nunjucks.render("./src/template.md", schema));
}

export { toMarkDown };
