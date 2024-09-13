# Actions

With the help of the actions, we can make a request to the server and get the data. The actions are defined in the
`+page.server.ts` and we should export an `actions` object from the file. The actions object should have the following
structure:

```ts

export const actions = {
	async default(event) {
		// The code here
	},
	async getMovieLog(event) {
		// The code here
	},
};

```

# fail

This built-in function is used to show the error message to the user. It can send the error message to the client with
status code without throwing an error and redirect the user to the error page.