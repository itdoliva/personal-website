<script lang="ts">
  export let color: 'primary' | 'secondary' = 'primary'
  export let background: boolean = false
</script>

<div class="tag {color} {background ? 'background' : ''}">
  <h5><slot /></h5>
</div>

<style lang="scss">
  .tag {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 5px;
    font-weight: 500;
    width: fit-content;
    white-space: nowrap;
    
    h5 {
      font-size: .65em;
      text-transform: uppercase;
      font-weight: 500;
    }

    &.primary h5 {
      color: var(--color-primary);
    }
    &.secondary h5 {
      color: var(--color-accent);
    }

    &.background {
      padding: .1em .5em;
      border-radius: 8px;

      &.primary {
        background: var(--color-primary);
        h5 {
          color: var(--color-on-accent);
        }
      }
      &.secondary {
        background: var(--color-accent);
        h5 {
          color: var(--color-on-accent);
        }
      }
    }
  }
</style>
