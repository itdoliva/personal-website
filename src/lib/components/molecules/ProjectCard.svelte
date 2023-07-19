<script lang="ts">
  import Card from "$lib/components/atoms/Card.svelte";
	import Tag from "$lib/components/atoms/Tag.svelte";
  import Image from "$lib/components/atoms/Image.svelte";

  export let title: string;
  export let slug: string;
  export let tags: string[] | undefined;

  export let showImage: boolean = true;

  const imagesFolder = `/images/projects/${slug}`
  const coverImage = `${imagesFolder}/cover.png`
</script>

<Card
href="/work/{slug}"
target="_self"
additionalClass="project-card {!showImage || !coverImage ? 'no-image' : ''}"
>
  <div class="image" slot="image">
    {#if coverImage}
      <Image src={coverImage} alt="Cover image of this project" />
    {/if}
  </div>

  <div class="content" slot="content">
    <p class="title">
      {title}
    </p>
  </div>

  <div class="footer" slot="footer">
    {#if tags?.length}
      <div class="tags">
        {#each tags.slice(0, 2) as tag}
          <Tag>{tag}</Tag>
        {/each}
      </div>
    {/if}
  </div>
</Card>

<style lang="scss">
	.content {
		display: flex;
		flex-direction: column;
		align-items: stretch;

    .title {
      display: flex;
      align-items: center;
      justify-content: space-between;
      width: 100%;
      font-weight: 600;
      font-size: .8em;
      margin: 0;
    }
	}

  .image {
    aspect-ratio: 4/3;
    // background: var(--color-text);
    opacity: 1;
  }

	.tags {
		display: flex;
		align-items: center;
		gap: var(--gap-lower-medium);
		flex-wrap: wrap;
	}


	:global(.project-card .image img) {
		object-fit: cover;
	}

	:global(.project-card.no-image > .image) {
		display: none;
	}
</style>
