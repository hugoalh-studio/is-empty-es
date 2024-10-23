import { assertEquals } from "STD/assert/equals";
import { isEmpty } from "./mod.ts";
Deno.test("Boolean `false`", { permissions: "none" }, () => {
	assertEquals(isEmpty(false), false);
});
Deno.test("Array With 1 Plain Object With 0 Entries", { permissions: "none" }, () => {
	assertEquals(isEmpty([{}]), false);
});
Deno.test("Array With 0 Length", { permissions: "none" }, () => {
	assertEquals(isEmpty([]), true);
});
Deno.test("Plain Object With 0 Entries", { permissions: "none" }, () => {
	assertEquals(isEmpty({}), true);
});
Deno.test("Map With 0 Entries", { permissions: "none" }, () => {
	assertEquals(isEmpty(new Map()), true);
});
Deno.test("Set With 0 Entries", { permissions: "none" }, () => {
	assertEquals(isEmpty(new Set()), true);
});
