<script lang="ts">
	import hero from '$lib/images/hero.png';
	import small from '$lib/images/hero-small.png';
	let subjects = 'Trainees';
</script>

<svelte:head>
	<title>Home</title>
</svelte:head>

<h1>Hello SvelteKit {subjects}!</h1>

<img src={hero} alt="My Hero Avatar" height="100" width="100" />
<h3>Static 👇</h3>
<img src="/hero.png" alt="My Hero Avatar" height="100" width="100" />
<br>
<hr>
<br>
<img src={small} alt="My Smaller Hero Avatar" />
<h3>Static 👇</h3>
<img src='/hero-small.png' alt="My Smaller Hero Avatar" />
<br>
<hr>
<br>
<div class="hero" />
<h3>Static 👇</h3>
<div class="hero2" />

<style>
    h1 {
        color: rebeccapurple;
        flex: 0 1 0;
    }

    .hero {
        background-image: url('$lib/images/hero-small.png');
        background-repeat: no-repeat;
        background-size: 100px;
				height: 100px;
				width: 100px;
    }
    .hero2 {
        background-image: url('/hero-small.png');
        background-repeat: no-repeat;
        background-size: 100px;
        height: 100px;
        width: 100px;
    }
</style>