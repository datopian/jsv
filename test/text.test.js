import test from "ava";

import { removeEmptyLines, removeExtraEmptyLines } from "../src/text.js";

test("Can clean up empty lines from a string", (t) => {
  const expect = "0\n1\n2\n3\n4\n";
  const result = removeEmptyLines("0\n\n  \n\n1\n\n\n2\n\n3\n4");
  t.is(result, expect);
});

test("Can clean up extra empty lines from a string", (t) => {
  const expect = "0\n\n1\n\n2\n\n3\n4\n";
  const result = removeExtraEmptyLines("0\n\n  \n\n1\n\n\n2\n\n3\n4");
  t.is(result, expect);
});
