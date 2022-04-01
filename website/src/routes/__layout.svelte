<script>
	import Navbar from '$lib/Navbar.svelte';
	import '../styles/global.css';
</script>

<header>
	<Navbar />
</header>
<main>
	<slot />
</main>
<footer>
	<a href="https://www.twitter.com/@tadaspetra" target="_blank">
		<img class="twitterlogo" src="TwitterIcon.svg" alt="Twitter Logo" />
	</a>
	<a href="https://www.youtube.com/@tadaspetra" target="_blank">
		<img class="youtubelogo" src="YouTubeIcon.svg" alt="Youtube Logo" />
	</a>
</footer>

<style>
	main {
		max-width: 960px;
		margin: 20px auto;
	}
	footer {
		text-align: center;
	}
	.twitterlogo {
		width: 50px;
		height: 50px;
		margin: 0 10px;
		opacity: 0.7;
	}
	.twitterlogo:hover {
		opacity: 1;
	}
	.youtubelogo {
		width: 50px;
		height: 50px;
		margin: 0 10px;
		opacity: 0.7;
	}
	.youtubelogo:hover {
		opacity: 1;
	}
</style>
