<script>
	import Email from '$lib/Email.svelte';

	function resizeIframe(obj) {
		obj.style.height = obj.contentWindow.document.documentElement.scrollHeight + 'px';
	}
</script>

<Email />
<h2>Idea Of The Day</h2>
<h2>Video Of The Day</h2>
<iframe
	title="Youtube Video Player"
	width="100%"
	height="600px"
	src="https://www.youtube.com/embed/D5yTwnwklVE"
	frameborder="0"
	scrolling="no"
	allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
	allowfullscreen
/>

<!--
<h2>Article Of The Day</h2>
<h2>Podcast Of The Day</h2>
<h2>Quote Of The Day</h2>
-->
<style>
	h2 {
		display: flex;
		justify-content: center;
	}
</style>
