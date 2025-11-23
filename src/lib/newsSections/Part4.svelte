<script>
  import Scroller from '$lib/components/Scroller.svelte';
  import ArticleText from '$lib/components/ArticleText.svelte';
  import Heading from '$lib/components/Heading.svelte';
  import FullWidthText from '$lib/components/FullWidthText.svelte';
</script>

<Scroller>
  {#snippet sticky()}
    <div class="chart-container">
      <iframe 
        src="/news-charts/keyword_categories_styled.html" 
        class="chart-iframe"
        title="Keyword Categories Distribution"
      ></iframe>
    </div>
  {/snippet}

  {#snippet scrolly()}
    <Heading 
      scene="Part 4"
      title="How Was the Story Told?" 
    />

    <ArticleText>
      Words matter. The difference between "officer-involved shooting" and "police killing," between "incident" 
      and "violence," shapes how we understand what happened.
    </ArticleText>

    <ArticleText>
      Coverage disproportionately highlighted violence with eye-catching words such as "police", "death", "shooting", and "brutality".
      These emotionally charged terms dominate the headlines, drawing attention to the most dramatic aspects of each case,
      such as with <em><a href="https://www.huffpost.com/entry/6-things-white-feminists-can-do-in-response-to-sandra-bland-and-police-brutality-against-women-of-color_b_7880910" style="color: #0066cc; text-decoration: underline;">"6 Things White Feminists Can Do in Response to Sandra Bland and Police Brutality Against Women of Color"</a></em>. Keywords around immediate harm, death, and protest
      dominate, while words signaling reform, accountability, or societal context appear far less frequently.
      This imbalance shows that media tended to frame events emotionally, emphasizing drama and immediate consequences
      rather than structural issues.
    </ArticleText>
  {/snippet}
</Scroller>

<Scroller>
  {#snippet sticky()}
    <div class="chart-container">
      <iframe 
        src="/news-charts/emotion_framing_styled.html" 
        class="chart-iframe"
        title="Emotional Framing in Headlines"
      ></iframe>
    </div>
  {/snippet}

  {#snippet scrolly()}
    <ArticleText>
      Emotional versus action-oriented framing further illustrates these patterns. Headlines using words like “tragedy”
      or “death” convey emotion, while those demanding “justice” or “accountability” direct readers toward response or
      action. In the #SayHerName dataset, emotional framing appears most frequently, highlighting human impact, while action
      framing is less common, signaling fewer calls for systemic change. Together, these patterns show not just what events
      were covered, but how they were interpreted, shaping public understanding of victims, communities, activists, and institutions.
    </ArticleText>
  {/snippet}
</Scroller>

<Scroller>
  {#snippet sticky()}
    <div class="chart-container">
      <iframe 
        src="/news-charts/keywords_titles_styled.html" 
        class="chart-iframe"
        title="Keyword Frequency in Headlines"
      ></iframe>
    </div>
  {/snippet}

  {#snippet scrolly()}
    <ArticleText>
      The keyword data underscores these observations. “Sandra Bland” appears in <strong>23.1%</strong> of articles, followed by terms
      like “police” (14.2%) and “death” (11.6%). 
    </ArticleText>

    <ArticleText>
      Interestingly, despite the centrality of the #SayHerName movement to these stories, the phrase itself
      barely appeared in coverage, showing up in only <strong>0.4%</strong> of articles. This suggests that while media reported
      on the cases and highlighted violence, outrage, and tragedy, they rarely connected the reporting to the
      broader movement explicitly. In other words, the framing focused on individual incidents and dramatic events
      rather than naming and amplifying the movement itself.
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