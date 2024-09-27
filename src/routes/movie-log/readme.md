# Actions

With the help of the actions, we can make a request to the server and get the data. The actions are defined in the
`+page.server.ts` and we should export an `actions` object from the file. The actions object should have the following
structure:

```ts

export const actions = {
	async logMovie(event) {
		// The code here
	},
	async getMovieLog(event) {
		// The code here
	},
};

```
- We should keep in mind that when we have only one action, we should name it `default`, otherwise we should name it
  according to the action name.

## use:enhance
If we wanna use `actions`, we need to take care of redirections to a clear URL, otherwise, after each action call, we will see
in the URL, there is a query param with exact same name as our called action. To avoid this, we can use `use:enhance` in the
`<form>` tag and remove the redirect logic from our actions.

# fail

This built-in function is used to show the error message to the user. It can send the error message to the client with
status code without throwing an error and redirect the user to the error page.