<script lang="ts">
  import { siteBaseUrl, title } from "$lib/data/meta";

  export let data;
  $: ({ content } = data);

</script>

<svelte:head>
  {#if content}
		<meta name="description" content={content.excerpt} />
		<meta property="og:description" content={content.excerpt} />
		<meta name="twitter:description" content={content.excerpt} />
		<link rel="canonical" href="{siteBaseUrl}/{content.slug}" />

		<title>{content.title} - {title}</title>
		<meta property="og:title" content="{content.title} - {title}" />
		<meta name="twitter:title" content="{content.title} - {title}" />

		{#if content.coverImage}
			<meta property="og:image" content="{siteBaseUrl}{content.coverImage}" />
			<meta name="twitter:image" content="{siteBaseUrl}{content.coverImage}" />
		{/if}

  {/if}
</svelte:head>

<div class="article-layout">
  <slot />
</div>