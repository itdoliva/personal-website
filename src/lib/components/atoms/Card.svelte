<script lang="ts">
	import { HttpRegex } from "$lib/utils/regex";

  export let additionalClass: string | undefined = undefined;

  export let href: string | undefined = undefined;
  const isExternalLink = !!href && HttpRegex.test(href)
  export let target: '_self' | '_blank' = isExternalLink ? '_blank' : '_self'
  export let rel = isExternalLink ? 'noopener noreferrer' : undefined

  $: tag = href ? 'a' : 'article'
  $: linkProps = {
    href,
    target,
    rel
  }
</script>

<svelte:element
this={tag}
class="card {additionalClass}"
{...linkProps}
data-sveltekit-preload-data
{...$$restProps}
>

  {#if $$slots.image}
    <div class="image">
      <slot name="image" />
    </div>
  {/if}

  <div class="body">
    
    <div class="content">
      <slot name="content" />
    </div>

    {#if $$slots.footer}
      <div class="footer">
        <slot name="footer" />
      </div>
    {/if}

  </div>

</svelte:element>

<style lang="scss">
	.card {
		color: var(--color-text);
		transition: all 0.4s ease;
		position: relative;
		overflow: hidden;
		width: 100%;

		display: flex;
		flex-direction: column;
    align-items: stretch;

    gap: calc(2*var(--gap-lesser));

		text-decoration: none;

		&[href],
		&[onclick] {
			cursor: pointer;
			&:hover {
				transform: scale(1.01);
			}
		}
	}

	.image {
		position: relative;
		aspect-ratio: 4/3;
		width: 100%;
		// flex: 1 0 max(50%, 330px);
		// min-height: 280px;
		// max-height: 350px;
		border-radius: .4em;
		overflow: hidden;
	}
	
	.body {
		display: flex;
		flex-direction: column;
		justify-content: space-between;
		gap: var(--gap-lesser);

		.content {
			display: flex;
			flex-direction: column;
			flex: 1;
		}
	}


	:global(.card [slot='image']) {
		width: 100%;
		height: 100%;
		object-fit: cover;
		position: absolute;
	}
</style>
