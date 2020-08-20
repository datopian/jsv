import fs from "fs";

import test from "ava";

import { getFromUrl } from "../src/http.js";

class mockServer {
  async get(url) {
    return { data: "42" };
    // TODO implemente and test HTTP status
  }
}

test("Can read the contents of a remote file via HTTP GET", async (t) => {
  const expected = "42";
  const result = await getFromUrl(
    new mockServer(),
    "https://c.kan/schema.json"
  );
  t.is(result, expected);
});
