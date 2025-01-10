import { assertEquals } from "@std/assert";
import { zbelard } from "./main.ts";

Deno.test(function addTest() {
  assertEquals(zbelard(), { hello_zbelard: {} });
});
