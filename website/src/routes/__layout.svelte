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

<style>
	main {
		max-width: 960px;
		margin: 20px auto;
	}
</style>
