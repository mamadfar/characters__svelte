<section>
	<aside>
		<nav>
			<ul>
				<li>
					<a href="/about-character/about/team">The Team</a>
				</li>
				<li>
					<a href="/about-character/about/story">Our Story</a>
				</li>
				<li>
					<a href="/about-character/about/mission">Our Mission</a>
				</li>
			</ul>
		</nav>
	</aside>
	<div class="main">
		<slot />
	</div>
</section>


<style>
	section {
		display: flex;
			gap: 2rem;
	}

	aside {
		width: 200px;
	}

	.main {
		flex: 1;
	}
</style>