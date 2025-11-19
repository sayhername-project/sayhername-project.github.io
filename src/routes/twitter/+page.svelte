<script>
    import { onMount } from "svelte";
    import { goto } from '$app/navigation';

    import Scroller from "$lib/Scroller.svelte";

    // TOP OF PAGE COMPONENTS
    import Header from "$lib/sections/Header.svelte";
    import Hero from "$lib/twitterSections/Hero.svelte";
    import Overview from "$lib/twitterSections/Overview.svelte";

    // TEXT COMPONENTS
    import Rise from "$lib/twitterSections/Rise.svelte";
    import Users from "$lib/twitterSections/Users.svelte";
    import Behavior from "$lib/twitterSections/Behavior.svelte";
    import Evolution from "$lib/twitterSections/Evolution.svelte";
    import Linkage from "$lib/twitterSections/Linkage.svelte";
    import Motivation from "$lib/twitterSections/Motivation.svelte";

    // VISUAL COMPONENTS
</script>

<!-- TOP OF PAGE -->
<Header />
<main class="bg-linear-to-b from-gray-900 to-black text-white">
    <Hero />
    <Overview />
</main>

<!-- SECTION 1 -->
<Scroller layout="right">
  <div slot="sticky">
    <p> frequency data chart on twit #sayhername  </p>
  </div>

  <div slot="scrolly">
    <Rise/>
  </div>
</Scroller>

<!-- carousel of tweets from her dream deferred week -->

<!-- SECTION 2 -->
<Scroller layout="right">
  <div slot="sticky">
    <p> idk what vis yet </p>
  </div>

  <div slot="scrolly">
    <Evolution />
  </div>
</Scroller>

<!-- also include some other hashtags not included in top 25 like #ifidieinpolicecustody -->
<!-- some other form of visualization examining what types of tweets -->

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