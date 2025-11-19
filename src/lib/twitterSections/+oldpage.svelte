<script lang="ts">
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

  // --- Scrollytelling sections ---
  let activeSection = 0;
  const sections = [
    {
        title: "The Rise of the #SayHerName Movement",
        text1: `"In 2015, the African American Policy Forum, cofounded by [Kimberlé] Crenshaw and Columbia Law School, hosted a weeklong webinar series dedicated to discussing the state of Black women and girls in the United States. The event, titled ‘Her Dream Deferred,’ offered daily streaming of panel discussions accompanied by real-time Twitter conversations. #HerDreamDeferred, evocative of Langston Hughes’s 1951 poem about the Black nihilism of Harlem, did not resonate widely as a hashtag, but the first day’s webcast conversation, on Monday, March 30, 2015, included a different one, #SayHerName, concise enough to gain popularity."`,
        cite: `Jackson, S. J., Bailey, M., & Foucault Welles, B. (2020). #HashtagActivism: Networks of race and gender justice. The MIT Press.`
    },
    {
        title: "The Evolution of #SayHerName Throughout 2015",
        text1: `Throughout 2015, #SayHerName, alongside related hashtags such as #YouOkSis and #FastTailedGirls, became a central space for memorialization and a driving force in the fight for justice for Black women and girls who were victims of policy brutality. Thousands of people tweeted daily, using the hashtag to share stories, express solidarity, and amplify calls for accountability. As the AAPF described, the “#SayHerName campaign was born to cut through this disturbing reality and resist the invisibility of Black women, girls, and femmes by telling their story of police violence.”`,
        text2: `Across the United States, the movement inspired protests, vigils, and community gatherings that mourned lives lost and demanded systemic change, capturing national and international audiences who stood in solidarity with its message. During this period, hashtag activism emerged as a powerful form of repeated resistance–an evolving digital strategy through which users spread information, raised awareness, and connected local struggles to a broader fight for racial and gender justice.`,
        cite: `African American Policy Forum. (n.d.). #SayHerName. https://www.aapf.org/sayhername`
    },
    {
        subtitle: "Analysis of Top 25 Hashtags",
        text1: ``,
    },
    {
        subtitle: "What is Co-Occurrence?",
        text1: ``,
    },
    {
        subtitle: "Analysis of Top 25 Co-Occurring Hashtags",
        text1: ``,
    },
    {
        title: "The Users Behind #SayHerName",
        text1: `At the heart of the #SayHerName movement are the thousands of individuals who transformed their personal and collective grief, outrage, and solidarity into digital action, tweeting #SayHerName 564,925 times in 2015. While we do not know each user’s true intentions behind their tweets, the following research approaches their tweets through the lens of perceived meaning: how their words, tone, and actions may have been received and understood by others within the online public sphere.`,
        text2: `By manually scraping and coding a sample of 3,000 tweets, four key motivational patterns were extracted that illustrate why users chose to participate: calling for action, sharing information, amplifying stories, or remembering those lives lost. Complementing this, three key behavioral patterns were discovered that explore how users felt about the conversation: outrage against a broken system, unifying others under this movement, or expressing sorrow about the grievances against the Black female community.`,
    },
    {
        subtitle: "diving into behavior",
        text1: ``,
    },
    {
        subtitle: "diving into motivation",
        text1: ``,
    },
    {
        subtitle: "heatmap of behavior and motivation",
        text1: ``,
    },
  ];

  onMount(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            activeSection = +entry.target.getAttribute("data-index");
          }
        });
      },
      { threshold: 0.5 }
    );
    document.querySelectorAll(".text-section").forEach((el) => observer.observe(el));
  });
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

<!-- === HEADER === -->
<main class="bg-linear-to-b from-gray-900 to-black text-white">
  <section class="relative min-h-screen flex items-center justify-center overflow-hidden pt-24">
    <div
      class="absolute inset-0 bg-cover bg-center"
      style="background-image: url('https://static.wixstatic.com/media/b77e03_2823d8e951d844a98bb3a1d7645955eb~mv2.jpeg/v1/fill/w_582,h_908,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/b77e03_2823d8e951d844a98bb3a1d7645955eb~mv2.jpeg')"
    >
      <div class="absolute inset-0 bg-linear-to-b from-black/80 via-black/70 to-black"></div>
    </div>

    <div class="relative z-10 max-w-5xl mx-auto px-6 py-20 text-center">
      <h1 class="mb-8 text-5xl md:text-7xl tracking-tight">Understanding the Voices Behind #SayHerName</h1>

      <div class="max-w-3xl mx-auto mb-16">
        <p class="text-xl md:text-2xl text-gray-300 leading-relaxed">
          Since its emergence in 2015, the hashtag #SayHerName has stood as a powerful call for justice—
          amplifying the voices and stories of Black women and girls whose encounters with police violence have 
          too often been ignored. This project examines how the movement took shape on Twitter during its 
          formative year, uncovering patterns of participation, emotion, and community that defined its rise.
        </p>
      </div>

      <!-- Scroll Indicator -->
      <div class="animate-bounce mt-20">
        <p class="w-8 h-8 mx-auto text-purple-400 text-center">↓</p>
        <p class="text-sm mt-2 text-gray-400">Analyze Twitter Conversations</p>
      </div>
    </div>
  </section>

  <!-- === What is #SayHerName? === -->
  <section class="py-30 px-6 bg-linear-to-b from-black to-blue-950">
    <div class="max-w-4xl mx-auto">
      <h2 class="text-4xl md:text-5xl mb-8 text-center">Analyzing Twitter Conversations</h2>
      <div class="space-y-6 text-lg md:text-xl text-gray-300 leading-relaxed">
        <p>
          Here, we present the major findings from this analysis:
        </p>
        <div class="space-y-8 text-lg md:text-xl text-gray-300 leading-relaxed">
            <div class="flex gap-6 items-start">
            <div
                class="shrink-0 w-12 h-12 bg-purple-800 rounded-full flex items-center justify-center text-2xl"
            >
                1
            </div>
            <div>
                <h3 class="text-2xl mb-2 text-white">The Rise of #SayHerName</h3>
                <p>
                    How the hashtag first gained traction during AAPF’s 2015 webinar series Her Dream Deferred.            
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
                <h3 class="text-2xl mb-2 text-white">The Evolution of #SayHerName Throughout 2015</h3>
                <p>
                    Tracing how the movement grew into sustained digital resistance.
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
                <h3 class="text-2xl mb-2 text-white">The Users Behind #SayHerName</h3>
                <p>
                    Exploring the emotional and motivational dimensions of participation.
                </p>
            </div>
            </div>
        </div>
        <p>
          Together, these insights offer a data-driven portrait of digital activism as interconnected stories, 
          emotions, and calls for justice shaping the online visibility of Black women in 2015.
        </p>
      </div>
    </div>
  </section>
</main>

<!-- === SCROLLYTELLING SECTION === -->
<div class="scrollytelling-container">
  <!-- left side shows visuals -->
  <div class="visual-panel">
    <div class="visual-placeholder">
      <h2>{sections[activeSection].title}</h2>
      <p>(Visualization for this section will go here)</p>
    </div>
  </div>

  <!-- right side shows text -->
  <div class="text-panel">
    {#each sections as section, i}
      <section
        class="text-section {activeSection === i ? 'active' : ''}"
        data-index={i}
      >
        <h2>{section.title || ""}</h2>
        <h3>{section.subtitle || ""}</h3>
        <p>{section.text1}</p>
        <p>{section.text2 || ""}</p>
        <p>{section.cite || ""}</p>
      </section>
    {/each}
  </div>
</div>

<style>
    /* === Global === */
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

    /* Button hover animation (preserved) */
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

    /* === Header === */
    .header {
        padding: 5rem 3rem;
        text-align: center;
        background: linear-gradient(to bottom, #111, #222);
        color: #fff;
        animation: fadeInUp 0.8s ease-out;
    }

    .header h1 {
        font-size: 2.5rem;
        margin-bottom: 1rem;
    }

    .header p {
        max-width: 800px;
        margin: 0 auto 1rem;
        line-height: 1.7;
        font-size: 1.1rem;
    }

    .header ul {
        list-style-type: disc;
        text-align: left;
        max-width: 700px;
        margin: 2rem auto;
        padding-left: 1.5rem;
        line-height: 1.6;
    }

    /* === Scrollytelling Layout === */
    .scrollytelling-container {
        display: flex;
        height: 100vh;
        overflow: hidden;
    }

    .visual-panel {
        flex: 1;
        position: sticky;
        top: 0;
        display: flex;
        align-items: center;
        justify-content: center;
        background: #111;
        color: white;
        border-right: 1px solid rgba(255, 255, 255, 0.05);
    }

    .visual-placeholder {
        text-align: center;
        max-width: 70%;
    }

    .text-panel {
        flex: 1;
        overflow-y: scroll;
        height: 100vh;
        background: #fafafa;
        color: #111;
        padding: 4rem 3rem;
    }

    .text-section {
        margin-bottom: 80vh;
        max-width: 500px;
    }

    .text-section.active h2 {
        color: #000;
    }

    .text-section h2 {
        font-size: 1.75rem;
        margin-bottom: 1rem;
        animation: fadeInUp 0.8s ease-out;
    }

    .text-section.active h3 {
        color: #111;
    }

        .text-section h3 {
        font-size: 1.25rem; 
        margin-bottom: 0.75rem;
        color: #333; 
        font-weight: 600; 
        animation: fadeInUp 0.8s ease-out;
        }

    .text-section p {
        font-size: 1rem;
        line-height: 1.7;
        opacity: 0.9;
    }
</style>