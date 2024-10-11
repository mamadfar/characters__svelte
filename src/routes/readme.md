# SSR / CSR / Universal

- For ssr we need to use `+page.ts` for the naming.
- For csr we can just use the regular Svelte file naming (`+page.svelte`).
- For universal the only thing that we need to use is the `+page.ts` naming.
- It's the same for the layouts as well.
- To only use on server side, we can use `+page.server.ts` naming.

# env

We have 2 approaches for using env variables in the project:

1. Using `private` env variables:
    - We can't use the env variables in the client side.
    - We can only use it with `+page.ts` or `+page.server.ts` files.
2. Using `public` env variables:
    - We can use the env variables in the client side.
    - We should use `PUBLIC_` prefix for the env variables.
    - We can use it with other files except `+page.ts` files.

Also, we have `static` and `dynamic` env variables:

1. `static` env variables:
    - We can't change the value of the env variables in the runtime.
    - It's working only on build time.
    - In this type, we can only import the exact name of the env variables.(e.g.
      `import {PUBLIC_API_URL} from "$env/static/public"`)
2. `dynamic` env variables:
    - We can change the value of the env variables in the runtime.
    - It's working on build time and runtime.
    - It looks like `process.env`. It's depends on the platform that we are using.
    - In this type, we can import the env itself and use it as an object.(e.g. `import {env} from "$env/dynamic/public"`
      the use it like: `env.PUBLIC_API_URL`)

# Deployment
- If we want to pre-render the whole app (make an HTML file for each page at build time), we can use the code below in the highest level of the page file.:
```ts title="+page.ts || +page.server.ts || +layout.ts || +layout.server.ts"
export const prerender = true; // 'auto' | true | false
```
- If we want to pre-render only a specific file or not to pre-render a specific file, we can use the code below in the file that we want to pre-render or not to pre-render:
```ts title="+page.ts || +page.server.ts || +layout.ts || +layout.server.ts"
export const prerender = false; // 'auto' | true | false
```
- Also, there is another option and we can specified which pages we want to pre-render (`entries`) in the `svelte.config.js` file, Link: [https://kit.svelte.dev/docs/configuration#prerender)
- If we want to make a page (or the whole app) to not be rendered on the server side (SSR) and make it fully client side (SPA), we can use the code below in the file that we want to not be rendered on the server side, link: [https://kit.svelte.dev/docs/page-options#ssr]
```ts title="+page.ts || +page.server.ts || +layout.ts || +layout.server.ts"
export const ssr = false;
```
- We have vise versa option for the code above, we can disable JS for a specific page, link: [https://kit.svelte.dev/docs/page-options#csr]
```ts title="+page.ts || +page.server.ts || +layout.ts || +layout.server.ts"
export const csr = false;
```
- If we want to keep or remove the slash at the end of the URL, we can use the code below in the file that we want to keep or remove the slash at the end of the URL, link: [https://kit.svelte.dev/docs/page-options#trailing-slash]
```ts title="+page.ts || +page.server.ts || +layout.ts || +layout.server.ts"
export const trailingSlash = 'always'; // 'never' | 'always' | 'ignore'
```
Basically, if we have a `/about` with `always` option, it will create a directory with an `index.html` file inside it. If we have a `/about/` with `always` option, it will create a directory with an `index.html` file inside it. If we have a `/about` with `never` option, it will create a file with the name of `about.html`. If we have a `/about/` with `never` option, it will create a file with the name of `about.html`.