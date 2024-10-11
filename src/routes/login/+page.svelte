<script lang="ts">

	export let form;

</script>
<h1>Login</h1>
<form method="post">
	<label for="username">Username</label>
	<input id="username" name="username" type="text" value={form?.username?.value || ''}/>
		<p class="loginError">{form?.username?.error || ''}</p>
	<label for="password">Password</label>
	<input id="password" name="password" type="password" value={form?.password?.value || ''}/>
		<p class="loginError">{form?.password?.error || ''}</p>
	<button type="submit">Login</button>
</form>

<style>
    form {
        display: flex;
        flex-direction: column;
        max-width: 400px;
				margin: auto;
    }

    label {
        margin-top: 1rem;
    }

    input {
        padding: 0.5rem;
        margin-top: 0.5rem;
    }

    button {
        padding: 0.5rem;
        margin-top: 1rem;
				border: 1px solid #ccc;
				border-radius: 0.25rem;
				&:active {
						background-color: #f0f0f0;
				}
    }
		.loginError {
				color: red;
				margin-top: 1.2rem;
		}
</style>