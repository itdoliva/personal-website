<script lang='ts'>
  export let href: string = '/'
  import { page } from '$app/stores';

</script>

<a {href} class:active={$page.url.pathname === href}> 

  <div class="bar-container">
    <div class="bar"/>
  </div>

  <div class="axis"/>

  <span class="title">
    <slot></slot>
  </span>
</a>

<style>
  a {
    --bar-width: 54px; 

    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: flex-end;
    align-items: center;
    font-size: 1em;
  }
  
  .title {
    flex-grow: 0;
    flex-shrink: 1;
    text-align: center;
    font-size: .75em;
    padding: .25em 0;

    text-transform: uppercase;
  }

  a.active .title {
    font-weight: 600;
  }

  .axis {
    width: calc(var(--bar-width) * 1.4);
    height: 1px;
    background-color: var(--color-primary);
    opacity: .8;
  }

  .bar-container {
    width: var(--bar-width);
    flex-grow: 1;
    flex-shrink: 0;
    display: flex;
    flex-direction: column;
    justify-content: flex-end;
    align-items: stretch;
  }
  
  .bar {
    border-radius: .2em .2em 0 0;
    height: 25%;
    background: var(--color-primary);
    opacity: .4;
    flex-shrink: 1;

    transition: height .2s ease-in-out, opacity .2s ease-in-out;
  }

  a:hover .bar,
  a.active .bar {
    height: 100%;
  }

  a:hover:not(.active) .bar {
    opacity: .6;
  }



</style>