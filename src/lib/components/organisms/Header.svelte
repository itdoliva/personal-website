<script>
	import NavLink from "$lib/components/atoms/NavLink.svelte";

</script>
<header>
  <nav>
    <NavLink href="/">Home</NavLink>
    <NavLink href="/work">Work</NavLink>
    <NavLink href="/blog">Blog</NavLink>
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