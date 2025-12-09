<script>
  import Scroller from '$lib/components/Scroller.svelte';
  import ArticleText from '$lib/components/ArticleText.svelte';
  import Heading from '$lib/components/Heading.svelte';
  import TweetCard from '$lib/components/TweetCard.svelte';
  import Spacer from '$lib/components/Spacer.svelte';

  import { onMount, tick } from 'svelte';
  import { browser } from '$app/environment';

  let CarouselCmp = null;
  let mounted = false;
  let carousel = null;

  onMount(async () => {
      if (!browser) return;
      await tick(); 
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
    <Spacer />
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
        <div class="stat-card">
          <div class="stat-number">172,384</div>
          <div class="stat-label">users involved</div>
        </div>
      </div>
    </div>
    <Spacer />
  {/snippet}

  {#snippet scrolly()}
    <Heading 
      scene="Scene 3" 
      title="The Users behind #SayHerName" 
      subtitle="A deeper look into the emotions that carried #SayHerName across Twitter" 
    />
    
    <ArticleText>
      At the heart of the #SayHerName movement are the thousands of individuals who transformed their personal 
      and collective grief, outrage, and solidarity into digital action, tweeting #SayHerName a total of 
      <strong>564,925</strong> times in 2015. 

      <br/><br/>

      While we do not know each user’s true intentions behind their tweets, the following research approaches 
      their tweets through the lens of perceived meaning: how their words, tone, and actions may have been received 
      and understood by others within the online public sphere. 
    </ArticleText>

  {/snippet}
</Scroller>

<Spacer />

<!-- SUBSECTION: Analysis of Behavior -->
<Scroller layout="right">
  {#snippet sticky()}
    <Spacer />
    <div class="chart-container">
      <iframe 
          src="twit-charts/behaviors_chart.html" 
          class="chart-iframe"
          title="Distribution of Tweet Behaviors<br><sup>#SayHerName</sup>"
      ></iframe>
      <p class="cite-p">
        The chart only includes tweets from individuals actively engaged in the #SayHerName movement, rather than retweets or replies.        
      </p>
    </div>
    <Spacer />
  {/snippet}

  {#snippet scrolly()}    
    <ArticleText>
      Studying only original tweets, we manually coded a random sample of 2,000 tweets (of varying lengths and content). 
      From there, we extracted three key behavioral patterns that explore how users felt about the conversation: 
      outrage against a broken system, unifying others under this movement, or expressing sorrow about the grievances 
      against the Black female community.
    </ArticleText>
  {/snippet}
</Scroller>

<Spacer />

<!-- SUBSECTION: Unity and Support -->
<Scroller layout="right">
  {#snippet sticky()}
    <Spacer />
    <div class="conclusion-visual">
      <h2 class="text-xl text-white mb-8 font-bold">Tweets that emote unity and support</h2>
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
    <br/><br/>
    <div class="cite-text">
        <p class="cite-p">
            To protect user privacy, the above tweets were anonymized.
        </p>
    </div>
    <Spacer />
  {/snippet}

  {#snippet scrolly()}    
    <ArticleText>
      The overwhelming majority of original tweets, 72.1%,  fall under <i>Unity and Support</i>, showing that 
      #SayHerName functioned mainly as a collective space of affirmation and solidarity to amplify names and stories 
      that had been overlooked.
      <br /><br />
      This data suggests that the movement’s core revolved around Twitter users who worked to support, organize, 
      and grow the movement. 
    </ArticleText>
  {/snippet}
</Scroller>


<!-- SUBSECTION: Outrage -->
<Scroller layout="right">
  {#snippet sticky()}
    <Spacer />
    <div class="conclusion-visual">
      <h2 class="text-xl text-white mb-8 font-bold">Tweets that emote outrage</h2>
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
    <br/><br/>
    <div class="cite-text">
        <p class="cite-p">
            To protect user privacy, the above tweets were anonymized.
        </p>
    </div>
    <Spacer />
  {/snippet}

  {#snippet scrolly()}    
    <ArticleText>
      Almost a quarter of tweets, 22.8%, expressed <i>Outrage</i>, reflecting frustration and anger towards 
      interlocking systems of oppression–systemic racism, police violence, the media invisibility of Black women, 
      etc. While not the dominant emotional tone, this outrage intensified during pivotal media releases, particularly 
      during the AAPF’s #HerDreamDeferred week when #SayHerName first gained momentum. 
    </ArticleText>
  {/snippet}
</Scroller>


<!-- SUBSECTION: Sad/Mournful -->
<Scroller layout="right">
  {#snippet sticky()}
    <Spacer />
    <div class="conclusion-visual">
      <h2 class="text-xl text-white mb-8 font-bold">Tweets that emote sadness/mourning</h2>
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
                  text="They Love Our Bodies but Not Us: Powerful Images From #SayHerName Demonstrations"
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
    <br/><br/>
    <div class="cite-text">
        <p class="cite-p">
            To protect user privacy, the above tweets were anonymized.
        </p>
    </div>
    <Spacer />
  {/snippet}

  {#snippet scrolly()}    
    <ArticleText>
      The smallest category, 5.12%, <i>Sad/Mournful</i>, represents tweets rooted in grief–a direct emotional 
      response to lives lost and the injustices embedded in systems that harm Black women. Its small percentage 
      suggests that grief was more often folded into supportive and activist messaging than expressed on its own. 
    </ArticleText>
  {/snippet}
</Scroller>

<!-- SUBSECTION: Analysis of Motivation -->
<Scroller layout="right">
  {#snippet sticky()}
    <Spacer />
    <div class="chart-container">
      <iframe 
          src="twit-charts/motivations_chart.html" 
          class="chart-iframe"
          title="Distribution of Tweet Motivations<br><sup>#SayHerName</sup>"
      ></iframe>
      <p class="cite-p">
        The chart only includes tweets from individuals actively engaged in the #SayHerName movement, rather than retweets or replies.        
      </p>
    </div>
    <Spacer />
  {/snippet}

  {#snippet scrolly()}    
    <ArticleText>
      Complementing this, four key motivational themes were discovered that illustrate why users 
      chose to participate: calling others to action, disseminating information, to resist a dominant 
      narrative, or remembering those lives lost. 
    </ArticleText>
  {/snippet}
</Scroller>

<Spacer />

<!-- SUBSECTION: CTA -->
<Scroller layout="right">
  {#snippet sticky()}
    <Spacer />
    <div class="conclusion-visual">
      <h2 class="text-xl text-white mb-8 font-bold">Tweets that call others to action</h2>
    </div>
    <div class="sticky-carousel-container">
      {#if mounted && CarouselCmp}
          <CarouselCmp
              bind:this={carousel}
              itemsToShow={1} 
              itemsToScroll={1}
          >
              <TweetCard
                  text="how many black n brown men on my feed today will #SayHerName and stand with our women who are being taken by police violence"
                  timestamp="May 20, 2015 • 4:44pm"
              />
              <TweetCard
                  text="Demand justice for #SandraBland! Tell the #DoJ to investigate: #SayHerName #BlackLivesMatter"
                  timestamp="July 22, 2015 • 11:59pm"
              />
              <TweetCard
                  text="Get involved before it's your name at the end of a hashtag - #SayHerName #SandraBland"
                  timestamp="July 25, 2015 • 5:54am"
              />
          </CarouselCmp>
      {/if}
    </div>
    <br/><br/>
    <div class="cite-text">
        <p class="cite-p">
            To protect user privacy, the above tweets were anonymized.
        </p>
    </div>
    <Spacer />
  {/snippet}

  {#snippet scrolly()}    
    <ArticleText>
      Nearly a quarter of tweets (21.5%) aimed to <i>call others to action</i> and encourage participation in 
      the movement. They also may demand recognition of Black women’s sufferings by calling on those in 
      positions of power–such as political leaders, policymakers, and institutions–to take concrete steps 
      toward systemic change. By rallying others to speak out and demand accountability, users aimed to 
      interrupt the main narrative with the #SayHerName movement.
    </ArticleText>
  {/snippet}
</Scroller>

<!-- SUBSECTION: Info/Aware -->
<Scroller layout="right">
  {#snippet sticky()}
    <Spacer />
    <div class="conclusion-visual">
      <h2 class="text-xl text-white mb-8 font-bold">Tweets that share information on #SayHerName</h2>
    </div>
    <div class="sticky-carousel-container">
      {#if mounted && CarouselCmp}
          <CarouselCmp
              bind:this={carousel}
              itemsToShow={1} 
              itemsToScroll={1}
          >
              <TweetCard
                  text="Today 3pm ET: #SayHerName, an online panel on race+gender in state violence. Twitter chat after at #HerDreamDeferred"
                  timestamp="March 30, 2015 • 5:05pm"
              />
              <TweetCard
                  text="Mainstream Media Remains Silent About Black Women Killed By Police #sayhername"
                  timestamp="May 14, 2015 • 12:00am"
              />
              <TweetCard
                  text="Painter: With Sojourner Truth's breast-baring, 'what had been intended as degradation became a triumph of embodied rhetoric.' #SayHerName"
                  timestamp="May 21, 2015 • 10:57pm"
              />
          </CarouselCmp>
      {/if}
    </div>
    <br/><br/>
    <div class="cite-text">
        <p class="cite-p">
            To protect user privacy, the above tweets were anonymized.
        </p>
    </div>
    <Spacer />
  {/snippet}

  {#snippet scrolly()}    
    <ArticleText>
      A core aim of #SayHerName is to push back against the marginalization of Black women in mainstream news 
      and within the broader #BlackLivesMatter movement. This commitment is reflected in the 32.9% of tweets focused 
      on circulating information and raising awareness–<i>Informational/Awareness</i>–of the lived experience of a Black woman. 
      These posts shared formal news articles, blogs, personal essays, and on-the-ground reporting–such as live 
      updates on protests, vigils, or local community gatherings. By spreading information that mainstream outlets often 
      overlooked, users helped to build a shared public timeline of events that ensured the movement was accessible 
      to all. 
    </ArticleText>
  {/snippet}
</Scroller>

<!-- SUBSECTION: Remembrance-->
<Scroller layout="right">
  {#snippet sticky()}
    <Spacer />
    <div class="conclusion-visual">
      <h2 class="text-xl text-white mb-8 font-bold">Tweets remembrance</h2>
    </div>
    <div class="sticky-carousel-container">
      {#if mounted && CarouselCmp}
          <CarouselCmp
              bind:this={carousel}
              itemsToShow={1} 
              itemsToScroll={1}
          >
              <TweetCard
                text="Kayla Moore. Kayla Moore. Kayla Moore. Kayla Moore. Kayla Moore. Kayla Moore. Kayla Moore. #SayHerName"
                timestamp="May 20, 2015 • 6:55pm"
              />
              <TweetCard
                text="For the women that work so hard on the lines against police brutality & those lost, I wrote this for you. #sayhername"
                timestamp="June 8, 2015 • 9:30pm"
              />
              <TweetCard
                text="#NatashaMcKenna - I will #SayHerName because her life mattered."
                timestamp="September 11, 2015 • 3:36am"
              /> 
          </CarouselCmp>
      {/if}
    </div>
    <br/><br/>
    <div class="cite-text">
        <p class="cite-p">
            To protect user privacy, the above tweets were anonymized.
        </p>
    </div>
    <Spacer />
  {/snippet}

  {#snippet scrolly()}    
    <ArticleText>
      <i>Remembrance</i> accounts for 34.3% of all original tweets, in alliance with the AAPF’s agenda in 
      commemorating women who have died due to police brutality and anti-black violence. These tweets 
      honor those lives lost and urge others not to let their names fade from public consciousness. From simple 
      acts–like posting #SayHerName–to imagining what those lives could have been–users engaged in a collective 
      effort to preserve their lives in memory.
    </ArticleText>
  {/snippet}
</Scroller>

<!-- SUBSECTION: Resistance-->
<Scroller layout="right">
  {#snippet sticky()}
    <Spacer />
    <div class="conclusion-visual">
      <h2 class="text-xl text-white mb-8 font-bold">Tweets that resist the dominant narrative</h2>
    </div>
    <div class="sticky-carousel-container">
      {#if mounted && CarouselCmp}
          <CarouselCmp
              bind:this={carousel}
              itemsToShow={1} 
              itemsToScroll={1}
          >
              <TweetCard
                text="Amazing....Bill Cosby still trending....#SandyBrand...not so much....pay attention and do NOT be fooled...#sayhername...#justiceforsandy"
                timestamp="July 23, 2015 • 10:19pm"
              />
              <TweetCard
                text="'If I die in police custody, I didn't commit suicide' #SayHerName #WhatHappenedToSandraBland #Empire #WeWillNotForget"
                timestamp="October 14, 2015 • 7:26pm"
              />
              <TweetCard
                text="I'm still AWAKE #SayHerName justice for Sandra Bland #SandraBland"
                timestamp="October 14, 2015 • 9:17pm"
              /> 
          </CarouselCmp>
      {/if}
    </div>
    <br/><br/>
    <div class="cite-text">
        <p class="cite-p">
            To protect user privacy, the above tweets were anonymized.
        </p>
    </div>
    <Spacer />
  {/snippet}

  {#snippet scrolly()}    
    <ArticleText>
      Resistance makes up 11.3% of all tweets, reflecting users’ efforts to push back against dominant narratives 
      surrounding police violence and the erasure of Black women. These posts called out official storylines, 
      challenged the media's framing of stories, and exposed institutional failures, asserting that the stories being 
      told were incomplete or misleading. Through this resistance, users worked to direct attention towards the 
      lived realities and systemic injustices that mainstream narratives often ignored.
      <br/><br/>
      Because the entire #SayHerName movement is itself an act of resistance, it is unsurprising that explicit 
      resistance tweets form the smallest category. Measuring them still reveals how users directly challenged 
      dominant narratives in addition to the broader collective resistance.
    </ArticleText>
  {/snippet}
</Scroller>

<!-- SUBSECTION: Linkage -->
<Scroller layout="right">
  {#snippet sticky()}
    <Spacer />
    <div class="chart-container">
      <iframe 
          src="twit-charts/behavior_motivation_heatmap.html" 
          class="chart-iframe"
          title="Behavior × Motivation Heatmap (% of Tweets) <br/><sup>#SayHerName</sup>"
      ></iframe>
      <p class="cite-p">
        The chart only includes tweets from individuals actively engaged in the #SayHerName movement, rather than retweets or replies.        
      </p>
    </div>
    <Spacer />
  {/snippet}

  {#snippet scrolly()}
    <div class="conclusion-visual">
      <h2 class="text-xl text-black mb-8 font-bold ml-6">What happens when we look at both categories and how they intersect?</h2>
    </div>
    <ArticleText>
      The two largest intersections on the heatmap—<i>Remembrance</i> paired with <i>Unity and Support</i> at 32.5% 
      and <i>Informational/Awareness</i> with <i>Unity and Support</i> at 24.6% —is unsurprising given that all three 
      categories individually represent some of the strongest themes in the dataset. This overlap illustrates how 
      remembrance and awareness of a Black woman’s lived experience served as a unifying force, bringing people 
      together in collective grief and solidarity as they honored the lives of Black women lost to violence.
    </ArticleText>
    <ArticleText>
      <i>Call to Action</i> and <i>Resistance</i> was also often paired with Outrage, coming in at 11.5% and 5.2% 
      respectively. Given that both motivations push back against dominant narratives by surfacing police violence 
      and Black women’s experiences, their frequent pairing with outrage reflects users’ frustration with the 
      hegemonic systems that work to silence these stories. 
    </ArticleText>
  {/snippet}
</Scroller>

<Spacer />

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
    height: 100%;
    min-height: 100vh;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
  }

  .chart-iframe {
    width: 100%;
    height: 100%;
    min-height: 700px; /* adjust to chart size */
    border: none;
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
    text-align: center;
  }

  .stat-label {
    font-size: 0.9rem;
    color: #e8d9c3;
    text-transform: uppercase;
    letter-spacing: 0.05em;
    text-align: center;
  }

  .cite-text {
    width: 100%;
    min-height: 30vh;
    padding-left: 40px;
    padding-right: 30px;
    margin: 0 auto 2rem auto;
    color: #111;
  }

  .cite-p {
    width: 100%;
    font-style: italic;
    font-size: 0.9rem;
    color: #666;
  }


  .sticky-carousel-container {
      width: 80%;         /* keep it centered */
      max-width: 500px;   /* limit width */
      height: auto;
      margin: 0 auto;
      flex-direction: row;
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