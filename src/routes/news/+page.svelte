<script lang="ts">
	import { goto } from '$app/navigation';
	import Spacer from '$lib/components/Spacer.svelte';
  import HeaderBar from "$lib/components/HeaderBar.svelte";


	// Import section components
    import NamesInteractive from '$lib/newsSections/NamesInteractive.svelte';
	import Opening from '../../lib/newsSections/Opening.svelte';
  import Part0_5 from '../../lib/newsSections/Part0_5.svelte';
	import Part1 from '../../lib/newsSections/Part1.svelte';
	import Part2 from '../../lib/newsSections/Part2.svelte';
	import Part3 from '../../lib/newsSections/Part3.svelte';
	import Part4 from '../../lib/newsSections/Part4.svelte';
	import Part5 from '../../lib/newsSections/Part5.svelte';

	function navigateToTwitter() {
		goto('twitter');
	}

	function navigateToNews() {
		goto('news');
	}

	function navigateHome() {
		goto('/');
	}
</script>

<svelte:head>
	<title>News Coverage | #SayHerName</title>
</svelte:head>

<!-- <header
  class="w-full bg-black/90 backdrop-blur-md border-b border-gray-800"
>
  <div class="max-w-6xl mx-auto flex items-center justify-between px-6 py-4">
    // Header
    <button
      on:click={navigateHome}
      class="text-xl md:text-2xl font-semibold tracking-tight text-white hover:text-purple-300 transition-colors duration-300 focus:outline-none"
    >
      #SayHerName
    </button>

    // Nav 
    <nav class="flex items-center gap-4">
      <button
        on:click={navigateToTwitter}
        class="px-4 py-2 bg-gradient-to-r from-blue-400 to-blue-900 rounded-md text-white text-sm md:text-base transition-all duration-300 hover:scale-105 shadow-md"
      >
        Explore Twitter Conversations
      </button>

      <button
        on:click={navigateToNews}
        class="px-4 py-2 bg-gradient-to-r from-blue-900 to-purple-900 rounded-md text-white text-sm md:text-base transition-all duration-300 hover:scale-105 shadow-md"
      >
        Explore News Coverage
      </button>
    </nav>
  </div>
</header> -->

<HeaderBar />

<main class="">
	<section class="relative min-h-screen flex items-center justify-center overflow-hidden pt-24">
    <div
      class="absolute inset-0 bg-cover bg-center"
      style="background-image: url('https://static.wixstatic.com/media/b77e03_2823d8e951d844a98bb3a1d7645955eb~mv2.jpeg/v1/fill/w_582,h_908,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/b77e03_2823d8e951d844a98bb3a1d7645955eb~mv2.jpeg')"    >
      <div class="absolute inset-0 bg-linear-to-b from-black/80 via-black/70 to-black"></div>
      <div
      style="position: absolute; bottom: 0; left: 0; right: 0; background-color: rgba(0, 0, 0, 0.6); color: white; padding: 5px 10px; font-size: 12px; text-align: center;"
    >
      Image source: #SayHerName: Black Women’s Stories of Police Violence and Public Silence
    </div>
    </div>

    <div class="relative z-10 max-w-5xl mx-auto px-6 py-20 text-center text-white">
      <h1 class="mb-8 text-5xl md:text-7xl tracking-tight">How Media Covered #SayHerName</h1>

      <div class="max-w-3xl mx-auto mb-16">
        <p class="text-xl md:text-2xl text-gray-300 leading-relaxed">
          When Black women were killed by police, their stories were often buried or forgotten. 
          In 2015, #SayHerName challenged America to remember. This analysis reveals how news media 
          responded—tracking coverage patterns, key moments, and the outlets that amplified these voices.
        </p>
      </div>

      <!-- Scroll Indicator -->
      <div class="animate-bounce mt-20">
        <p class="w-8 h-8 mx-auto text-purple-400 text-center">↓</p>
        <p class="text-sm mt-2 text-gray-400">Explore News Coverage</p>
      </div>
    </div>
  </section>

  <!-- === Introduction Section === -->
  <section class="py-30 px-6 bg-linear-to-b from-black to-blue-950">
    <div class="max-w-4xl mx-auto">
      <h2 class="text-4xl md:text-5xl mb-8 text-center text-white">Analyzing News Coverage</h2>
      <div class="space-y-6 text-lg md:text-xl text-gray-300 leading-relaxed">
        <p>
          Through data analysis of thousands of news articles from 2015, we trace how mainstream media 
          engaged with #SayHerName—from the movement's launch to its evolution throughout the year.
        </p>
        <div class="space-y-8 text-lg md:text-xl text-gray-300 leading-relaxed">
            <div class="flex gap-6 items-start">
            <div
                class="shrink-0 w-12 h-12 bg-purple-800 rounded-full flex items-center justify-center text-2xl"
            >
                1
            </div>
            <div>
                <h3 class="text-2xl mb-2 text-white">When Did They Start Paying Attention?</h3>
                <p>
                    Tracking the timeline of coverage to reveal when media outlets amplified #SayHerName—and when they went silent.
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
                <h3 class="text-2xl mb-2 text-white">Which Outlets Led the Conversation?</h3>
                <p>
                    Identifying which news organizations gave the movement sustained attention versus fleeting mentions.
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
                <h3 class="text-2xl mb-2 text-white">What Stories Did They Tell?</h3>
                <p>
                    Examining how media framed the movement and whose voices were centered in the narrative.
                </p>
            </div>
            </div>
        </div>
        <p>
          Together, these findings illuminate not just what was covered, but what was overlooked—
          revealing the gaps between digital activism and traditional media attention.
        </p>
        <br /> <br />
      </div>
    </div>
  </section>

<!-- Scrollytelling Sections -->
<div class="scrolling-container">
    <Opening />
    <Part0_5 />
    <Part1 />
    <Part2 />
    <Part3 />
    <Part4 />
    <Part5 />
</div>

<!-- <Spacer height="20vh" /> -->
</main>

<style>
	:global(html) {
		scroll-behavior: smooth;
	}

	.scrolling-container {
		background: linear-gradient(to right, rgb(17, 17, 17) 50%, rgb(245, 245, 245) 50%);
		background-attachment: fixed;
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
		transition:
			width 0.6s,
			height 0.6s;
	}

	button:hover::before {
		width: 300px;
		height: 300px;
	}
</style>
