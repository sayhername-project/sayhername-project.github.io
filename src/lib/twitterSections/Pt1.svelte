<script>
  import Scroller from '$lib/components/Scroller.svelte';
  import ArticleText from '$lib/components/ArticleText.svelte';
  import Heading from '$lib/components/Heading.svelte';
</script>

<!-- SUBSECTION: #SayHerName at the beginning of 2015 -->
<Scroller layout="right">
  {#snippet sticky()}
    <div class="chart-container">
        <iframe 
            src="twit-charts/rise_of_sayhername_day.html" 
            class="chart-iframe"
            title="Tweet Frequency of #SayHerName (Jan 1 - April 3, 2015)"
        ></iframe>
    </div>
  {/snippet}

  {#snippet scrolly()}
    <Heading 
      scene="Scene 1"
      title="The Rise of the #SayHerName Movement" 
    />
    
    <ArticleText>
        “In 2015, the African American Policy Forum (AAPF), cofounded by [Kimberlé] Crenshaw and Columbia Law School, 
        hosted a weeklong webinar series dedicated to discussing the state of Black women and girls in the United 
        States. The event, titled ‘Her Dream Deferred,’ offered daily streaming of panel discussions accompanied by 
        real-time Twitter conversations. #HerDreamDeferred, evocative of Langston Hughes’s 1951 poem about the 
        Black nihilism of Harlem, did not resonate widely as a hashtag, but the first day’s webcast conversation, 
        on Monday, March 30, 2015, included a different one, <strong>#SayHerName</strong>, concise enough to gain popularity” (Jackson, Bailey, & Foucault Welles, 2020).
    </ArticleText>

    <div class="cite-text">
      <p class="cite-p">
        Jackson, S. J., Bailey, M., & Foucault Welles, B. (2020). #HashtagActivism: Networks of race and gender 
        justice. The MIT Press.
      </p>
    </div>

    <ArticleText>
        Before the AAPF launched #HerDreamDeferred week (March 30-April 3, 2015), Black women killed by police were 
        almost entirely missing from national conversations about state violence. The sudden spike on March 30 marks 
        the moment when #SayHerName evolved into a rallying cry–a way for users to collectively articulate the injustices 
        Black women face. This moment reflects a counter-narrative emerging in real time, as Twitter users engaged the 
        hashtag to challenge the erasure that had long shaped national discourse. 
    </ArticleText>

    <br /><br /><br /><br /><br />

  {/snippet}
</Scroller>

<!-- SUBSECTION: #SayHerName at a year's view -->
<Scroller layout="right">
  {#snippet sticky()}
    <div class="chart-container">
        <iframe 
            src="twit-charts/rise_of_sayhername_year.html" 
            class="chart-iframe"
            title="Tweet Frequency of #SayHerName in 2015"
        ></iframe>
    </div>
  {/snippet}

  {#snippet scrolly()}
    <ArticleText>
        #SayHerName continued to trend throughout 2015, reaching far beyond its initial context with a total of 564,925 
        tweets. #SayHerName spiked in May, July, and December as a result of nationwide protests, Sandra Bland’s 
        suspicious death in a county jail, and a failure to indict a police officer for a felony related to Bland’s 
        death, respectively.

        <br/> <br/> <br/> 
        The hashtag then transformed into an online space to mark subsequent incidents of violence, public vigils 
        or protests, and national conversations about Black women who experienced police violence. 

        <br/> <br/> <br/> <br/> 
    </ArticleText>


  {/snippet}
</Scroller>

<style>
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

    .cite-text {
      width: 100%;
      min-height: 30vh;
      padding-left: 20px;
      margin: 0 auto 2rem auto;
      color: #111;
    }

    .cite-p {
      width: 100%;
      font-style: italic;
      font-size: 0.9rem;
      color: #666;
    }
</style>