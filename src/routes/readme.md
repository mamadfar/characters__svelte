
# SSR / CSR / Universal
- For ssr we need to use `+page.ts` for the naming.
- For csr we can just use the regular Svelte file naming (`+page.svelte`).
- For universal the only thing that we need to use is the `+page.ts` naming.
- It's the same for the layouts as well.

# env
We have 2 approaches for using env variables in the project:
1. Using `private` env variables:
    - We can't use the env variables in the client side.
    - We can only use it with `+page.ts` files.
2. Using `public` env variables:
    - We can use the env variables in the client side.
    - We should use `PUBLIC_` prefix for the env variables.
    - We can use it with other files except `+page.ts` files.

Also, we have `static` and `dynamic` env variables:
1. `static` env variables:
    - We can't change the value of the env variables in the runtime.
    - It's working only on build time.
    - In this type, we can only import the exact name of the env variables.(e.g. `import {PUBLIC_API_URL} from "$env/static/public"`)
2. `dynamic` env variables:
    - We can change the value of the env variables in the runtime.
    - It's working on build time and runtime.
    - It looks like `process.env`. It's depends on the platform that we are using.
    - In this type, we can import the env itself and use it as an object.(e.g. `import {env} from "$env/dynamic/public"` the use it like: `env.PUBLIC_API_URL`)