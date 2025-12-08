<script lang="ts">
    import { goto } from '$app/navigation';
    const base = import.meta.env.BASE_URL;

    function navigateToTwitter() {
        goto(`${base}twitter`);
    }

    function navigateToNews() {
        goto(`${base}news`);
    }

    function navigateHome() {
        goto(base);
    }

    function navigateToData() {
    goto(`${base}data`);
  }
</script>

<header
  class="w-full bg-black/90 backdrop-blur-md border-b border-gray-800"
>
    <div class="max-w-6xl mx-auto flex items-center justify-between px-6 py-4">
        <!-- Title -->
        <button
            on:click={navigateHome}
            class="text-xl md:text-2xl font-semibold tracking-tight text-white hover:text-purple-300 transition-colors duration-300 focus:outline-none"
        >
            #SayHerName
        </button>

        <!-- Nav Buttons -->
        <nav class="flex items-center gap-4">
            <button
                on:click={navigateToTwitter}
                class="px-4 py-2 bg-gradient-to-r from-blue-400 to-blue-900 rounded-md text-white text-sm md:text-base transition-all duration-300 hover:scale-105 shadow-md"
            >
                Explore Twitter Convos
            </button>

            <button
                on:click={navigateToNews}
                class="px-4 py-2 bg-gradient-to-r from-blue-900 to-purple-900 rounded-md text-white text-sm md:text-base transition-all duration-300 hover:scale-105 shadow-md"
            >
                Explore News Coverage
            </button>

            <button
                on:click={navigateToData}
                class="px-4 py-2 bg-gradient-to-r from-purple-900 to-pink-900 rounded-md text-white text-sm md:text-base transition-all duration-300 hover:scale-105 shadow-md"
            >
                Behind the Data
            </button>
        </nav>
    </div>
</header>

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
