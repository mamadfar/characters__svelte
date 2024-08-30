# Proxy API

- Sometimes it's better to proxy the API requests to the server. It means that we can use the same domain for the API
  and the client side, and with that we can prevent the CORS issues, and also we can hide the API endpoint from the
  client side.
- To proxy the API requests, we need to create an `api` folder in the `src` directory or use `+server.ts` file in the
  directory that we want to proxy the API requests.