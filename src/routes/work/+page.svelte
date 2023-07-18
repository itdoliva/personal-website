<script>
	import ProjectsSection from '$lib/components/organisms/ProjectsSection.svelte';

  export let data

  let { projects } = data
</script>

<section>
  <ProjectsSection {projects} />
</section>