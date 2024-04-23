import { isEmpty } from "./mod.ts";
Deno.bench("False 1", { permissions: "none" }, () => {
	isEmpty(true);
});
Deno.bench("False 2", { permissions: "none" }, () => {
	isEmpty([{}]);
});
Deno.bench("True 1", { permissions: "none" }, () => {
	isEmpty([]);
});
Deno.bench("True 2", { permissions: "none" }, () => {
	isEmpty({});
});
