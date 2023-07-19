<script>
	import ProjectsSection from '$lib/components/organisms/ProjectsSection.svelte';
	import { siteBaseUrl, siteTitle } from '$lib/data/meta';
  import { _ } from 'svelte-i18n';
  export let data

  let { projects } = data
</script>

<svelte:head>
	<link rel="canonical" href="{siteBaseUrl}work/" />

	<meta name="description" content={$_("meta.description")} />
	<meta property="og:description" content={$_("meta.description")} />
	<meta name="twitter:description" content={$_("meta.description")} />
	
	<title>{siteTitle}</title>
	<meta property="og:title" content="{$_("nav.work")} • {siteTitle}" />
	<meta name="twitter:title" content="{$_("nav.work")} • {siteTitle}" />

	<meta property="og:image" content="{siteBaseUrl}images/projects/what-about-the-proteins/cover.png" />
	<meta name="twitter:image" content="{siteBaseUrl}images/projects/what-about-the-proteins/cover.png" />
</svelte:head>

<section>
  <ProjectsSection {projects} />
</section>