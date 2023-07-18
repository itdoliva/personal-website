<script>
	import NavLink from "$lib/components/atoms/NavLink.svelte";
  import { _ } from "svelte-i18n";

</script>

<header>
  <nav>
    <NavLink href="/">{$_("nav.home")}</NavLink>
    <NavLink href="/work">{$_("nav.work")}</NavLink>
    <!-- <NavLink href="/blog">{$_("nav.blog")}</NavLink> -->
  </nav>
</header>

<style>
  header {
    position: relative;
    padding: 1.2em 0;
  }

  nav {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 2.6em;
  }
</style>