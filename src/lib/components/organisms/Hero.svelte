<script>
	import Socials from "../molecules/Socials.svelte";
  import { _ } from "svelte-i18n";
</script>

<section id="hero">

  <div class="introduction">

    <div class="introduction-headings">
      <h3>{$_("introduction.greetings")}</h3>
      <h1>Italo Doliva 👋</h1>
      <h3>{$_("introduction.profession")}</h3>
    </div>

    <div class="div-line" />
    <Socials />
  </div>

  <div class="role">
    <div class="bubbles">
      <span class='b b-0' />
      <span class='b b-1' />
      <span class='b b-2' />
      <span class='b b-1' />
      <span class='b b-0' />
    </div>
    <p>{$_("introduction.goal")}</p>
  </div>

</section>

<style lang="scss">

  #hero {
    display: flex;
    flex-direction: column;
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
      height: 2px;
      background-color: var(--color-primary);
      opacity: .2;
    }
  }

  .role {
    p {
      text-align: center;
    }

    .bubbles {
      display: flex;
      justify-content: center;
      align-items: center;
      gap: var(--gap-lesser);

      .b {
        border-radius: 100%;
        background-color: var(--color-primary);
        opacity: .2;
        aspect-ratio: 1/1;

        &.b-0 {
          width: .4em;
        }   
        &.b-1 {
          width: .65em;
        }   
        &.b-2 {
          width: 1.1em;
        }
      }
    }
  }

</style>