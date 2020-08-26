import fs from "fs";

import test from "ava";

import { engine } from "../src/render.js";

const readFixture = async (name) => {
  return await fs.promises.readFile("./test/fixtures/" + name, "utf8");
};

const showError = (error) => {
  return `\n\n${error.message}\n\nTraceback:\n${error.stack}`;
};

test("Can render a JSON schema to MarkDown", async (t) => {
  const input = await readFixture("data-resource.json");
  const expected = await readFixture("data-resource.md");
  engine(input, { output: "md" })
    .then((result) => t.is(result, expected))
    .catch((error) =>
      t.fail(`Expected to render with no errors, but got:${showError(error)}`)
    );
});

test("Can render a JSON schema to HTML", async (t) => {
  const input = await readFixture("data-resource.json");
  const expected = await readFixture("data-resource.html");
  engine(input, { output: "html" })
    .then((result) => t.is(result, expected))
    .catch((error) =>
      t.fail(`Expected to render with no errors, but got:${showError(error)}`)
    );
});

test("Can render a JSON schema to Python", async (t) => {
  const input = await readFixture("data-resource.json");
  const expected = await readFixture("data-resource.py");
  engine(input, { output: "py" })
    .then((result) => t.is(result, expected))
    .catch((error) =>
      t.fail(`Expected to render with no errors, but got:${showError(error)}`)
    );
});

test("Can render a CKAN schema to JSON", async (t) => {
  const input = await readFixture("ckan-schema.json");
  const expected = await readFixture("ckan-schema-as-json-schema.json");
  engine(input, { input: "ckan", output: "json" })
    .then((result) => t.is(result, expected))
    .catch((error) =>
      t.fail(`Expected to render with no errors, but got:${showError(error)}`)
    );
});

test("Can render a CKAN schema to MarkDown", async (t) => {
  const input = await readFixture("ckan-schema.json");
  const expected = await readFixture("ckan-schema.md");
  engine(input, { input: "ckan", output: "md" })
    .then((result) => t.is(result, expected))
    .catch((error) =>
      t.fail(`Expected to render with no errors, but got:${showError(error)}`)
    );
});

test("Can render using a custom template", async (t) => {
  const input = await readFixture("data-resource.json");
  const expected = await readFixture("custom-template-output.md");
  engine(input, { template: "test/fixtures/custom-template.md" })
    .then((result) => t.is(result, expected))
    .catch((error) =>
      t.fail(`Expected to render with no errors, but got:${showError(error)}`)
    );
});

test("Engine throws an error when JSON is invalid", async (t) => {
  const input = await readFixture("invalid.json");
  engine(input, { output: "md" })
    .then(() => t.fail("Expected JSON validation error."))
    .catch((error) => {
      const expected = "Invalid JSON input.";
      const result = error.message.substr(0, expected.length);
      t.is(result, expected);
    });
});

test("Engine throws an error when output format is invalid", async (t) => {
  engine("sample input", { output: "go" })
    .then(() => t.fail("Expected a output format validation error."))
    .catch((error) => {
      const expected = "go is not valid. Options are: html, json, md, py.";
      const result = error.message.substr(0, expected.length);
      t.is(result, expected);
    });
});

test("Engine throws an error when template does not exist", async (t) => {
  engine("sample input", { template: "this-should-not-exist.md" })
    .then(() => t.fail("Expected a template not found error."))
    .catch((error) => {
      t.is(
        error.message,
        "Could not find the template: this-should-not-exist.md."
      );
    });
});

test("Engine throws an error when it has no output nor template", async (t) => {
  engine("sample input", {})
    .then(() =>
      t.fail("Expected a missing output or template validation error.")
    )
    .catch((error) => {
      t.is(error.message, "The engine needs an output or a template.");
    });
});

test("Engine throws an error when it has no options", async (t) => {
  engine("sample input")
    .then(() =>
      t.fail("Expected a missing output or template validation error.")
    )
    .catch((error) => {
      t.is(error.message, "The engine needs an output or a template.");
    });
});

test("Engine throws an error when it has both output and template", async (t) => {
  engine("sample input", {
    output: "html",
    template: "this-should-not-exist.md",
  })
    .then(() =>
      t.fail("Expected a missing output or template validation error.")
    )
    .catch((error) => {
      t.is(
        error.message,
        "The engine needs an output or a template (not both)."
      );
    });
});

test("Engine throws an error when both input and output are JSON", async (t) => {
  engine("sample input", { output: "json", input: "json" })
    .then(() => t.fail("Expected a validation error."))
    .catch((error) => {
      t.is(
        error.message,
        "Input and output set to JSON, no transformation needed."
      );
    });
});
