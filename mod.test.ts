import { assertEquals } from "STD/assert/equals";
import { isEmpty } from "./mod.ts";
Deno.test("1", { permissions: "none" }, () => {
	assertEquals(isEmpty(true), false);
});
Deno.test("2", { permissions: "none" }, () => {
	assertEquals(isEmpty([{}]), false);
});
Deno.test("3", { permissions: "none" }, () => {
	assertEquals(isEmpty([]), true);
});
Deno.test("4", { permissions: "none" }, () => {
	assertEquals(isEmpty({}), true);
});
