import test from "ava";
import { render } from "../src/render.js";
import axios from "axios";

class mockServer {
  async get(url) {
    return { data: "42" };
    // TODO implemente and test HTTP status
  }
}

test("Can render a JSON schema to markdown (default)", async (t) => {
  const expected = "42";
  const result = await render(new mockServer(), "https://c.lan/schema.json");
  t.is(result, expected);
});
