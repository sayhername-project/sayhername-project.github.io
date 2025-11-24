<script lang="ts">
	// TOP OF PAGE COMPONENTS
    import HeaderBar from "$lib/components/HeaderBar.svelte";
    import Hero from "$lib/twitterSections/Hero.svelte";
    import Overview from "$lib/twitterSections/Overview.svelte";

    // TEXT COMPONENTS
    import Pt1 from "$lib/twitterSections/Pt1.svelte";
    import Pt2 from "$lib/twitterSections/Pt2.svelte";
    import Pt3 from "$lib/twitterSections/Pt3.svelte";
    import Pt4 from "$lib/twitterSections/Pt4.svelte";
</script>

<!-- TOP OF PAGE -->

<main class="">
    <HeaderBar />
    <main class="bg-linear-to-b from-gray-900 to-black text-white">
        <Hero />
        <Overview />
    </main>

    <!-- Scrollytelling Sections -->
    <div class="scrolling-container">
        <Pt1 />
        <Pt2 />
        <Pt3 />
        <Pt4 />
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
</style>
