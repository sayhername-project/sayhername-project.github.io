<script>
    import Scroller from '$lib/components/Scroller.svelte';
    import ArticleText from '$lib/components/ArticleText.svelte';
    import Heading from '$lib/components/Heading.svelte';
    import Spacer from '$lib/components/Spacer.svelte';
    import TweetCard from '$lib/components/TweetCard.svelte';

    // Carousel components
    import { onMount, tick } from 'svelte';
    import { browser } from '$app/environment';

    // dynamic import ensures no SSR errors
    let CarouselCmp = null;
    let mounted = false;
    let carousel = null;

    onMount(async () => {
        if (!browser) return;
        await tick(); // ensures DOM is stable
        const mod = await import('svelte-carousel');
        CarouselCmp = mod.default;
        mounted = true;
    });

    function handleNextClick() {
        carousel?.next?.();
    }
</script>

<Spacer />
<!-- SUBSECTION: Evolution & Carousel -->
<Scroller layout="right">
    {#snippet sticky()}
        <div class="conclusion-visual">
            <h2 class="text-3xl text-white mb-8 font-bold">Tweets for #SayHerName</h2>
        </div>
        <div class="sticky-carousel-container">
            {#if mounted && CarouselCmp}
                <CarouselCmp
                    bind:this={carousel}
                    itemsToShow={1} 
                    itemsToScroll={1}
                >
                    <TweetCard
                        text="Hoodies for Trayvon, I can’t breathe for Eric, Hands up for Michael but what about #blackwomen? #HerDreamDeferred #sayhername #toughpolicing"
                        timestamp="March 30, 2015 • 7:47pm"
                    />
                    <TweetCard
                        text="'What we do not contest we allow to exist,' says Kimberle Crenshaw on gender, policing and blk women. #sayhername"
                        timestamp="March 30, 2015 • 7:56pm"
                    />
                    <TweetCard
                        text="This Unarmed Black Woman Was Shot by the Police, So Why Aren't We Marching for Her? - #sayhername"
                        timestamp="April 22, 2015 • 1:12am"
                    />
                    <TweetCard
                        text="Join us MAY 20, 5:30, UNION SQUARE SOUTH for a vigil to remember Black women lost to police violence #SayHerName"
                        timestamp="May 13, 2015 • 4:32pm"
                    />
                    <TweetCard
                        text="Black women killed, raped, beaten by police are rarely foregrounded in our popular understanding of racialized state violence. #SayHerName"
                        timestamp="May 20, 2015 • 6:01pm"
                    />
                    <TweetCard 
                        text="Speaking on why we r here today. Download the #SayHerName report by @AAPolicyForum, educate each other"
                        timestamp="May 20, 2015 • 9:52pm"
                    />
                    <TweetCard
                        text="'The most disrespected.., the most unprotected person,...the most neglected person in America, is the Black woman' ~ #MalcolmX #SayHerName"
                        timestamp="May 21, 2015 • 12:43am"
                    />
                    <TweetCard
                        text="Black women's bodies are disrespected and violated by the state; too often seen as 'conduits of criminality' #HerDreamDeferred #sayhername"
                        timestamp="May 30, 2015 • 7:39pm"
                    />
                    <TweetCard
                        text="If I am ever #arrested and taken to #jail please know that #ididnotcommitsuicide #SandraBland #SayHerName #JusticeForSandy #Justice"
                        timestamp="July 24, 2015 • 11:49pm"
                    />
                </CarouselCmp>
            {/if}
        </div>
        <br /><br />
        <div class="cite-text">
            <p class="cite-p">
                To protect user confidentiality, the above tweets were anonymized.
            </p>
        </div>
    {/snippet}

    {#snippet scrolly()}
        <Heading 
        scene="Scene 2"
        title="The Evolution of #SayHerName throughout 2015" 
        />
        
        <ArticleText>
            Throughout 2015, #SayHerName, alongside related hashtags such as #YouOkSis and #FastTailedGirls, became a central space for memorialization and a driving force in the fight for justice for Black women and girls who were victims of policy brutality. Thousands of people tweeted daily, using the hashtag to share stories, express solidarity, and amplify calls for accountability. 
            <br/><br/>
            As the AAPF described, the “#SayHerName campaign was born to cut through this disturbing reality and resist the invisibility of Black women, girls, and femmes by telling their story of police violence.” 
            <br/><br/>
            Across the United States, the movement inspired protests, vigils, and community gatherings that mourned lives lost and demanded systemic change, capturing national and international audiences who stood in solidarity with its message. 
        </ArticleText>

        <div class="cite-text">
            <p class="cite-p">
                African American Policy Forum. (n.d.). #SayHerName. <a href="https://www.aapf.org/sayhername" class="text-purple-300" style="text-decoration: underline;">https://www.aapf.org/sayhername</a>
            </p>
        </div>
    {/snippet}
</Scroller>


<!-- SUBSECTION: Top 25 Hashtags-->
<Scroller layout="right">
    {#snippet sticky()}
        <div class="sticky-inner">
            <Spacer />
            <div class="chart-container">
                <iframe 
                    src="twit-charts/top_25_hashtags.html" 
                    class="chart-iframe"
                    title="Top 25 Most Used Hashtags in #SayHerName Tweets"
                ></iframe>
            </div>
            <div class="cite-text">
                <p class="cite-p">
                    #SayHerName was excluded from this chart because it served as the primary keyword for collecting our dataset.
                </p>
            </div>
        </div>
    {/snippet}

    {#snippet scrolly()}   
        <ArticleText>
            During this period, <strong>hashtag activism</strong> emerged as a powerful form of repeated resistance–an evolving digital strategy through which users spread information, raised awareness, and connected local struggles to a broader fight for racial and gender justice.
            <br/><br/>
            The hashtag landscape within #SayHerName tweets are dominated by the names of Black women whose stories attracted nationwide attention in 2015. 
            <br/><br/>
        </ArticleText>

        <ArticleText>
            #SandraBland accounts for nearly 40% of all hashtags in this conversation, as her death was a flashpoint in bringing widespread attention to the systemic invisibility of Black women in discussions of police violence. 
            <br/><br/>
            Many top hashtags also reference women whose death received far less media coverage–including Rekia Boyd, Natasha McKenna, Aiyana Jones, Kindra Chapman, and more. Their presence reveals how users utilized #SayHerName to surface the names of women whose stories had been sidelined.
        </ArticleText>

        <br/><br/>

        <ArticleText>
            Following #SayHerName is #BlackLivesMatter at nearly <em>30%</em>. #SayHerName challenges the erasure of Black women in media and within BLM itself to help correct its gendered blind spots.
            <br/> <br/>
            Several hashtags also reflect the desire for justice and accountability regarding these women’s deaths, where #SayHerName became a space for individuals to mobilize together. 
        </ArticleText>

        <br /><br />
    {/snippet}
</Scroller>

<Spacer />

<!-- SUBSECTION: Top 25 co-occcurring -->
<Scroller layout="right">
    {#snippet sticky()}   
        <div class="sticky-inner">
            <Spacer />
            <div class="chart-container">
                <iframe 
                    src="twit-charts/top_50_cooccurring_network.html" 
                    class="chart-iframe"
                    title="Top 25 Co-Occurring Hashtag Pairs in #SayHerName Tweets"
                ></iframe>
            </div>
            <div class="cite-text">
                <p class="cite-p">
                    #SayHerName was excluded from this chart because it served as the primary keyword for collecting our dataset.
                </p>
            </div>
        </div>
    {/snippet}

    {#snippet scrolly()}   
        <ArticleText>
            Going one step further, we analyzed co-occurring hashtags to understand how users connected individual stories to broader narratives.
            <br/><br/>
            Co-occurrence refers to when, in this case, two hashtags frequently appear together in the same tweet. When these two hashtags repeatedly show up simultaneously, we can begin to understand how they share a meaningful relationship and how individuals collectively define the movement’s meaning.
            <br/><br/>
            These hashtag pairings illustrate users’ efforts to counter interlocking systems of oppression: calling out powerful institutions like the Department of Justice, pushing back against misleading media narratives, filling gaps in news coverage, and ensuring that lost stories were remembered.        
        </ArticleText>
        <br /><br /><br />
    {/snippet}
</Scroller>

<!-- SUBSECTION: Other interesting hashtags that didn't pop up in top 25 but still had lots of usage
<Scroller layout="right">
    {#snippet sticky()}
        <div class="chart-container">
            <iframe 
                src="twit-charts/top_25_hashtags_coocurr.html" 
                class="chart-iframe"
                title="Top 25 Co-Occurring Hashtag Pairs in #SayHerName Tweets"
            ></iframe>
        </div>
    {/snippet}

    {#snippet scrolly()}   

        <ArticleText>
            #ifidieinpolicecustody
            #dontendupahashtag
            #ididnotcommitsuicide
            #combahee
            #hillaryclinton
            #berniesanders
            effect on 2016 presidential election
        </ArticleText>

        <br /><br /><br /><br /><br />

    {/snippet}
</Scroller> -->

<style>
    .sticky-inner {
        height: 100%;
        display: flex;
        flex-direction: column;
        justify-content: flex-start; /* instead of center */
        align-items: center;
        padding-top: 3vh;   /* slight top padding */
        padding-bottom: 3vh;
    }

    .chart-container {
        width: 100%;
        height: auto;
        display: flex;
        align-items: center;
    }

    .chart-iframe {
        width: 100%;
        height: 70vh;
        min-height: 500px;
        border: none;
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
        width: 80%;         
        max-width: 500px;   
        height: auto;
        margin: 0 auto;
    }

    :global(.carousel-arrow) {
        background: #ffffff22 !important;
        border-radius: 50%;
    }

    :global(.carousel-arrow:hover) {
        background: #ffffff44 !important;
    }
</style>