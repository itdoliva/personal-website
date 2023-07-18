<script>
	import Hero from '$lib/components/organisms/Hero.svelte';
	import ProjectsSection from '$lib/components/organisms/ProjectsSection.svelte';
	export let data

	let { blogs, projects, moreProjects } = data
</script>

<svelte:head>
	<title>Home • Italo Doliva</title>
	<meta name="description" content="Italo Doliva" />
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
