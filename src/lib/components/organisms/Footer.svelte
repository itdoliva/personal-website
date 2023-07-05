<script>
	import Socials from "$lib/components/molecules/Socials.svelte";

</script>

<footer>
  <Socials />
  <div class="div-line" />
  <p>© 2023 Designed and developed by Italo Oliveira. All rights reserved.</p>
</footer>

<style>
  footer {
    background-color: var(--color-accent);
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 4px;
    padding: 1em 0;
  }

  .div-line {
    width: 25%;
    height: 1px;
    background-color: var(--color-on-accent);
  }

  p { 
    margin: 0;
    color: var(--color-on-accent);
    text-align: center;
  }

</style>