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
	entrypoints: configJSR.getExports(),
	generateDeclarationMap: true,
	mappings: {
		"jsr:@hugoalh/is-object-plain@^1.0.4": {
			name: "@hugoalh/is-object-plain",
			version: "^1.0.4"
		}
	},
	metadata: {
		name: configJSR.getName(),
		version: configJSR.getVersion(),
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
