import test from "ava";

import { cleanExample, getDefault, getDescription } from "../src/filters.js";

test("cleanExample can show the value without the key", (t) => {
  const input = '{ "example": 42 }';
  t.is(cleanExample(input), 42);
});

test("getDefault can extract the default value when it exists", (t) => {
  const input = { default: 42 };
  t.is(getDefault(input), 42);
});

test("getDefault falls back to 1st example when default does not exist", (t) => {
  const input = { examples: ['{ "answer": 42 }', '{ "answer": 21 }'] };
  t.is(getDefault(input), 42);
});

test("getDefault returns null when nothing is found ", (t) => {
  const input = {};
  t.is(getDefault(input), null);
});

test("getDescription can extract the description value when it exists", (t) => {
  const input = { description: "42" };
  t.is(getDescription(input), "42");
});

test("getDescription falls back to name when description does not exist", (t) => {
  const input = { name: "42" };
  t.is(getDescription(input), "42");
});

test("getDescription returns null when nothing is found ", (t) => {
  const input = {};
  t.is(getDescription(input), null);
});
