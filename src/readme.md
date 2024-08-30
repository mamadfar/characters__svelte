# Hooks

Hooks means the functions that we can use in the whole project, it means you can hook to the functions and change the
behavior of the functions, then return the changed result before the function is executed.
We have 2 types of hooks in the project:

1. Server hooks (`hooks.server.ts`):
    - We can use it on the server side and hook into the server requests (e.g. server load or server layout load).
    1. We can use `handle()` and it has 2 parameters `({event, resolve}) => resolve(event)`:
       - `event`: Like `fetch`, `url`, `params`, etc.
       - `resolve`: The function that we should call to continue the process and return the changed result.
       - If we call the static assets, that don't go through this hook.
       - It's a good place to handle authentication, authorization, caching, proxying, etc.
       - If we have multiple hooks, we can use `sequence()` to handle them.
       - The `resolve()` has a second parameter that it has 3 options: [server hooks handle](https://kit.svelte.dev/docs/hooks#server-hooks-handle)
    2. We can use `handleFetch()` and it has 2 parameters `({fetch, request}) => fetch(request)`:
        - It's good for changing something in the Svelte fetch function on the server side.
        - If we get the headers in this handler, we will get only those headers that we set in the fetch (Svelte) function.
    3. We can use `handleError()`:
        - It's good for handling the errors during loading or server side rendering.

2. Client hooks (`hooks.client.ts`):
    - We can use it on the client side and hook into the client requests (e.g. client load or client layout load).
    1. We can use `handleError()` and it has 2 parameters `({error, event}) => ({message})`:
        - It's good for handling the errors during loading or rendering.