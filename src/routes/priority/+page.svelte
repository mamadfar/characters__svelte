<svelte:head>
	<title>Priority</title>
</svelte:head>

<h1>Advanced Routing</h1>


<a href="priority/foo-abc" class="link">foo-abc</a>
<br>
<br>
<small><b>If you wanna check, put one by one the folder under the <u>priority</u> folder, into the <u>x</u> folder</b></small>

<p>The priority will be in this order (more specific = higher)</p>
<ol>
	<li>foo-abc</li>
	<li>foo-[c]</li>
	<li>[a=x]</li>
	<li>[b]</li>
	<li>[...catchall]</li>
</ol>

<style>
	.link {
		color: blue;
		text-decoration: underline;
	}
</style>