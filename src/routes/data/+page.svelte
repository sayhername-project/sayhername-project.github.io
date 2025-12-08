<script lang="ts">
	// TOP OF PAGE COMPONENTS
    import HeaderBar from "$lib/components/HeaderBar.svelte";
    import Hero from "$lib/dataSections/Hero.svelte";
    import Toc from 'svelte-toc'
    import Spacer from "$lib/components/Spacer.svelte";


    import { onMount } from 'svelte';

    let showToc = false;      // toggles visibility
    let tocTrigger;           // DOM element to observe
    
    onMount(() => {
        const observer = new IntersectionObserver(
        (entries) => {
            showToc = !entries[0].isIntersecting;
        },
        {
            threshold: 0.2
        }
        );
        if (tocTrigger) observer.observe(tocTrigger);

        return () => observer.disconnect();
    });
</script>


{#if showToc}
  <aside class="toc-container text-white">
    <Toc
        --toc-desktop-sticky-top="4rem"
        --toc-width="16rem"
        --toc-active-bg="#dab3ff"
        --toc-active-color="#000000"
    />
  </aside>
{/if}

<main class="">
    <HeaderBar />
    <main class="bg-linear-to-b from-gray-900 to-black text-white" bind:this={tocTrigger}>
        <Hero />
    </main>

    <section class="py-30 px-6 bg-linear-to-b from-black to-blue-950">
        <div class="max-w-4xl mx-auto">
            <h2 class="text-4xl md:text-5xl mb-8 text-center text-white">General Acknowledgements</h2>
            <div class="space-y-6 text-lg md:text-xl text-gray-300 leading-relaxed">
                <p> 
                    We give thanks to the following people and groups for their contributions to this project:
                </p>
                <ol class="list-decimal ml-8">
                    <li>
                        <a href="https://latoyasawyer.com/" class="text-purple-300" style="text-decoration: underline;"><strong>Professor LaToya Sawyer</strong></a> from St. Jones University 
                        who collected all 564,925 tweets in 2015 with #SayHerName. 
                    </li>
                    <li>
                        The following students in the Wellesley College Credibility Lab–Crystal McArdle-Ventura, 
                        Gwen Zoe Yang, Skylar Shi, Melissa Mullings, Elizabeth Ying Lystad–who worked during the 
                        Spring 2024 semester to clean and format this data.
                    </li>
                    <li>
                        <a href="https://www.wellesley.edu/people/eni-mustafaraj" class="text-purple-300" style="text-decoration: underline;"><strong>Professor Eni Mustafaraj</strong></a> from Wellesley College for advising and guiding this project.
                    </li>
                </ol>
            </div>
        </div>
    </section>

    <section class="py-30 px-6 bg-linear-to-b from-blue-950 to-purple-950">
        <div class="max-w-4xl mx-auto">
            <h2 class="text-4xl md:text-5xl mb-8 text-center text-white">Behind the Twitter Data</h2>
            <div class="space-y-6 text-lg md:text-xl text-gray-300 leading-relaxed">
                <p>
                    Prior to conducting any analysis on the data, we cleaned the tweets by removing emojis, 
                    non-ASCII unicode, and links. We also anonymized all data by assigning tweets a random 
                    system-generated username, as well as removed all mentions of other Twitter users from 
                    the text of the tweet. 
                </p>
                <br />
                <p class="italic font-extrabold">
                    Are all 564,925 tweets relevant to the #SayHerName movement?
                </p>
                <p class="ml-10">
                    Short answer: Yes, for the most part.
                    <br /><br />
                    After conducting stratified sampling based on tweet length, we randomly selected 
                    2,000 tweets, an equal proportion from each bucket, and manually categorized them 
                    where 0 signified “No relevance to the #SayHerName movement” and 1 signified “Relevant to 
                    the #SayHerName movement.” 0.006% of those tweets (11/2,000) were not relevant to the 
                    #SayHerName movement. Due to the negligible number of non-relevant tweets, we decided 
                    to leave all as-is tweets in the dataset.
                </p>
                <br />
                <p class="italic font-extrabold">
                    How did we analyze the data?
                </p>
                <p class="ml-10">
                    For a portion of the analyzed data, we filtered the tweets down to original tweets 
                    only using Twitter’s isRetweet column in each tweet’s metadata. In the unlikely event 
                    where isRetweet did not exist, we scanned the tweet’s content for “RT,” signifying it 
                    was a retweet” and excluded those. 
                </p>
                <br />
                <p class="italic ml-10 font-semibold"> 
                    How did we discover the data presented in <a href="https://katrinahuang888.github.io/SayHerName/twitter" class="text-purple-300" style="text-decoration: underline;">“Scene 3: Behind the Users?”</a>
                </p>
                <p class="ml-20">
                    We trained and utilized BERTweet, an open-source HuggyFace transformer that was trained on 
                    850 million English tweets.
                    <br /><br />
                    Using the same randomly selected 2,000 tweets as before, we manually categorized the tweets 
                    according to both of the following categories:
                </p>
                <ol class="list-decimal ml-30">
                    <li>
                        Did users exhibit behaviors–how the tweeter expresses their emotions–like outrage, unity and support, sad and mournful?
                    </li>
                    <li>
                        What were the users’ motivations–call to action, informational, remembrance–behind posting the tweet? 
                    </li>
                </ol>
                <p class="ml-20">
                    The above categories were determined based on the lens of perceived meaning: how the tweeter’s 
                    words, tone, and actions may have been received and understood by others within the online 
                    public sphere. We do not claim to know each user’s true intentions behind their tweets. 
                </p>
            </div>
        </div>
    </section>

    <section class="py-30 px-6 bg-linear-to-b from-purple-950 to-pink-950">
        <div class="max-w-4xl mx-auto">
            <h2 class="text-4xl md:text-5xl mb-8 text-center text-white">Behind the News Data</h2>
            <div class="space-y-6 text-lg md:text-xl text-gray-300 leading-relaxed">
                <p>
                Launched in 2015 by the
                <strong class="text-white">African American Policy Forum (AAPF)</strong> and the
                <strong class="text-white">Center for Intersectionality and Social Policy Studies</strong>,
                #SayHerName is a social movement and campaign that brings awareness to Black women victims of police brutality and anti-Black violence.
                </p>
                <p>
                The movement emerged from a critical observation: while cases of police violence against Black men received significant media attention, Black women's experiences of state violence remained largely invisible.
                #SayHerName challenges this erasure by insisting that we name and remember Black women who have been killed by police.
                </p>
                <p class="text-purple-300 italic">
                "Fill the void. Lift your voice. Say her name." — Kimberlé Crenshaw and the African American Policy Forum
                </p>
            </div>
        </div>
    </section>

    <section class="py-30 px-6 bg-linear-to-b from-pink-950 to-red-950">
        <div class="max-w-4xl mx-auto">
            <h2 class="text-4xl md:text-5xl mb-8 text-center text-white">Citations</h2>
            <div class="space-y-6 text-lg md:text-xl text-gray-300 leading-relaxed">
                <ul class="list-disc">
                    <li>
                        African American Policy Forum. (n.d.). <i>#SayHerName.</i> <a href="https://www.aapf.org/sayhername" class="text-purple-300" style="text-decoration: underline;">https://www.aapf.org/sayhername.</a>
                    </li>
                    <li>
                        Jackson, S. J., Bailey, M., & Foucault Welles, B. (2020). <i>#HashtagActivism: Networks of race and gender justice.</i> The MIT Press.
                    </li>
                    <li>
                        Kaufman, M.R., Wright, K., Shin, R. <i>et al.</i> The power of social media activism in the #YesAllWomen Movement. <i>Humanit Soc Sci Commun</i> 12, 1469 (2025). <a href="https://doi.org/10.1057/s41599-025-05647-5" class="text-purple-300" style="text-decoration: underline;">https://doi.org/10.1057/s41599-025-05647-5.</a>
                    </li>
                    <li>
                        Korr, Vadim. (2023). svelte-carousel [Computer software]. GitHub. <a href="https://github.com/vadimkorr/svelte-carousel" class="text-purple-300" style="text-decoration: underline;">https://github.com/vadimkorr/svelte-carousel.</a> (Accessed December 7, 2025).
                    </li>
                    <li>
                        Nguyen, T., Vu, X.-S., & Nguyen, M.-T. (2020). <i>BERTweet: A pre-trained language model for English Tweets</i> [Computer software]. Hugging Face. <a href="https://huggingface.co/vinai/bertweet-base" class="text-purple-300" style="text-decoration: underline;">https://huggingface.co/vinai/bertweet-base.</a>
                    </li>
                    <li>
                        Riebesell, Janosh. (2025). svelte-toc [Computer software]. GitHub. <a href="https://github.com/janosh/svelte-toc" class="text-purple-300" style="text-decoration: underline;">https://github.com/janosh/svelte-toc.</a> (Accessed December 7, 2025).
                    </li>
                </ul>
            </div>
        </div>
        <Spacer />
    </section>
</main>


<style>
    .toc-container {
        position: sticky;
        top: 4rem;
        height: fit-content;        
    }

    @keyframes fadeIn {
        from { opacity: 0; transform: translateY(10px); }
        to   { opacity: 1; transform: translateY(0); }
    }
</style>