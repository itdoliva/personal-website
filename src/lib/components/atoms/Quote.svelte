<script lang="ts">
  export let author: string
</script>

<div class="quote">
  <p class="text"><slot /></p>
  <p class="author">— {author}</p>
</div>

<style lang="scss">
  .quote {
    display: flex;
    flex-direction: column;
    align-items: stretch;

    position: relative;
    font-family: Arial, -apple-system, sans-serif;
    font-style: italic;
    font-size: 1em;
    font-weight: 400;

    padding: var(--gap-lower-medium);
    margin-top: 2em;
    
    .author {
      font-weight: 700;
      text-align: right;
      margin: 0;
    }

    &::before {
      content: '“';
      position: absolute;
      top: 0;
      left: 12px;
      transform: translate(-.2em, .05em);
      line-height: .4;

      font-family: var(--font-heading);
      font-size: 10rem;

      color: var(--color-accent);
    }
  }
</style>