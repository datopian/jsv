import fs from "fs";

import test from "ava";

import { engine } from "../src/render.js";

const readFixture = async (name) => {
  return await fs.promises.readFile("./test/fixtures/" + name, "utf8");
};

test("Can render a JSON schema to MarkDown", async (t) => {
  const input = await readFixture("data-resource.json");
  const expected = await readFixture("data-resource.md");
  engine(input, "md")
    .then((result) => t.is(result, expected))
    .catch((error) =>
      t.Fail(`Expected to render with no errors, but got:\n${error.message}`)
    );
});

test("Engine throws an error when JSON is invalid", async (t) => {
  const input = await readFixture("invalid.json");
  engine(input, "md")
    .then(() => t.Fail("Expected JSON validation error."))
    .catch((error) => {
      const expected = "Invalid JSON input.";
      const result = error.message.substr(0, expected.length);
      t.is(result, expected);
    });
});

test("Engine throws an error when output format is invalid", async (t) => {
  const input = await readFixture("data-resource.json");
  engine(input, "go")
    .then(() => t.Fail("Expected a output format validation error."))
    .catch((error) => {
      const expected = "go is not a valid output format. Options are: md.";
      const result = error.message.substr(0, expected.length);
      t.is(result, expected);
    });
});
