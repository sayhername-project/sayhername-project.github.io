<script>
  import Scroller from '$lib/components/Scroller.svelte';
  import ArticleText from '$lib/components/ArticleText.svelte';
  import Heading from '$lib/components/Heading.svelte';
  import FullWidthText from '$lib/components/FullWidthText.svelte';
</script>

<!-- Sub-section: Introduction -->
<Scroller layout="right">
  {#snippet sticky()}
    <!-- Empty -->
  {/snippet}

  {#snippet scrolly()}
    <Heading 
      scene="Part 2"
      title="Who Controlled the Narrative?" 
    />
    
    <ArticleText>
    In American media, a small number of outlets often determine which stories break through.
    When a major national paper covers an issue, other outlets tend to follow.
    But when coverage is driven by smaller digital sites or local reporting, the national press may barely respond.
    </ArticleText>

    <ArticleText>
      For #SayHerName, the question becomes even sharper: Who actually told these stories,
      and what kind of outlets shaped public understanding?
    </ArticleText>
  {/snippet}
</Scroller>

<!-- Sub-section: Top Outlets -->
<Scroller layout="right">
  {#snippet sticky()}
    <div class="chart-container">
      <iframe 
        src="news-charts/top_outlets_styled.html" 
        class="chart-iframe"
        title="Top 20 Media Sources"
      ></iframe>
    </div>
  {/snippet}

  {#snippet scrolly()}
    <ArticleText>
      <h1 style="font-size: 1.5rem; font-weight: bold;">The Power Players</h1><br />
      Across <strong>419</strong> news outlets, coverage of #SayHerName was concentrated in just a few hands.
      The top 10 outlets published 2,118 stories — <strong>28.3%</strong> of all articles in the dataset.
      Expanding to the top 20 brings the total to 3,149 articles, or <strong>42.1%</strong> of all coverage.
    </ArticleText>
  {/snippet}
</Scroller>

<!-- Sub-section: Media Concentration -->
<Scroller layout="right">
  {#snippet sticky()}
    <div class="chart-container">
      <iframe 
        src="news-charts/stacked_weekly_articles_by_media_styled.html" 
        class="chart-iframe"
        title="Media Concentration Over Time"
      ></iframe>
    </div>
  {/snippet}

  {#snippet scrolly()}
    <ArticleText>
      The remaining 399 outlets accounted for <strong>57.9%</strong> of articles, but each with far smaller individual output,
      making their voices easier to overlook in the national conversation.
    </ArticleText>

    <ArticleText>
      Notice who the top contributors actually are: not traditional national newspapers,
      but digital-native sites, entertainment/celebrity news hybrids, and regional broadcasters.
      BuzzFeed, Huffington Post, EURweb, local affiliates, and regional news sites dominate the list.
      These outlets often publish rapidly and in high volume, but they do not carry the same agenda-setting weight
      as publications like the New York Times, the Wall Street Journal, or major televised networks.
      This contrast reveals a divergence between proximity and power: local journalists showed up first,
      but high-volume digital and national media shaped the largest share of the public conversation.
    </ArticleText>
  {/snippet}
  </Scroller>


<style>
  .chart-container {
    width: 110%;
    height: 75vh;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .chart-iframe {
    width: 110%;
    height: 100%;
    border: none;
    background: transparent;
    border-radius: 8px;
  }
</style>