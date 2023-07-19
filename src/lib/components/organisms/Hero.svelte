<script>
	import Socials from "../molecules/Socials.svelte";
  import { _ } from "svelte-i18n";
</script>

<section id="hero">

  <div class="introduction">

    <div class="introduction-headings">
      <h3>{$_("hero.greetings")}</h3>
      <h1>Italo Doliva 👋</h1>
      <h3>{$_("hero.profession")}</h3>
    </div>

    <div class="div-line" />
    <Socials />
  </div>

  <div class="role">
    <h2>{$_("hero.goal")}</h2>
  </div>

</section>

<style lang="scss">

  #hero {
    display: flex;
    flex-direction: column;
    margin-bottom: 2em;
  }

  .introduction {
    display: flex;
    flex-direction: column;
    gap: var(--gap-lower-medium);
    margin: 4em auto;

    h1 {
      font-weight: 700;
    }

    .introduction-headings {
      line-height: 1;
    }

    .div-line {
      width: 25%;
      height: 1px;
      background-color: var(--color-primary);
      opacity: .2;
    }
  }

  .role {
    h2 {
      text-align: center;
    }

  }

</style>