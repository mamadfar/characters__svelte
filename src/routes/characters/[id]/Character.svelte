<script lang="ts">
	const IMAGE_PLACEHOLDER = 'https://svelte.fun/bobs-burgers/images/99.jpg';

	export let name = '';
	export let image = IMAGE_PLACEHOLDER;
	export let occupation = '';
	export let hairColor = '';
	export let firstEpisode = '';
	export let voiceBy = '';
	export let gender = '';
</script>

<article>
	<header><i>Bob's Burgers</i> Character</header>
	<figure class="image">
		<img src={image} alt={name} loading="lazy">
	</figure>
	<section>
		<h1>{name}</h1>
		<dl>
			<dt>Gender</dt>
			<dd>{gender ?? ''}</dd>
			<dt>Hair</dt>
			<dd>{hairColor ?? ''}</dd>
			<dt>Occupation</dt>
			<dd>{occupation ?? ''}</dd>
		</dl>
	</section>
	<section>
		<h3>Behind the scenes</h3>
		<dl>
			<dt>First Episode</dt>
			<dd>{firstEpisode ?? ''}</dd>
			<dt>Voice By</dt>
			<dd>{voiceBy ?? ''}</dd>
		</dl>
	</section>
</article>
<style>
    article {
			width: 800px;
				max-width: 80%;
				border: 2px solid rebeccapurple;
				border-radius: 0.7rem;
				box-shadow: 4px 4px 5px #555;
				margin: 3rem auto;
				padding: 2px;
    }

		section {
				padding-bottom: 1rem;
		}
		header, h1, h3 {
				font-size: 1rem;
				font-weight: bold;
				text-align: center;
				color: #fff;
				background-color: rebeccapurple;
				padding: 0.5rem;
				margin: auto;
		}
		header {
				border-radius: 0.5em 0.5em 0 0;
		}
		h1, h3 {
				margin-bottom: 1rem;
		}
		figure {
        display: block;
        height: 255px;
        text-align: center;
        padding: 0.5rem 0;
        margin: auto;
		}

    img {
       display: block;
				height: 100%;
				width: 100%;
				object-fit: contain;
				margin: auto;
    }

    dl {
        display: grid;
        grid-template-columns: minmax(min-content, 40%) auto;
    }

    dt {
				grid-column-start: 1;
				padding: 0.5rem;
				text-align: center;
        font-weight: bold;
    }

    dd {
        grid-column-start: 2;
        padding: 0.5rem;
    }
</style>