<script lang="ts">
	export let id: string | undefined = undefined;
	export let title: string | undefined = undefined;
</script>

<section {id} class="content-section">

  {#if title}
    <div class="title-area">
      <div class="text">
          <h4>{title}</h4>
      </div>
    </div>
  {/if}

  <div class="content-area">
		<slot />
	</div>

  {#if $$slots['button']}
    <div class="button-area">
      <slot name="button" />
    </div>
  {/if}

</section>

<style lang="scss">
  @import '$lib/scss/breakpoints.scss';

  .content-section {
		display: flex;
    flex-direction: column;
		align-items: stretch;
    gap: calc(2*var(--gap-lesser));
		padding: 50px 0;

		.title-area {
			display: flex;
			flex-direction: column;
			gap: 15px;

      .text h4 {
        text-transform: uppercase;
        font-weight: 700;
        font-size: .75em;
      }
		}

		.content-area {
			display: grid;
			place-items: center;
      width: 100%;
		}

    .button-area {
      display: flex;
      justify-content: flex-end;
    }

		@include for-tablet-landscape-up {
      .title-area {
        max-width: 600px;
      }
		}
	}

</style>