<script>
  import Scroller from '$lib/components/Scroller.svelte';
  import ArticleText from '$lib/components/ArticleText.svelte';
  import Heading from '$lib/components/Heading.svelte';
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

<!-- SUBSECTION: Keywords Table -->
<Scroller layout="right">
  {#snippet sticky()}
    <div class="conclusion-visual">
      <h2 class="text-4xl text-white mb-8 font-bold">#SayHerName on Twitter</h2>
      <div class="stat-grid">
        <div class="stat-card">
          <div class="stat-number">table</div>
          <div class="stat-label">of behavior and motivation</div>
        </div>
      </div>
    </div>
  {/snippet}

  {#snippet scrolly()}    
    <ArticleText>
      Studying only original tweets, we manually coded a random sample of 3,000 tweets (of varying lengths and content). From there, we extracted three key motivational themes that illustrated why users chose to participate: calling for action, sharing information, amplifying stories, or remembering those lives lost.       <br/><br/>
      <br /><br />
      Complementing this, three key behavioral patterns were discovered that explore how users felt about the conversation: outrage against a broken system, unifying others under this movement, or expressing sorrow about the grievances against the Black female community.
    </ArticleText>

  {/snippet}
</Scroller>

<!-- SUBSECTION: Analysis of Behavior -->
<Scroller layout="right">
  {#snippet sticky()}
    <div class="conclusion-visual">
      <h2 class="text-4xl text-white mb-8 font-bold">#SayHerName on Twitter</h2>
      <div class="stat-grid">
        <div class="stat-card">
          <div class="stat-number">Behavior</div>
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
      tbd.
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
</style>