<script lang="ts">
  import { siteBaseUrl, siteTitle } from "$lib/data/meta";

  export let data;
  $: ({ blog } = data);

</script>

<svelte:head>
  {#if blog}
		<meta name="description" content={blog.excerpt} />
		<meta property="og:description" content={blog.excerpt} />
		<meta name="twitter:description" content={blog.excerpt} />
		<link rel="canonical" href="{siteBaseUrl}/{blog.slug}" />

		<title>{blog.title} - {siteTitle}</title>
		<meta property="og:title" content="{blog.siteTitle} - {siteTitle}" />
		<meta name="twitter:title" content="{blog.siteTitle} - {siteTitle}" />

		{#if blog.coverImage}
			<meta property="og:image" content="{siteBaseUrl}{blog.coverImage}" />
			<meta name="twitter:image" content="{siteBaseUrl}{blog.coverImage}" />
		{/if}

  {/if}
</svelte:head>

<div class="article-layout">
  <slot />
</div>