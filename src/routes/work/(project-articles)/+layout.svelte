<script lang="ts">
	import Image from '$lib/components/atoms/Image.svelte';
  import Button from "$lib/components/atoms/Button.svelte";
	import Tag from "$lib/components/atoms/Tag.svelte";
	import { siteBaseUrl, siteTitle } from "$lib/data/meta";
	import { _ } from "svelte-i18n";

  export let data;
  $: ({ project } = data);

</script>

<svelte:head>
  {#if project}
		<meta name="description" content={project.excerpt} />
		<meta property="og:description" content={project.excerpt} />
		<meta name="twitter:description" content={project.excerpt} />
		<link rel="canonical" href="{siteBaseUrl}work/{project.slug}" />

		<title>{project.title} • {siteTitle}</title>
		<meta property="og:title" content="{project.title} • {siteTitle}" />
		<meta name="twitter:title" content="{project.title} • {siteTitle}" />

		{#if project.coverImage}
			<meta property="og:image" content="{siteBaseUrl}{project.coverImage}" />
			<meta name="twitter:image" content="{siteBaseUrl}{project.coverImage}" />
		{/if}

  {/if}
</svelte:head>

<div class="article-layout">
	{#if project}
	<div class="header left-column">
		<h2 class="title">{project.title}</h2>
		{#if project.link}
			<Button href={project.link} color="secondary" size="small">
				{$_("project.visit")}
			</Button>
		{/if}
	</div>

	{#if project?.details}
		<ul class="details left-column">
			{#each project.details as detail}
				<li class="detail">

					<h5 class="title">{detail.name}</h5>

					<div class="body">
						{#if typeof detail.value === "string"}
							<p>{detail.value}</p>
						{:else}
							{#each detail.value as val}
								<Tag color='secondary' background>{val}</Tag>
							{/each}
						{/if}
					</div>

				</li>
			{/each}
		</ul>
	{/if}

	<div class="description left-column">
		<slot />
	</div>
		

	<div class="gallery right-column">
		{#if project?.gallery}
			{#each project.gallery as src} 
			<Image src="/images/projects/{project.slug}/{src}" widths={['480w', '640w']} alt="" />
			{/each}
		{/if}
	</div>
	{/if}
</div>

<style lang="scss">
	@import '$lib/scss/breakpoints.scss';

	.article-layout {
		--border: 1px solid rgba(var(--color-primary-rgb), .1);

		padding: var(--gap-upper-medium) 0;

		display: grid;
		grid-template-columns: repeat(8, 1fr);
		grid-template-rows: min-content min-content 1fr;
		column-gap: var(--gap-upper-medium);
		row-gap: 0;
		border-top: var(--border);

		@include for-phone-only {
			grid-template-columns: 1fr;
		}
	}

	.left-column {
		grid-column: 1/4;
		height: fit-content;
		@include for-phone-only {
			grid-column: 1;
		}

		&.header {
			display: flex;
			flex-direction: column;
			align-items: stretch;
			gap: var(--gap-lower-medium);
			padding-bottom: 1em;
			border-bottom: var(--border);

			.title {
				font-weight: 700;
			}

			@include for-phone-only {
				grid-row: 1;
				align-items: center;
				text-align: center;
			}
		}

		&.details {
			display: grid;
			grid-template-columns: 1fr 1fr;
			row-gap: var(--gap-upper-medium);
			column-gap: var(--gap-lower-medium);
			padding: 1em 0;
			margin: 0;
			border-bottom: var(--border);

			@include for-phone-only {
			}

			.detail {
				list-style: none;
				display: flex;
				flex-direction: column;
				align-items: stretch;
				gap: var(--gap-lesser);
	
				.title {
					font-weight: 700;
					text-transform: uppercase;
				}

				.body {
					display: flex;
					flex-direction: row;
					flex-wrap: wrap;
					gap: var(--gap-lesser);

					p {
						margin: 0;
						font-size: .85em;
						opacity: .75;
					}
				}
			}
		}

		&.description {
			padding: 1em 0;
			font-size: .85em;
			line-height: 1.5;
		}


	}

	.right-column {
		grid-column: 4/9;
		grid-row: 1 / span 3;

		display: flex;
		flex-direction: column;
		align-items: stretch;

		gap: var(--gap-upper-medium);

		@include for-phone-only {
			grid-column: 1;
			grid-row: 3;
			padding: 1em 0;
		}

	}
</style>