<script lang="ts">
  import { goto } from '$app/navigation';

  function navigateToTwitter() {
    goto('twitter');
  }

  function navigateToNews() {
    goto('news');
  }

  import HeaderBar from "$lib/components/HeaderBar.svelte";
</script>

<HeaderBar />

<svelte:head>
  <title>#SayHerName: Voices, Media, and Data</title>
  <meta
    name="description"
    content="A project exploring how the #SayHerName movement unfolded across social media and news media in 2015."
  />
</svelte:head>

<!-- main content -->
<main class="bg-linear-to-b from-gray-900 to-black text-white">
  <section class="relative min-h-screen flex items-center justify-center overflow-hidden pt-24">
    <div
      class="absolute inset-0 bg-cover bg-center"
      style="background-image: url('https://static.wixstatic.com/media/b77e03_2823d8e951d844a98bb3a1d7645955eb~mv2.jpeg/v1/fill/w_582,h_908,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/b77e03_2823d8e951d844a98bb3a1d7645955eb~mv2.jpeg')"
    >
      <div class="absolute inset-0 bg-linear-to-b from-black/80 via-black/70 to-black"></div>
    </div>

    <div class="relative z-10 max-w-5xl mx-auto px-6 py-20 text-center">
      <h1 class="mb-8 text-5xl md:text-7xl tracking-tight">#SayHerName</h1>
      <p class="text-2xl md:text-3xl mb-12 text-purple-300">Voices, Media, and Data</p>

      <div class="max-w-3xl mx-auto mb-16">
        <p class="text-xl md:text-2xl text-gray-300 leading-relaxed">
          A Wellesley CredLab project examining how the #SayHerName movement unfolded across
          social media and news media in 2015.
        </p>
      </div>

      <!-- Scroll Indicator -->
      <div class="animate-bounce mt-20">
        <p class="w-8 h-8 mx-auto text-purple-400 text-center">↓</p>
        <p class="text-sm mt-2 text-gray-400">Learn more</p>
      </div>
    </div>
  </section>

  <!-- === What is #SayHerName? === -->
  <section class="py-30 px-6 bg-linear-to-b from-black to-blue-950">
    <div class="max-w-4xl mx-auto">
      <h2 class="text-4xl md:text-5xl mb-8 text-center">What is #SayHerName?</h2>
      <div class="space-y-6 text-lg md:text-xl text-gray-300 leading-relaxed">
        <p>
          Launched in 2015 by the
          <strong class="text-white">African American Policy Forum (AAPF)</strong> and the
          <strong class="text-white">Center for Intersectionality and Social Policy Studies</strong>,
          #SayHerName is a social movement and campaign that brings awareness to Black women victims of police brutality and anti-Black violence.
        </p>
        <p>
          The movement emerged from a critical observation: while cases of police violence against Black men received significant media attention, Black women's experiences of state violence remained largely invisible.
          #SayHerName challenges this erasure by insisting that we name and remember Black women who have been killed by police.
        </p>
        <p class="text-purple-300 italic">
          "Fill the void. Lift your voice. Say her name." — Kimberlé Crenshaw and the African American Policy Forum
        </p>
      </div>
    </div>
  </section>

  <!-- === Our Goals === -->
  <section class="py-30 px-6 bg-linear-to-b from-blue-950 to-black">
    <div class="max-w-4xl mx-auto">
      <h2 class="text-4xl md:text-5xl mb-8 text-center">Our Goals</h2>
      <div class="space-y-8 text-lg md:text-xl text-gray-300 leading-relaxed">
        <div class="flex gap-6 items-start">
          <div
            class="shrink-0 w-12 h-12 bg-purple-800 rounded-full flex items-center justify-center text-2xl"
          >
            1
          </div>
          <div>
            <h3 class="text-2xl mb-2 text-white">Document Digital Activism</h3>
            <p>
              Trace how the #SayHerName movement gained visibility and momentum on Twitter during 2015. We examine when and how conversations emerged, which voices led them, and how hashtags, retweets, and networks helped amplify calls for justice.
            </p>
          </div>
        </div>

        <div class="flex gap-6 items-start">
          <div
            class="shrink-0 w-12 h-12 bg-pink-800 rounded-full flex items-center justify-center text-2xl"
          >
            2
          </div>
          <div>
            <h3 class="text-2xl mb-2 text-white">Examine Media Narratives</h3>
            <p>
              Analyze how mainstream and independent news outlets covered #SayHerName. By comparing language, framing, and source diversity, we aim to uncover which perspectives were centered and which were left out in national and local media conversations.
            </p>
          </div>
        </div>

        <div class="flex gap-6 items-start">
          <div
            class="shrink-0 w-12 h-12 bg-purple-800 rounded-full flex items-center justify-center text-2xl"
          >
            3
          </div>
          <div>
            <h3 class="text-2xl mb-2 text-white">Bridge Data and Storytelling</h3>
            <p>
              Use data visualization to translate complex social and media dynamics into accessible, interactive narratives. We believe that insight into activism, media, and justice should be accessible to everyone, not just researchers or data experts.
            </p>
          </div>
        </div>

        <div class="flex gap-6 items-start">
          <div
            class="shrink-0 w-12 h-12 bg-pink-800 rounded-full flex items-center justify-center text-2xl"
          >
            4
          </div>
          <div>
            <h3 class="text-2xl mb-2 text-white">Contribute to Collective Memory</h3>
            <p>
              Build a public, interactive archive that preserves the voices and data surrounding #SayHerName. By making this work accessible, we honor the movement’s legacy and support ongoing research and activism around race, gender, and justice.
            </p>
          </div>
        </div>
      </div>
    </div>
  </section>

  <!-- === Call to Action === -->
  <section class="py-24 px-6 bg-black">
    <div class="max-w-4xl mx-auto text-center">
      <h2 class="text-4xl md:text-5xl mb-8">Explore the Data</h2>
      <p class="text-xl text-gray-300 mb-12 max-w-2xl mx-auto">
        Dive into our analysis of how #SayHerName unfolded across digital and traditional media
        spaces in 2015.
      </p>

      <div class="flex flex-col sm:flex-row gap-6 justify-center items-center">
        <button
          on:click={navigateToTwitter}
          class="group relative px-8 py-4 bg-linear-to-r from-blue-400 to-blue-900 hover:from-blue-400 hover:to-blue-900 rounded-lg text-xl transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-2xl min-w-[280px]"
        >
          <span class="flex items-center justify-center gap-3">
            Explore Twitter Conversations →
          </span>
        </button>

        <button
          on:click={navigateToNews}
          class="group relative px-8 py-4 bg-linear-to-r from-blue-900 to-purple-900 hover:from-blue-900 hover:to-purple-900 rounded-lg text-xl transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-2xl min-w-[280px]"
        >
          <span class="flex items-center justify-center gap-3">
            Explore News Coverage →
          </span>
        </button>
      </div>
    </div>
  </section>

  <!-- === Footer === -->
  <footer
    class="py-12 px-6 bg-linear-to-t from-gray-900 to-black border-t border-gray-800 text-center"
  >
    <p class="text-gray-400 mb-2">#SayHerName</p>
    <p class="text-gray-500 text-sm">By Kailyn Lau and Katrina Huang</p>
    <p class="text-gray-600 text-xs mt-4">
      Data collected and analyzed from 2015 • Wellesley Cred Lab with Prof Eni Mustafaraj
    </p>
  </footer>
</main>

<style>
  :global(html) {
    scroll-behavior: smooth;
  }

  @keyframes fadeInUp {
    from {
      opacity: 0;
      transform: translateY(30px);
    }
    to {
      opacity: 1;
      transform: translateY(0);
    }
  }

  section {
    animation: fadeInUp 0.8s ease-out;
  }

  button {
    position: relative;
    overflow: hidden;
  }

  button::before {
    content: '';
    position: absolute;
    top: 50%;
    left: 50%;
    width: 0;
    height: 0;
    border-radius: 50%;
    background: rgba(255, 255, 255, 0.1);
    transform: translate(-50%, -50%);
    transition: width 0.6s, height 0.6s;
  }

  button:hover::before {
    width: 300px;
    height: 300px;
  }
</style>