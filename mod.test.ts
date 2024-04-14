import { assertEquals } from "STD/assert/assert_equals.ts";
import { isEmpty } from "./mod.ts";
Deno.test("False 1", { permissions: "none" }, () => {
	assertEquals(isEmpty(true), false);
});
Deno.test("False 2", { permissions: "none" }, () => {
	assertEquals(isEmpty([{}]), false);
});
Deno.test("True 1", { permissions: "none" }, () => {
	assertEquals(isEmpty([]), true);
});
Deno.test("True 2", { permissions: "none" }, () => {
	assertEquals(isEmpty({}), true);
});
