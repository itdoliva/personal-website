<script lang='ts'>
  export let href: string = '/'
  import { page } from '$app/stores';
  import { stripEdgeSlashes } from '$lib/utils/fmtstr';

</script>

<a {href} class:active={stripEdgeSlashes($page.url.pathname) === stripEdgeSlashes(href)}> 

  <div class="bar-container">
    <div class="bar"/>
  </div>

  <div class="axis"/>

  <div class="title">
    <p><slot></slot></p>
  </div>
</a>

<style lang="scss">
  a {
    --bar-width: 54px; 

    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: flex-end;
    align-items: center;
    font-size: 1em;

    &.active {
      .title {
        p {
          font-weight: 700;
        }
      }

      .bar-container {
        .bar {
          height: 100%;
          opacity: 1;
        }
      }
    }

    &:hover:not(.active) {
      .bar {
        height: 75%;
        opacity: .6;
      }
    }

    .bar-container {
      width: var(--bar-width);
      flex: 1 0 auto;
      display: flex;
      flex-direction: column;
      justify-content: flex-end;
      align-items: stretch;

      .bar {
        border-radius: .2em .2em 0 0;
        height: 25%;
        background: var(--color-heading);
        opacity: .4;
        flex-shrink: 1;

        transition: height .2s ease-in-out, opacity .2s ease-in-out;
      }
    }

    .axis {
      width: calc(var(--bar-width) * 1.4);
      height: 1px;
      background-color: var(--color-primary);
      opacity: .8;
    }

    .title {
      position: relative;
      flex: 0 1 35%;
      
      p {
        position: absolute;
        left: 50%;
        top: 0;
        transform: translateX(-50%);
        margin: 0;
        text-align: center;
        font-size: .75em;
        padding: .25em 0;
        font-weight: 400;
        text-transform: uppercase;
      }
    }

    

  }
  




  






</style>