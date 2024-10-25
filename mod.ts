import { isObjectPlain } from "https://raw.githubusercontent.com/hugoalh/is-object-plain-es/v1.0.5/mod.ts";
/**
 * Determine whether the item is empty.
 * 
 * This only reports back what the JavaScript engine is seeing; In particular, the return value may not match the original source code if a transpilation tool was used.
 * @param {unknown} item Item that need to determine.
 * @returns {boolean} Determine result.
 * @example 1
 * ```ts
 * isEmpty(true);
 * //=> false
 * ```
 * @example 2
 * ```ts
 * isEmpty([{}]);
 * //=> false
 * ```
 * @example 3
 * ```ts
 * isEmpty([]);
 * //=> true
 * ```
 * @example 4
 * ```ts
 * isEmpty({});
 * //=> true
 * ```
 */
export function isEmpty(item: unknown): boolean {
	switch (typeof item) {
		case "undefined":
			return true;
		case "object":
			if (item === null) {
				return true;
			}
			if (Array.isArray(item)) {
				return !(item.length > 0);
			}
			if (
				item instanceof Map ||
				item instanceof Set
			) {
				return !(item.size > 0);
			}
			if (isObjectPlain(item)) {
				return !(Object.entries(item).length > 0);
			}
			return false;
		case "string":
			return !(item.length > 0);
		default:
			return false;
	}
}
export default isEmpty;
