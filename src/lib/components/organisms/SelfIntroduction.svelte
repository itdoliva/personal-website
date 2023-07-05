<script>
	import Socials from "../molecules/Socials.svelte";

</script>

<div>
  <div class="main-content">
    <h3>Greetings, I'm</h3>
    <h1>Italo Doliva 👋</h1>
    <h3>Data Visualization Designer and Data Analyst</h3>
    <div class="div-line" />
    <Socials />
  </div>

  <div class="role">
    <p>I spark people's interest and curiosity to your data on online or physical mediums.</p>
  </div>
</div>

<style>
  .main-content {
    display: flex;
    flex-direction: column;
    margin: 0 auto;
  }
  .div-line {
    width: 25%;
    height: 2px;
    background-color: var(--color-primary);
    opacity: .2;
  }
</style>