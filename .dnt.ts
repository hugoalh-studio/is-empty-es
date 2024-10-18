import {
	getMetadataFromConfig,
	invokeDenoNodeJSTransformer
} from "DNT";
const configJSR = await getMetadataFromConfig("jsr.jsonc");
await invokeDenoNodeJSTransformer({
	assetsCopy: [
		"LICENSE.md",
		"README.md"
	],
	entrypoints: configJSR.exports,
	generateDeclarationMap: true,
	mappings: {
		"https://raw.githubusercontent.com/hugoalh-studio/is-object-plain-es/v1.0.3/mod.ts": {
			name: "@hugoalh/is-object-plain",
			version: "^1.0.3"
		}
	},
	metadata: {
		name: "@hugoalh/is-empty",
		version: configJSR.version,
		description: "A module to determine whether the item is empty.",
		keywords: [
			"empty",
			"is"
		],
		homepage: "https://github.com/hugoalh-studio/is-empty-es#readme",
		bugs: {
			url: "https://github.com/hugoalh-studio/is-empty-es/issues"
		},
		license: "MIT",
		author: "hugoalh",
		repository: {
			type: "git",
			url: "git+https://github.com/hugoalh-studio/is-empty-es.git"
		},
		scripts: {
		},
		engines: {
			node: ">=16.13.0"
		},
		private: false,
		publishConfig: {
			access: "public"
		}
	},
	outputDirectory: "npm",
	outputDirectoryPreEmpty: true
});
