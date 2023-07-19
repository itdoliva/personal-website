<script>
  import Header from '$lib/components/organisms/Header.svelte';
  import Footer from '$lib/components/organisms/Footer.svelte';
  import './styles.css';
  import { isLoading } from 'svelte-i18n';
</script>

<svelte:head>
	<!-- Google tag (gtag.js) -->
	<script async src="https://www.googletagmanager.com/gtag/js?id=G-CJBPZ3FWP0"></script>
	<script>
		window.dataLayer = window.dataLayer || [];
		function gtag(){dataLayer.push(arguments);}
		gtag('js', new Date());

		gtag('config', 'G-CJBPZ3FWP0');
	</script>
</svelte:head>

<div class="app">

	{#if $isLoading}

		<p>Please wait...</p>

	{:else}

		<Header />
		<main>
			<slot />
		</main>
		<Footer />
		
	{/if}
</div>



<style>
	.app {
		display: flex;
		flex-direction: column;
		min-height: 100vh;
	}

	main {
		flex: 1;
		display: flex;
		flex-direction: column;
		padding: 1rem;
		width: 100%;
		max-width: 64rem;
		margin: 0 auto;
		box-sizing: border-box;
	}
</style>
