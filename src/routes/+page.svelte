<script>
	import Hero from '$lib/components/organisms/Hero.svelte';
	import ProjectsSection from '$lib/components/organisms/ProjectsSection.svelte';
	import { _ } from 'svelte-i18n';
	import { siteBaseUrl, siteTitle } from "$lib/data/meta";
	export let data

	let { blogs, projects, moreProjects } = data
</script>

<svelte:head>
	<link rel="canonical" href="{siteBaseUrl}" />

	<meta name="description" content={$_("meta.description")} />
	<meta property="og:description" content={$_("meta.description")} />
	<meta name="twitter:description" content={$_("meta.description")} />
	
	<title>{siteTitle}</title>
	<meta property="og:title" content="{siteTitle}" />
	<meta name="twitter:title" content="{siteTitle}" />

	<meta property="og:image" content="{siteBaseUrl}images/projects/what-about-the-proteins/cover.png" />
	<meta name="twitter:image" content="{siteBaseUrl}images/projects/what-about-the-proteins/cover.png" />
</svelte:head>

	
<Hero />

{#if projects.length}
	<ProjectsSection title="My Work" {projects} {moreProjects}/>
{/if}

{#if blogs.length}
	<h1>Some blogs to be displayed</h1>
{/if}


<style>
	h1 {
		width: 100%;
	}
</style>
