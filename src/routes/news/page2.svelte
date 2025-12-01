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
        title: "The Silence Before the Storm",
        text: [
          `Before #SayHerName, their names were footnotes. Sandra Bland. Rekia Boyd. Tanisha Anderson. When Black women were killed by police, media coverage was sparse, localized, and quickly forgotten.`,
          `In 2015, a movement demanded something different: that we say their names, that we remember, that we refuse to look away. This is the story of how America's news media responded—and who chose to listen.`
        ]
    },
    {
        subtitle: "26,830 Unique Articles",
        text: [
          `Our dataset began with over 47,000 raw articles. After removing exact duplicates, filtering out Google search results, and accounting for syndicated content with identical titles, 26,830 unique articles remained—each representing a distinct moment when news media chose to cover #SayHerName.`,
          `These aren't just numbers. Each article is a decision: to publish, to platform, to remember.`
        ]
    },
    {
        title: "Part 1: When Did They Start Paying Attention?",
        text: [
          `Media attention doesn't appear by accident. It builds slowly, through pressure, tragedy, and public demand. This is when outlets finally started covering #SayHerName—and when they stopped.`
        ]
    },
    {
        subtitle: "Timeline of Coverage",
        text: [
          `The rhythm of news coverage tells its own story. Sharp spikes mark moments when the nation couldn't look away. Quiet valleys reveal when attention drifted elsewhere, even as the movement continued.`
        ],
        chartFile: "news-charts/articles_per_week_styled.html",
        chartWidth: "100%",
        chartHeight: "50%"
    },
    {
        subtitle: "Key Moments in Coverage",
        text: [
          `Certain days commanded the nation's attention. A tragic death. A protest that couldn't be ignored. A report that demanded answers. These peaks show when #SayHerName broke through the noise—and the silence that followed.`,
          `The quiet periods are just as telling. Between the headlines, the work continued, but the cameras turned away.`,
          `Insert timeline here...`
        ],
        chartFile: "news-charts/articles_per_day_styled.html",
        chartWidth: "100%",
        chartHeight: "50%",
    },
    {
        title: "Part 2: Who Controlled the Narrative?",
        text: [
          `In American media, a handful of outlets hold the power to set the agenda. When the New York Times covers something, other outlets follow. When local papers lead, they're often ignored.`,
          `Who told the story of #SayHerName? And whose voices dominated the conversation?`
        ]
    },
    {
        subtitle: "The Power Players",
        text: [
          `Across 758 news outlets, coverage was heavily concentrated. The top 10 outlets published 9,910 articles—30.7% of all coverage. The top 20 controlled 41.9% of the narrative.`,
          `The remaining 58.1% was scattered across 738 sources, each fighting for attention in a crowded media landscape.`,
          `Notice who's here—and who isn't. The Minneapolis Star Tribune alone published nearly 13% of all articles, driven by extensive local protest coverage. Major outlets like the New York Times published just 455 articles all year—less than 1.5% of total coverage.`
        ],
        chartFile: "news-charts/top_outlets_styled.html",
        chartWidth: "110%",
        chartHeight: "60%"
    },
    {
        subtitle: "Media Concentration",
        text: [
          `A small number of outlets control the majority of coverage. This concentration reveals not just who reported on #SayHerName, but who had the power to shape how America understood the movement.`
        ],
        chartFile: "news-charts/stacked_weekly_articles_by_media_styled.html",
        chartWidth: "100%",
        chartHeight: "60%"
    },
    {
        subtitle: "Who Cared More?",
        text: [
            `Police violence unfolds at the scale of neighborhoods, cities, and counties — and the first people to respond journalistically are almost always local reporters. They are the ones who hear the sirens, who arrive at the scene before press releases are drafted, who speak directly with families trying to understand what happened. In the early hours and days of most cases, it is local newsrooms that construct the first public record.`,
            `But attention is not the same as impact. As the year unfolded, national media shaped the dramatic peaks — the moments when coverage exploded into the broader public sphere. This section explores how these dynamics played out: who showed up first, who stayed the longest, and who ultimately made the story visible to the rest of the country.`
        ],
        chartFile: "news-charts/source_type_distribution_pie_styled.html",
        chartWidth: "110%",
        chartHeight: "60%"
    },
    {
       subtitle: "When Different Media Entered — and Exited",
       text: [
         `A timeline of coverage reveals that media attention varied widely across cases. Local outlets show sporadic spikes throughout the year, with some cases attracting intense reporting and others much less. Their activity tends to persist over time, and in some instances, coverage increases toward the end of the year, reflecting ongoing attention to particular incidents.`,
         `National outlets exhibit sharp, isolated peaks, such as a pronounced surge on March 20th, but otherwise coverage is uneven. Some events receive intense national attention, while others barely register. Digital-first publications often fill gaps between local and national reporting, and international or broadcast media appear primarily around the most widely noticed or globally relevant moments. Overall, the timeline illustrates a highly variable landscape of media engagement, with no single pattern dominating across categories.`
       ],
       chartFile: "news-charts/timeline_by_source_type_styled.html", // CHART 5: Timeline by source type (top 4–5 categories)
       chartWidth: "110%",
       chartHeight: "60%"
    },
    {
        subtitle: "Case-Level Examples",
        text: [
            `These patterns become clearest when we zoom into individual cases. Take a look at the following:`,
            `Button interactive here?`
        ],
        chartFile: "", // Placeholder for future interactive component
        chartWidth: "100%",
        chartHeight: "50%"
    },
    {
        subtitle: "How They Told the Story",
        text: [
            `Words matter. The difference between phrases like “officer-involved shooting” and “police killing,” or “incident” and “violence,” shapes how audiences perceive what happened. Across outlets, coverage overwhelmingly emphasized identity and outrage, with far fewer articles centering procedural, policy, or community-focused angles. This section examines the language used in headlines to understand whose perspective was centered and what frames dominated the discourse.`,
        ],
        chartFile: "news-charts/keywords_titles_styled.html",
        chartWidth: "110%",
        chartHeight: "60%"
    },
    {
        subtitle: "Keyword Categories",
        text: [
            `Grouping keywords into broader categories provides additional insight. A pie chart or bar chart (Chart 9) shows that coverage disproportionately highlighted outrage and identity, while only a small fraction of headlines focused on policy, prevention, or long-term community impact. This reinforces the observation that media tended to frame these events emotionally, often emphasizing drama or immediate consequences rather than structural context.`,
            `By examining the balance of categories, readers can see what is emphasized versus what is largely absent. Keywords around immediate harm, death, and protest dominate, while words signaling reform, accountability systems, or societal context appear far less frequently.`
        ],
        chartFile: "news-charts/keyword_categories_styled.html", // CHART 9: Keyword categories
        chartWidth: "110%",
        chartHeight: "60%"
    },
   {
        subtitle: "Emotional vs. Action Framing",
        text: [
            `Finally, Chart 10 examines emotional and action-oriented framing. Headlines using words like “tragedy” or “death” convey emotion, while those demanding “justice” or “accountability” direct readers toward action or response. This analysis shows whose perspective is centered: victims, communities, activists, or institutions. Emotional framing often highlights human impact, while action framing signals public or journalistic calls to respond.`,
            `Together, these charts illustrate not just what events were covered, but how they were interpreted and presented. The words chosen in headlines play a central role in shaping public perception, highlighting certain dimensions of the story while leaving others relatively invisible.`
        ],
        chartFile: "news-charts/emotion_framing_styled.html", // CHART 10: Emotional/Action Framing
        chartWidth: "110%",
        chartHeight: "75%"
    }
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
      style="background-image: url('YOUR_IMAGE_URL_HERE')"
    >
      <div class="absolute inset-0 bg-linear-to-b from-black/80 via-black/70 to-black"></div>
    </div>

    <div class="relative z-10 max-w-5xl mx-auto px-6 py-20 text-center">
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
      <h2 class="text-4xl md:text-5xl mb-8 text-center">Analyzing News Coverage</h2>
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
      </div>
    </div>
  </section>
</main>

<!-- === SCROLLYTELLING SECTION === -->
<div class="scrollytelling-container">
  <!-- left side shows visuals -->
  <div class="visual-panel">
    <div class="visual-placeholder">
      {#if sections[activeSection].chartFile}
        <div 
          class="chart-container"
          style="width: {sections[activeSection].chartWidth || '95%'}; height: {sections[activeSection].chartHeight || '85%'};"
        >
          <iframe 
            src={sections[activeSection].chartFile} 
            class="chart-iframe"
            title="Visualization"
          ></iframe>
        </div>
      {:else}
        <h2>{sections[activeSection].title || sections[activeSection].subtitle}</h2>
        <p class="text-gray-400 text-sm mt-4">(Visualization will appear here when scrolling)</p>
      {/if}
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
        {#if section.text}
          {#each section.text as paragraph}
            <p>{paragraph}</p>
          {/each}
        {/if}
        <p class="cite">{section.cite || ""}</p>
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

    /* Button hover animation */
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
        padding: 2rem;
    }

    .visual-placeholder {
        width: 100%;
        height: 100%;
        display: flex;
        align-items: center;
        justify-content: center;
        flex-direction: column;
    }

    .chart-container {
        display: flex;
        align-items: center;
        justify-content: center;
    }

    .chart-iframe {
        width: 100%;
        height: 100%;
        border: none;
        background: transparent;
        overflow: hidden;
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
        margin-bottom: 1rem;
    }

    .text-section .cite {
        font-size: 0.9rem;
        font-style: italic;
        opacity: 0.7;
        margin-top: 1.5rem;
    }
</style>