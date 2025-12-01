<script>
  import Scroller from '$lib/components/Scroller.svelte';
  import ArticleText from '$lib/components/ArticleText.svelte';
  import Heading from '$lib/components/Heading.svelte';
  import Spacer from '$lib/components/Spacer.svelte';
</script>

<!-- INTRODUCTION -->
<Scroller layout="right">
  {#snippet sticky()}
    <Spacer />
    <div class="conclusion-visual">
      <h2 class="text-4xl text-white mb-8 font-bold">#SayHerName on Twitter</h2>
      <div class="stat-grid">
        <div class="stat-card">
          <div class="stat-number">564K+</div>
          <div class="stat-label">total tweets with #SayHerName in 2015</div>
        </div>
        <div class="stat-card">
          <div class="stat-number">99K+</div>
          <div class="stat-label">original tweets</div>
        </div>
        <div class="stat-card">
          <div class="stat-number">429K+</div>
          <div class="stat-label">users involved</div>
        </div>
      </div>
    </div>
    <Spacer />
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

        <br /> <br/>

        Emerging from those powerful conversations, #SayHerName became a flashpoint for confronting the long-standing erasure of Black women affected by police violence. The hashtag rapidly transformed a panel discussion into a nationwide fight for collective action.

    </ArticleText>

    <div class="cite-text">
      <p class="cite-p">
        Jackson, S. J., Bailey, M., & Foucault Welles, B. (2020). #HashtagActivism: Networks of race and gender 
        justice. The MIT Press.
      </p>
    </div>
  {/snippet}
</Scroller>

<Spacer />

<!-- SUBSECTION: #SayHerName at the beginning of 2015 -->
<Scroller layout="right">
  {#snippet sticky()}
    <Spacer />
    <div class="chart-container">
        <iframe 
            src="twit-charts/rise_of_sayhername_day.html" 
            class="chart-iframe"
            title="Tweet Frequency of #SayHerName (Jan 1 - April 3, 2015)"
        ></iframe>
    </div>
    <Spacer />
  {/snippet}

  {#snippet scrolly()}
    <ArticleText>
        Before the AAPF launched #HerDreamDeferred week (March 30-April 3, 2015), Black women killed by police were 
        almost entirely missing from national conversations about state violence. <br/><br/> The sudden spike on March 30 marks 
        the moment when #SayHerName evolved into a rallying cry–a way for users to collectively articulate the injustices 
        Black women face. This moment reflects a counter-narrative emerging in real time, as Twitter users engaged the 
        hashtag to challenge the erasure that had long shaped national discourse. 
    </ArticleText>
    <br />

    <ArticleText>
        #SayHerName continued to trend throughout 2015, reaching far beyond its initial context with a total of 564,925 
        tweets. #SayHerName spiked in May, July, and December as a result of nationwide protests, Sandra Bland’s 
        suspicious death in a county jail, and a failure to indict a police officer for a felony related to Bland’s 
        death, respectively.

        <br/> <br/> <br/> 
        The hashtag then transformed into an online space to mark subsequent incidents of violence, public vigils 
        or protests, and national conversations about Black women who experienced police violence. 

        <br/> <br/>
    </ArticleText>
  {/snippet}
</Scroller>

<style>
    .chart-container {
      width: 100%;
      height: 100%;
      min-height: 100vh;
      display: flex;
      align-items: center;
      justify-content: center;
    }

    .chart-iframe {
      width: 100%;
      height: 100%;
      min-height: 575px;
      border: none;
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
</style>