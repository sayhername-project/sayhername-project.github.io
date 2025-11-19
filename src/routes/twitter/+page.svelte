<script>
    import { onMount } from "svelte";
    import { goto } from '$app/navigation';

    function navigateToTwitter() {
        goto('twitter');
    }

    function navigateToNews() {
        goto('news');
    }

    function navigateHome() {
        goto('/');
    }
    import Scroller from "$lib/Scroller.svelte";

    // TEXT COMPONENTS
    import Rise from "$lib/twitterSections/Rise.svelte";
    import Users from "$lib/twitterSections/Users.svelte";
    import Behavior from "$lib/twitterSections/Behavior.svelte";
    import Evolution from "$lib/twitterSections/Evolution.svelte";
    import Linkage from "$lib/twitterSections/Linkage.svelte";
    import Motivation from "$lib/twitterSections/Motivation.svelte";

    // VISUAL COMPONENTS
</script>

<!-- SECTION 1 -->
<Scroller layout="right">
  <div slot="sticky">
    <p> frequency data chart on twit #sayhername  </p>
  </div>

  <div slot="scrolly">
    <Rise/>
  </div>
</Scroller>

<!-- SECTION 2 -->
<Scroller layout="right">
  <div slot="sticky">
    <p> idk what vis yet </p>
  </div>

  <div slot="scrolly">
    <Evolution />
  </div>
</Scroller>

<!-- SECTION 3 -->
<Scroller layout="right">
  <div slot="sticky">
    <p> some vis, maybe the tables and what they describe </p>
  </div>

  <div slot="scrolly">
    <Users />
  </div>
</Scroller>

<!-- SECTION 4 -->
<Scroller layout="right">
  <div slot="sticky">
    <p> donut </p>
  </div>

  <div slot="scrolly">
    <Behavior />
  </div>
</Scroller>

<!-- SECTION 5 -->
<Scroller layout="right">
  <div slot="sticky">
    <p> donut </p>
  </div>

  <div slot="scrolly">
    <Motivation />
  </div>
</Scroller>

<!-- SECTION 6 -->
<Scroller layout="right">
  <div slot="sticky">
    <p> heatmap or some better one </p>
  </div>

  <div slot="scrolly">
    <Linkage />
  </div>
</Scroller>