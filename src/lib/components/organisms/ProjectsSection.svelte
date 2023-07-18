<script lang="ts">
	import ContentSection from "./ContentSection.svelte";
	import ProjectCard from "../molecules/ProjectCard.svelte";
	import Button from "../atoms/Button.svelte";

  export let projects: any[]
  export let title: string | undefined = undefined
  export let moreProjects: boolean = false
</script>

<ContentSection
id="projects-section"
{title}
>

	<div class="grid">
		{#each projects as project}
			<ProjectCard
			slug={project.slug}
			title={project.title}
			tags={project.tags}
			/>
		{/each}
	</div>

	<div slot="button">
		{#if moreProjects}
			<Button href="/work" color="secondary" style="clear" emoji>
				More Work
			</Button>
		{/if}
		</div>

</ContentSection>

<style lang="scss">
	@import '$lib/scss/breakpoints.scss';

	.grid {
		width: 100%;
		display: grid;
		grid-template-columns: repeat(auto-fill, minmax(270px, 1fr));
		justify-items: center;
		align-items: center;
		justify-content: center;
		column-gap: var(--gap-upper-medium);
		row-gap: calc(1.5*var(--gap-upper-medium));
		margin: 0 auto;

		@include for-phone-only {
			// grid-template-columns: 1fr;
		}

		@include for-large-desktop-up {
			grid-template-columns: repeat(auto-fill, minmax(336px, 1fr));
		}
	}
</style>