<script lang="ts">
    import { goto } from '$app/navigation';

    function navigateToTwitter() {
        goto('/twitter');
    }

    function navigateToNews() {
        goto('/news');
    }

    function navigateHome() {
        goto('/');
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
</header>