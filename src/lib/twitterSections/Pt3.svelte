<script>
  import Scroller from '$lib/components/Scroller.svelte';
  import ArticleText from '$lib/components/ArticleText.svelte';
  import Heading from '$lib/components/Heading.svelte';
  import TweetCard from '$lib/components/TweetCard.svelte';

    // Carousel components
    import { onMount, tick } from 'svelte';
    import { browser } from '$app/environment';

    // dynamic import ensures no SSR errors
    let CarouselCmp = null;
    let mounted = false;
    let carousel = null;

    onMount(async () => {
        if (!browser) return;
        await tick(); // ensures DOM is stable
        const mod = await import('svelte-carousel');
        CarouselCmp = mod.default;
        mounted = true;
    });

    function handleNextClick() {
        carousel?.next?.();
    }
</script>

<!-- SUBSECTION: Intro to Users -->
<Scroller layout="right">
  {#snippet sticky()}
    <div class="conclusion-visual">
      <h2 class="text-4xl text-white mb-8 font-bold">#SayHerName on Twitter</h2>
      <div class="stat-grid">
        <div class="stat-card">
          <div class="stat-number">564,925</div>
          <div class="stat-label">total tweets with #SayHerName in 2015</div>
        </div>
        <div class="stat-card">
          <div class="stat-number">99,949</div>
          <div class="stat-label">original tweets</div>
        </div>
      </div>
    </div>
  {/snippet}

  {#snippet scrolly()}
    <Heading scene="Scene 3" title="The Users behind #SayHerName" subtitle="A deeper look into the emotions that carried #SayHerName across Twitter" />
    
    <ArticleText>
      At the heart of the #SayHerName movement are the thousands of individuals who transformed their personal and collective grief, outrage, and solidarity into digital action, tweeting #SayHerName a total of <strong>564,925</strong> times in 2015. 
      <br/><br/>
      While we do not know each user’s true intentions behind their tweets, the following research approaches their tweets through the lens of perceived meaning: how their words, tone, and actions may have been received and understood by others within the online public sphere. 
    </ArticleText>

  {/snippet}
</Scroller>

<!-- SUBSECTION: Analysis of Behavior -->
<Scroller layout="right">
  {#snippet sticky()}
    <div class="chart-container">
        <iframe 
            src="twit-charts/behaviors_chart.html" 
            class="chart-iframe"
            title="Distribution of Tweet Behaviors<br><sup>#SayHerName</sup>"
        ></iframe>
    </div>
  {/snippet}

  {#snippet scrolly()}    
    <ArticleText>
      Studying only original tweets, we manually coded a random sample of 2,000 tweets (of varying lengths and content). From there, we extracted three key behavioral patterns that explore how users felt about the conversation: outrage against a broken system, unifying others under this movement, or expressing sorrow about the grievances against the Black female community.
    </ArticleText>
  {/snippet}
</Scroller>

<!-- SUBSECTION: Unity and Support -->
<Scroller layout="right">
  {#snippet sticky()}
    <div class="conclusion-visual">
      <h2 class="text-3xl text-white mb-8 font-bold">Tweets that emote unity/support</h2>
    </div>
    <div class="sticky-carousel-container">
      {#if mounted && CarouselCmp}
          <CarouselCmp
              bind:this={carousel}
              itemsToShow={1} 
              itemsToScroll={1}
          >
              <TweetCard
                  text="#Sayhername Topless black women are shutting down San Franciscos busiest streets during rush hour"
                  timestamp="May 21, 2015 • 6:39pm"
              />
              <TweetCard
                  text="In dismantling systems of sexism; racism, we need to center black women's experiences: #SayHerName"
                  timestamp="May 28, 2015 • 7:22pm"
              />
              <TweetCard
                  text="Rise up for the women. Rise up for us. This is not an #ontothenextone situation. #SayHerName #WhatHappenedToSandraBland"
                  timestamp="July 16, 2015 • 8:43pm"
              />
              <TweetCard
                  text="I only get on Twitter ever so often but now... I'll be tweeting my ass off for San #JusticeForSandy #SayHerName #RIHSan"
                  timestamp="July 23, 2015 • 5:05pm"
              />
              <TweetCard
                  text="Community teach-in on Justice for #NatashaMcKenna 11/3 at 7pm. Bring neighbors and friends and help us #SayHerName"
                  timestamp="October 29, 2015 • 7:38pm"
              />
          </CarouselCmp>
      {/if}
    </div>
  {/snippet}

  {#snippet scrolly()}    
    <ArticleText>
      The overwhelming majority of original tweets, 72.1%,  fall under <i>Unity and Support</i>, showing that #SayHerName functioned mainly as a collective space of affirmation and solidarity to amplify names and stories that had been overlooked.
      <br /><br />
      This data suggests that the movement’s core revolved around Twitter users who worked to support, organize, and grow the movement. 
    </ArticleText>
  {/snippet}
</Scroller>

<!-- SUBSECTION: Outrage -->
<Scroller layout="right">
  {#snippet sticky()}
    <div class="conclusion-visual">
      <h2 class="text-3xl text-white mb-8 font-bold">Tweets that emote outrage</h2>
    </div>
    <div class="sticky-carousel-container">
      {#if mounted && CarouselCmp}
          <CarouselCmp
              bind:this={carousel}
              itemsToShow={1} 
              itemsToScroll={1}
          >
              <TweetCard
                  text="ENOUGH IS ENOUGH. More harm than justice is being done. It's too much and it needs to stop NOW. #SayHerName #SandraBland #JusticeForSandy"
                  timestamp="July 23, 2015 • 6:23pm"
              />
              <TweetCard
                  text="Idk if the system is trying to be funny with the bullshit they giving us about Sandra or they really think we that dumb #SayHerName #sandra"
                  timestamp="July 24, 2015 • 2:49pm"
              />
              <TweetCard
                  text="Yeah like the sister #CharnesiaCorley and the cops in Houston forcibly searching her Vagina for....weed? #SayHerName"
                  timestamp="August 11, 2015 • 1:51am"
              />
              <TweetCard
                  text="We will Not End with a Moment of Silence. We have been Silent for too long #SayHerName #BlackTransLivesMatter DC"
                  timestamp="August 25, 2015 • 11:47pm"
              />
              <TweetCard
                  text="He murdered #YvetteSmith in 3 seconds...Coward should be convicted & sent to prison...#Population #SayHerName"
                  timestamp="September 19, 2015 • 3:17pm"
              />
          </CarouselCmp>
      {/if}
    </div>
  {/snippet}

  {#snippet scrolly()}    
    <ArticleText>
      Almost a quarter of tweets, 22.8%, expressed <i>Outrage</i>, reflecting frustration and anger towards interlocking systems of oppression–systemic racism, police violence, the media invisibility of Black women, etc. While not the dominant emotional tone, this outrage intensified during pivotal media releases, particularly during the AAPF’s #HerDreamDeferred week when #SayHerName first gained momentum. 
    </ArticleText>
  {/snippet}
</Scroller>


<!-- SUBSECTION: Sad/Mournful -->
<Scroller layout="right">
  {#snippet sticky()}
    <div class="conclusion-visual">
      <h2 class="text-3xl text-white mb-8 font-bold">Tweets that emote sadness/mourning</h2>
    </div>
    <div class="sticky-carousel-container">
      {#if mounted && CarouselCmp}
          <CarouselCmp
              bind:this={carousel}
              itemsToShow={1} 
              itemsToScroll={1}
          >
              <TweetCard
                  text="The baring of breasts is historically an act of mourning, grief or protest. #SayHerName encapsulates this perfectly."
                  timestamp="May 21, 2015 • 6:08pm"
              />
              <TweetCard
                  text="They Love Our Bodies but Not Us…"
                  timestamp="May 21, 2015 • 6:39pm"
              />
              <TweetCard
                  text="'So heartbreaking, watching that video... #SayHerName #RalkinaJones' (in reference to Sandra Bland’s arrest video)"
                  timestamp="August 14, 2015 • 7:35pm"
              />
              <TweetCard
                  text="Sandra Bland isn't trending anymore... Don't forget her story #SayHerName"
                  timestamp="September 28, 2015 • 4:05am"
              />
              <TweetCard
                  text="#ifidieinpolicecustody #Empire #WhatHappenedToSandraBland #SayHerName #wewillnotforget"
                  timestamp="October 15, 2015 • 1:33am"
              />
          </CarouselCmp>
      {/if}
    </div>
  {/snippet}

  {#snippet scrolly()}    
    <ArticleText>
      The smallest category, 5.12%, <i>Sad/Mournful</i>, represents tweets rooted in grief–a direct emotional response to lives lost and the injustices embedded in systems that harm Black women. Its small percentage suggests that, although the movement began in mourning, grief was more often folded into supportive and activist messaging than expressed on its own. 
    </ArticleText>
  {/snippet}
</Scroller>

<!-- SUBSECTION: Analysis of Motivation -->
<Scroller layout="right">
  {#snippet sticky()}
    <div class="conclusion-visual">
      <h2 class="text-4xl text-white mb-8 font-bold">#SayHerName on Twitter</h2>
      <div class="stat-grid">
        <div class="stat-card">
          <div class="stat-number">Motivation</div>
          <div class="stat-label">analysis</div>
        </div>
      </div>
    </div>
  {/snippet}

  {#snippet scrolly()}    
    <ArticleText>
      Complementing this, three key behavioral patterns were discovered that explore how users felt about the conversation: outrage against a broken system, unifying others under this movement, or expressing sorrow about the grievances against the Black female community.
    </ArticleText>

  {/snippet}
</Scroller>

<!-- SUBSECTION: Linkage -->
<Scroller layout="right">
  {#snippet sticky()}
    <div class="conclusion-visual">
      <h2 class="text-4xl text-white mb-8 font-bold">#SayHerName on Twitter</h2>
      <div class="stat-grid">
        <div class="stat-card">
          <div class="stat-number">Linkage</div>
          <div class="stat-label">analysis</div>
        </div>
      </div>
    </div>
  {/snippet}

  {#snippet scrolly()}    
    <ArticleText>
      tbd.
    </ArticleText>

  {/snippet}
</Scroller>

<style>

  @keyframes fadeIn {
    from {
      opacity: 0;
      transform: translateY(20px);
    }
    to {
      opacity: 1;
      transform: translateY(0);
    }
  }

  .chart-container {
      width: 100%;
      height: 100vh;
      display: flex;
      align-items: center;
      justify-content: center;
  }

  .chart-iframe {
      width: 95%;
      height: 95%;
      border: none;
      background: transparent;
      border-radius: 8px;
  }

  .stat-grid {
    display: grid;
    gap: 2rem;
    margin-top: 3rem;
    max-width: 600px;
    margin-left: auto;
    margin-right: auto;
  }

  .stat-card {
    background: linear-gradient(135deg, rgba(114, 110, 151, 0.2), rgba(122, 147, 118, 0.2));
    padding: 1.5rem;
    border-radius: 12px;
    border: 1px solid rgba(255, 255, 255, 0.1);
  }

  .stat-number {
    font-size: 3rem;
    font-weight: 700;
    color: #d98c8c;
    margin-bottom: 0.5rem;
  }

  .stat-label {
    font-size: 0.9rem;
    color: #e8d9c3;
    text-transform: uppercase;
    letter-spacing: 0.05em;
  }

  .sticky-carousel-container {
      width: 80%;         /* keep it centered */
      max-width: 500px;   /* limit width */
      height: auto;
      margin: 0 auto;
  }

  /* Carousel arrows look cleaner on dark background */
  :global(.carousel-arrow) {
      background: #ffffff22 !important;
      border-radius: 50%;
  }

  :global(.carousel-arrow:hover) {
      background: #ffffff44 !important;
  }
</style>