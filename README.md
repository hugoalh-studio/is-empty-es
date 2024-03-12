# Is Empty (TypeScript)

[**⚖️** MIT](./LICENSE.md)

**🗂️**
[![GitHub: hugoalh-studio/is-empty-ts](https://img.shields.io/badge/hugoalh--studio/is--empty--ts-181717?logo=github&logoColor=ffffff&style=flat "GitHub: hugoalh-studio/is-empty-ts")](https://github.com/hugoalh-studio/is-empty-ts)
[![JSR: @hugoalh/is-empty](https://img.shields.io/badge/JSR-@hugoalh/is--empty-F7DF1E?labelColor=F7DF1E&logoColor=000000&style=flat "JSR: @hugoalh/is-empty")](https://jsr.io/@hugoalh/is-empty)

**🆙** ![Latest Release Version](https://img.shields.io/github/release/hugoalh-studio/is-empty-ts?sort=semver&color=2187C0&label=&style=flat "Latest Release Version") (![Latest Release Date](https://img.shields.io/github/release-date/hugoalh-studio/is-empty-ts?color=2187C0&label=&style=flat "Latest Release Date"))

A TypeScript module to determine whether the item is empty.

## 🎯 Target

- Bun ^ v1.0.0
- Cloudflare Workers
- Deno >= v1.34.0 / >= v1.41.1 *(Via JSR)*
  > **🛡️ Require Permission**
  >
  > *N/A*
- NodeJS >= v16.13.0

## 🔰 Usage

### Via HTTPS

> **🎯 Supported Target**
>
> - Deno

1. Import at the script (`<ScriptName>.ts`):
    - Via DenoPKG
      ```ts
      import ... from "https://denopkg.com/hugoalh-studio/is-empty-ts[@<Tag>]/mod.ts";
      ```
    - Via GitHub Raw (Require Tag)
      ```ts
      import ... from "https://raw.githubusercontent.com/hugoalh-studio/is-empty-ts/<Tag>/mod.ts";
      ```
    - Via Pax
      ```ts
      import ... from "https://pax.deno.dev/hugoalh-studio/is-empty-ts[@<Tag>]/mod.ts";
      ```
    > **ℹ️ Note**
    >
    > Although it is recommended to import the entire module with the main path `mod.ts`, it is also able to import part of the module with sub path if available, but do not import if:
    >
    > - it's file path has an underscore prefix (e.g.: `_foo.ts`, `_util/bar.ts`), or
    > - it is a benchmark or test file (e.g.: `foo.bench.ts`, `foo.test.ts`), or
    > - it's symbol has an underscore prefix (e.g.: `export function _baz() {}`).
    >
    > These elements are not considered part of the public API, thus no stability is guaranteed for them.

### Via JSR With Native Support

> **🎯 Supported Target**
>
> - Deno

1. Import at the script (`<ScriptName>.ts`):
    ```ts
    import ... from "jsr:@hugoalh/is-empty[@<Tag>]";
    ```
    > **ℹ️ Note**
    >
    > Although it is recommended to import the entire module, it is also able to import part of the module with sub path if available, please visit [file `jsr.jsonc`](./jsr.jsonc) property `exports` for available sub paths.

### Via JSR With NPM Compatibility Layer Support

> **🎯 Supported Target**
>
> - Bun
> - Cloudflare Workers
> - NodeJS

1. Install via console/shell/terminal:
    - Via Bun
      ```sh
      bunx jsr add @hugoalh/is-empty[@<Tag>]
      ```
    - Via NPM
      ```sh
      npx jsr add @hugoalh/is-empty[@<Tag>]
      ```
    - Via PNPM
      ```sh
      pnpm dlx jsr add @hugoalh/is-empty[@<Tag>]
      ```
    - Via Yarn
      ```sh
      yarn dlx jsr add @hugoalh/is-empty[@<Tag>]
      ```
2. Import at the script (`<ScriptName>.ts`):
    ```ts
    import ... from "@hugoalh/is-empty";
    ```
    > **ℹ️ Note**
    >
    > Although it is recommended to import the entire module, it is also able to import part of the module with sub path if available, please visit [file `jsr.jsonc`](./jsr.jsonc) property `exports` for available sub paths.

## 🧩 API

- ```ts
  function isEmpty(item: unknown): boolean;
  ```

> **ℹ️ Note**
>
> For the prettier documentation, can visit via:
>
> - [Deno CLI `deno doc`](https://deno.land/manual/tools/documentation_generator)
> - [JSR](https://jsr.io/@hugoalh/is-empty)

## ✍️ Example

- ```ts
  isEmpty(true);
  //=> false
  ```
- ```ts
  isEmpty([{}]);
  //=> false
  ```
- ```ts
  isEmpty([]);
  //=> true
  ```
- ```ts
  isEmpty({});
  //=> true
  ```
