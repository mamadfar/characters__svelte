<script lang="ts">
	export let data
</script>

<h1>Hello, {data.user}</h1>
<form action="?/logout" method="post">
	<button type="submit">Logout</button>
</form>