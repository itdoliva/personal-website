<script lang="ts">
  import { _ } from "svelte-i18n";
	import Linkedin from '$lib/icons/linkedin.svelte';
	import Mail from '$lib/icons/mail.svelte';

  export let onAccent: Boolean = false
</script>


<div class="socials" class:on-accent={onAccent}>
  <a 
  href="https://www.linkedin.com/in/italodoliva/"
  target="_blank"
  title={$_("socials.linkedin")}
  >
    <Linkedin />
  </a>

  <a
  href="mailto:hello@italodoliva.com.br"
  title={$_("socials.email")}
  >
    <Mail />
  </a>
</div>

<style>
  .socials {
    display: flex;
    align-items: center;
    gap: 8px;
  }

  a {
    transition: all 0.2s ease-in-out;
    width: 32px;
  }

  .socials:not(.on-accent) a {
    color: rgba(var(--color-primary-rgb), .6);
    fill: rgba(var(--color-primary-rgb), .6);

    &:hover {
      color: rgba(var(--color-accent-rgb), 1);
      fill: rgba(var(--color-accent-rgb), 1);
    }
  }

  .socials.on-accent a {
    color: var(--color-on-accent);
    fill: var(--color-on-accent);

  }

</style>