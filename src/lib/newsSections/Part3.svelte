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
        src="news-charts/source_type_distribution_pie_styled.html" 
        class="chart-iframe"
        title="Source Distribution"
      ></iframe>
    </div>
  {/snippet}

  {#snippet scrolly()}
    <Heading 
      scene="Part 3"
      title="Which Voices Reached the Public?" 
    />
    
    <ArticleText>
    Police violence unfolds at the scale of neighborhoods, cities, and counties — and the first journalists
    to respond are almost always local reporters. They hear the sirens, show up before official statements,
    and speak directly with families in the raw aftermath. In most cases, it is local newsrooms
    that build the first public record. <strong>But in the #SayHerName dataset, that early presence
    did not translate into volume.</strong>
    </ArticleText>

    <ArticleText>
      National outlets — many of them <strong>digital-native</strong> rather than legacy institutions — produced roughly
      half of all articles <strong>(50.16%)</strong>, far outpacing local newsrooms, which accounted for about a quarter <strong>(24.99%)</strong>.
      A substantial portion of coverage also came from entertainment-adjacent or mixed-format sites classified as
      <strong>“Other” (20.00%)</strong>, while international and broadcast sources contributed only small fractions.
    </ArticleText>

    <div class="cite-text">
      <p class="cite-p">
        Preliminary categorization of sources from Clemm von Hohenberg, B., Menchen-Trevino, E., Casas, A., Wojcieszak, M. (2021). <i
							>A list of over 5000 US news domains and their social media accounts.</i
						>
						<a
							href="https://doi.org/10.5281/zenodo.7651047"
							class="text-purple-300"
							style="text-decoration: underline;">https://doi.org/10.5281/zenodo.7651047.</a
						>
      </p>
    </div>
  {/snippet}
</Scroller>

<Scroller>
  {#snippet sticky()}
    <div class="chart-container">
      <iframe 
        src="news-charts/timeline_by_source_type_styled.html" 
        class="chart-iframe"
        title="Source Distribution Over Time"
      ></iframe>
    </div>
  {/snippet}

  {#snippet scrolly()}
    <ArticleText>
      <h1 style="font-size: 1.5rem; font-weight: bold;">When Different Media Entered - and Exited</h1><br />
      Media attention to #SayHerName varied across outlet types. Local journalists often provided the first coverage,
      closely connected to the communities affected. For most cases, national and local coverage numbers were roughly
      comparable, with each type of outlet contributing to the story in different ways.
    </ArticleText>

    <ArticleText> <br /> <br />
      The Sandra Bland case stands out as an exception. National media quickly amplified the story,
      producing roughly twice as many articles as local outlets at the peak of attention.
    </ArticleText>

    <ArticleText>
      Digital-first and mixed-format sites also played an important role, filling gaps and maintaining visibility
      when local or national outlets were less active. International and broadcast coverage remained sporadic,
      appearing primarily for the most widely noticed or globally relevant moments.
    </ArticleText>

    <ArticleText>
      Overall, these patterns show how different media types entered and exited stories at different times,
      shaping which narratives became widely known. Understanding these dynamics helps explain why some cases
      gained national attention while others remained largely under the radar.
    </ArticleText>

    <ArticleText>
      These patterns become clearest when we zoom into individual cases, where we can see which outlets
      showed up first, which amplified coverage nationally, and which disappeared quickly. <em>Button interactive here?</em>
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