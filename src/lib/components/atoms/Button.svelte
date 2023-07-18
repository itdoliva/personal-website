<script lang="ts">
  import OpenInNew from "$lib/icons/open-in-new.svelte";
	import { HttpRegex } from "$lib/utils/regex";

  export let color: 'primary' | 'secondary' = 'primary'
  export let href: string | undefined = undefined
	export let style: 'solid' | 'understated' | 'clear' = 'clear'
	export let size: 'small' | 'medium' | 'large' = 'medium'
  export let emoji: boolean = false

  export let additionalClass: string | undefined = undefined

  const isExternalLink = !!href && HttpRegex.test(href)
  export let target: '_self' | '_blank' = isExternalLink ? '_blank' : '_self'
  export let rel = isExternalLink ? 'noopener noreferrer' : undefined

  $: tag = href ? 'a' : 'button'
  $: linkProps = {
    href,
    target,
    rel
  }
</script>

<svelte:element
this={tag}
{...linkProps}
class={['button', `size--${size}`, `style--${style}`, `color--${color}`, additionalClass].join(' ')}
data-sveltekit-preload-data
{...$$restProps}
>
	{#if tag === 'a' && isExternalLink}
		<div class="icon">
			<OpenInNew />
		</div>
	{/if}

  <slot />

  {#if emoji}
		<div class="emoji">
			<span>👉</span>
		</div>
  {/if}
	
</svelte:element>

<style lang="scss">
  .button {
    --main-color: red;
		--light-color: blue;
		--contrast-color: green;
    
    -webkit-appearance: none;
    appearance: none;
    cursor: pointer;
    text-decoration: none;
    transition: all .2s ease-in-out;
    
    font-family: var(--font-heading);
    font-weight: 700;
    font-size: .9em;
    text-transform: uppercase;

    display: flex;
    align-items: center;
    gap: 5px;

    .icon {
      width: 1.25em;
      height: 1.25em;
			
    }

		.emoji {
			font-size: 2em;
			overflow: hidden;

			span {
				margin-left: 0;
				transition: all .3s ease-in-out;
			}
		}
		
		&:hover .emoji span {
			margin-left: 100%;
		}

    &.color {
			&--primary {
				--main-color: var(--color-primary-rgb);
				--light-color: var(--color-primary-tint-rgb);
				--contrast-color: var(--color-primary-contrast);
			}
			&--secondary {
				--main-color: var(--color-accent-rgb);
				--light-color: var(--color-accent-tint-rgb);
				--contrast-color: var(--color-accent-contrast);
			}
		}

    &.style {
			&--solid {
				background-color: rgb(var(--main-color));
				color: var(--contrast-color);

				&:hover {
					box-shadow: 0px 0px 1px 7px rgba(var(--main-color), 0.3);
				}
			}
			&--understated {
				background-color: rgb(var(--light-color));
				color: rgb(var(--main-color));

				&:hover {
					box-shadow: 0px 0px 1px 7px rgba(var(--main-color), 0.3);
				}
			}
			&--clear {
				background-color: transparent;
				color: rgb(var(--main-color));

				&:hover {
					background-color: rgb(var(--light-color));
				}
			}
		}

    &.size {
			&--small {
				font-size: 0.75rem;
			}
			&--medium {
				font-size: .9rem;
			}
			&--large {
				font-size: 1.05rem;
			}
		}
  }


</style>