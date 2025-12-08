<script>
  import Scroller from '$lib/components/Scroller.svelte';
  import ArticleText from '$lib/components/ArticleText.svelte';
  import Heading from '$lib/components/Heading.svelte';
  import FullWidthText from '$lib/components/FullWidthText.svelte';
</script>

<Scroller layout="right">
    {#snippet sticky()}
        <div class="conclusion-visual">
            <h2 class="text-4xl text-white mb-8 font-bold">#SayHerName on Twitter</h2>
            <div class="stat-grid">
                <div class="stat-card">
                    <div class="stat-number">564K+</div>
                    <div class="stat-label">total tweets with #SayHerName in 2015</div>
                </div>
                <div class="stat-card">
                    <div class="stat-number">429K+</div>
                    <div class="stat-label">users involved</div>
                </div>
                <div class="stat-card">
                    <div class="stat-number">273K+</div>
                    <div class="stat-label">hashtags used</div>
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
            Across more than 564K tweets, the #SayHerName movement reveals how ordinary social media users transformed digital platforms into spaces of remembrance, advocacy, and resistance.
            <br/><br/>
            Through our examination of tweet frequency, hashtags, and emotions driving the movement, we can see how social media attention concentrated around specific cases–most notably the death of Sandra Bland–and how users collectively constructed a gender-conscious critique within the broader Black Lives Matter movement.
        </ArticleText>

        <br/><br/>

        <ArticleText>
            Yet, the data also shows that this commitment existed alongside the realities of attention cycles, pushed by news media cycles, where engagement with #SayHerName rose sharply during moments of intense media coverage and fell during periods when news narratives shifted elsewhere. 
        </ArticleText>

        <ArticleText>
            Our analysis of hashtag frequencies and co-occurrence patterns further illustrate this dynamic. While Sandra Bland’s death received national coverage, many other victims received far less mainstream attention. 
            
            <br/><br/>
            Rather, individuals on Twitter worked to resist the ebb and flow of media narratives by linking these lesser-known names to more widely discussed cases and concepts, using the platform to fill gaps left by traditional reporting.
            In doing so, users shaped #SayHerName into a space for both memorialization and corrective intervention. 
        </ArticleText>

        <FullWidthText>
            By sharing the lived experiences of Black women, #SayHerName challenged the status quo.
        </FullWidthText>

        <br/><br/><br/>
        <ArticleText>
            Overall, our findings demonstrate that #SayHerName was far more than a reactive phenomenon tied to the news cycle. Rather, it was a community-driven act of remembrance and resistance. By mapping when, why, and how people engaged with the movement, we gain a deeper understanding of how digital activism can work to challenge a hegemonic power structure that marginalizes groups.
        </ArticleText>

        <br/>
        <ArticleText>
            We encourage you to learn more about the movement led by the 
            <a href="https://www.aapf.org/sayhername" style="color: #0066cc; text-decoration: underline;">African American Policy Forum</a> or see our work on how 
            the traditional media channels reacted to #SayHerName. For full details on how the above data was 
            derived, please see our <a href = "https://katrinahuang888.github.io/SayHerName/data" style="color: #0066cc; text-decoration: underline;">full methodology page</a>.
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