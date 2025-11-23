<script>
  import Scroller from '$lib/components/Scroller.svelte';
  import ArticleText from '$lib/components/ArticleText.svelte';
  import Heading from '$lib/components/Heading.svelte';
</script>

<Scroller layout="right">
  {#snippet sticky()}
    <div class="chart-container">
      <iframe 
        src="news-charts/articles_per_day_styled.html" 
        class="chart-iframe"
        title="Timeline of Coverage - Articles Per Day"
      ></iframe>
    </div>
  {/snippet}

  {#snippet scrolly()}
    <Heading 
      scene="Part 1"
      title="When Did They Start Paying Attention?" 
    />
    
    <ArticleText>
        Media attention doesn’t appear by accident. It’s shaped by search terms, editorial choices, and whose stories
        newsrooms consider newsworthy.
    </ArticleText>

    <ArticleText>
        While our initial queries related to #SayHerName and Black Lives Matter surfaced almost <strong>50,000</strong> articles from MediaCloud,
        only about <strong>10,000</strong> appeared when searching for #SayHerName and the names of Black women and girls killed in 2015.
        That gap is itself part of the story — an absence that reflects how rarely their cases were centered.
    </ArticleText>

    <ArticleText>
        The rhythm of news attention reveals patterns of visibility and neglect. In the #SayHerName dataset,
        the clearest spike occurs in mid-July 2015, when Sandra Bland’s death forced the nation to reckon with yet another tragedy.
        Outside that moment, coverage remains comparatively sparse. These rises and lulls show not just when
        people paid attention, but also how seldom they did.

    </ArticleText>

    <ArticleText>
        A few dates stand out - days when the loss of a Black woman finally broke through the larger conversation on
        policing and racial justice. Sandra Bland’s death, in particular, generated a sharp surge in reporting that
        dwarfs the coverage of other women in the movement.
    </ArticleText>

    <ArticleText>
        But the long stretches of quiet are just as revealing. Despite ongoing advocacy, renewed cases, and
        persistent systemic issues, media attention often receded to near silence.
        The movement continued; the cameras did not.
    </ArticleText>

  {/snippet}
</Scroller>

<style>
  .chart-container {
    width: 100%;
    height: 75vh;
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
</style>