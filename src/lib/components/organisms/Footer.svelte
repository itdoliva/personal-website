<script>
	import Socials from "$lib/components/molecules/Socials.svelte";
  import { _ } from "svelte-i18n";

</script>

<footer>
  <Socials onAccent />
  <div class="div-line" />
  <p>{$_("footer")}</p>
</footer>

<style>
  footer {
    background-color: var(--color-accent);
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 10px;
    padding: 1em 0;
    font-size: 12px;
  }

  .div-line {
    width: 25%;
    height: 1px;
    background-color: var(--color-on-accent);
    opacity: .25;
  }

  p { 
    font-family: var(--font-heading);
    margin: 0;
    color: var(--color-on-accent);
    text-align: center;
  }

</style>