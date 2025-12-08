<script>
  import Scroller from '$lib/components/Scroller.svelte';
  import ArticleText from '$lib/components/ArticleText.svelte';
  import Heading from '$lib/components/Heading.svelte';
  import FullWidthText from '$lib/components/FullWidthText.svelte';
</script>

<Scroller layout="right">
  {#snippet sticky()}
    <div class="conclusion-visual">
      <h2 class="text-4xl text-white mb-8 font-bold">The Bigger Picture</h2>
      <div class="stat-grid">
        <div class="stat-card">
          <div class="stat-number">10,726</div>
          <div class="stat-label">Total Articles</div>
        </div>
        <div class="stat-card">
          <div class="stat-number">421</div>
          <div class="stat-label">Unique News Outlets</div>
        </div>
        <div class="stat-card">
          <div class="stat-number">301</div>
          <div class="stat-label">Days of Coverage</div>
        </div>
      </div>
    </div>
  {/snippet}

  {#snippet scrolly()}
    <Heading 
      scene="Conclusion"
      title="The Bigger Picture" 
    />
    
    <ArticleText>
  The numbers tell part of the story: a couple thousand articles, a couple hundred news outlets, a largely-single sustained burst of attention.
    </ArticleText>

    <ArticleText>
      But numbers alone can't capture what was at stake - the lives of Sandra Bland, Rekia Boyd, Tanisha Anderson, 
      and so many others whose names we were finally beginning to say.
    </ArticleText>

    <FullWidthText>
      Media coverage matters because it shapes what we know, what we remember, and what we act on.
    </FullWidthText>

    <ArticleText>
          <br />     <br />     <br />     <br />
      In 2015, #SayHerName forced media outlets to reckon with a story many had previously ignored. Some rose to the challenge; others published once and moved on.
            <br />    <br />    <br />    <br />
    </ArticleText>

    <ArticleText>
      Local reporters stayed with the stories in their communities. National outlets drove the peaks of attention. 
      Digital publications filled the gaps in between.
    </ArticleText>

    <ArticleText>
      The patterns reveal who had power to shape the narrative, whose perspectives were centered, and which stories 
      received sustained attention versus fleeting interest.
    </ArticleText>

    <ArticleText>
      Mentions of the movement itself remained limited, reflecting that while the cases were covered, #SayHerName as a unifying frame was rarely invoked. The work of saying their names, of demanding justice, continues.
    </ArticleText>

    <ArticleText>
      Learn more about the movement through the <a href="https://aapf.org/" style="color: #0066cc; text-decoration: underline;">African American Policy Forum</a>, or see our work on how activists drove the conversation on Twitter <a href="https://katrinahuang888.github.io/SayHerName/twitter" style="color: #0066cc; text-decoration: underline;">here</a>. Keep in mind that duplicates exist, classifiers may imperfectly categorize articles, and some coverage may not be captured here. For full details, including which dataset was used (deduplicated vs. content-unique), citations, and methodology for how the graphs were created—please see <a href="https://katrinahuang888.github.io/SayHerName/data" style="color: #0066cc; text-decoration: underline;">our full methodology page</a>.
    </ArticleText>

  {/snippet}
</Scroller>

<style>
  .conclusion-visual {
    text-align: center;
    padding: 2rem;
    width: 100%;
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