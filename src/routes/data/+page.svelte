<script lang="ts">
	// TOP OF PAGE COMPONENTS
	import HeaderBar from '$lib/components/HeaderBar.svelte';
	import Hero from '$lib/dataSections/Hero.svelte';
	import Toc from 'svelte-toc';
	import Spacer from '$lib/components/Spacer.svelte';

	import { onMount } from 'svelte';

	let showToc = false; // toggles visibility
	let tocTrigger; // DOM element to observe

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

	<section class="bg-linear-to-b from-black to-blue-950 px-6 py-30">
		<div class="mx-auto max-w-4xl">
			<h2 class="mb-8 text-center text-4xl text-white md:text-5xl">General Acknowledgements</h2>
			<div class="space-y-6 text-lg leading-relaxed text-gray-300 md:text-xl">
				<p>
					We give thanks to the following people and groups for their contributions to this project:
				</p>
				<ol class="ml-8 list-decimal">
					<li>
						<a
							href="https://latoyasawyer.com/"
							class="text-purple-300"
							style="text-decoration: underline;"><strong>Professor LaToya Sawyer</strong></a
						> from St. Jones University who collected all 564,925 tweets in 2015 with #SayHerName.
					</li>
					<li>
						The following students in the Wellesley College Credibility Lab–Crystal McArdle-Ventura,
						Gwen Zoe Yang, Skylar Shi, Melissa Mullings, Elizabeth Ying Lystad–who worked during the
						Spring 2024 semester to clean and format this data.
					</li>
					<li>
						<a
							href="https://www.wellesley.edu/people/eni-mustafaraj"
							class="text-purple-300"
							style="text-decoration: underline;"><strong>Professor Eni Mustafaraj</strong></a
						> from Wellesley College for advising and guiding this project.
					</li>
				</ol>
			</div>
		</div>
	</section>

	<section class="bg-linear-to-b from-blue-950 to-purple-950 px-6 py-30">
		<div class="mx-auto max-w-4xl">
			<h2 class="mb-8 text-center text-4xl text-white md:text-5xl">Behind the Twitter Data</h2>
			<div class="space-y-6 text-lg leading-relaxed text-gray-300 md:text-xl">
				<p>
					Prior to conducting any analysis on the data, we cleaned the tweets by removing emojis,
					non-ASCII unicode, and links. We also anonymized all data by assigning tweets a random
					system-generated username, as well as removed all mentions of other Twitter users from the
					text of the tweet.
				</p>
				<br />
				<p class="font-extrabold italic">
					Are all 564,925 tweets relevant to the #SayHerName movement?
				</p>
				<p class="ml-10">
					Short answer: Yes, for the most part.
					<br /><br />
					After conducting stratified sampling based on tweet length, we randomly selected 2,000 tweets,
					an equal proportion from each bucket, and manually categorized them where 0 signified “No relevance
					to the #SayHerName movement” and 1 signified “Relevant to the #SayHerName movement.” 0.006%
					of those tweets (11/2,000) were not relevant to the #SayHerName movement. Due to the negligible
					number of non-relevant tweets, we decided to leave all as-is tweets in the dataset.
				</p>
				<br />
				<p class="font-extrabold italic">How did we analyze the data?</p>
				<p class="ml-10">
					For a portion of the analyzed data, we filtered the tweets down to original tweets only
					using Twitter’s isRetweet column in each tweet’s metadata. In the unlikely event where
					isRetweet did not exist, we scanned the tweet’s content for “RT,” signifying it was a
					retweet” and excluded those.
				</p>
				<br />
				<p class="ml-10 font-semibold italic">
					How did we discover the data presented in <a
						href="https://katrinahuang888.github.io/SayHerName/twitter"
						class="text-purple-300"
						style="text-decoration: underline;">“Scene 3: Behind the Users?”</a
					>
				</p>
				<p class="ml-20">
					We trained and utilized BERTweet, an open-source HuggyFace transformer that was trained on
					850 million English tweets.
					<br /><br />
					Using the same randomly selected 2,000 tweets as before, we manually categorized the tweets
					according to both of the following categories:
				</p>
				<ol class="ml-30 list-decimal">
					<li>
						Did users exhibit behaviors–how the tweeter expresses their emotions–like outrage, unity
						and support, sad and mournful?
					</li>
					<li>
						What were the users’ motivations–call to action, informational, remembrance–behind
						posting the tweet?
					</li>
				</ol>
				<p class="ml-20">
					The above categories were determined based on the lens of perceived meaning: how the
					tweeter’s words, tone, and actions may have been received and understood by others within
					the online public sphere. We do not claim to know each user’s true intentions behind their
					tweets.
				</p>
			</div>
		</div>
	</section>

	<section class="bg-linear-to-b from-purple-950 to-pink-950 px-6 py-30">
		<div class="mx-auto max-w-4xl">
			<h2 class="mb-8 text-center text-4xl text-white md:text-5xl">Behind the News Data</h2>

			<div class="space-y-6 text-lg leading-relaxed text-gray-300 md:text-xl">
				<p>
					We collected news coverage using a MediaCloud query focused on #SayHerName and a set of
					named cases. The query returned articles from a variety of outlets and time points. Before
					analysis we applied a two-stage deduplication pipeline (see below) to make sure our counts
					and text analyses were appropriate for each research question.
				</p>

				<p class="italic font-extrabold">What did we search for?</p>
                <p class="ml-6">
                    Data was collected from MediaCloud using a focused boolean query of case names and the phrase
                    <code class="inline break-words bg-black/20 p-1 rounded">sayhername</code>. The exact query string used was:
                </p>
                <code class="block rounded bg-black/20 p-3 break-words"
						>sayhername OR "say her name" OR "Yuvette Henderson" OR "Natasha McKenna" OR "Janisha
						Fonville" OR "Monique Jenee Deckard" OR "Mya Hall" OR "Alexia Christian" OR "Sandra
						Bland" OR "Kindra Chapman" OR "Joyce Curnell" OR "Ralkina Jones" OR "Raynette Turner" OR
						"Redel Jones" OR "India Kager" OR "Marquesha McMillan" OR "Barbara Dawson" OR "Bettie
						Jones" OR "Meagan Hockaday" OR "Nuwnah Laroche"</code
					>

				<p class="font-extrabold italic">Which names did we include?</p>
				<p class="ml-6">
					Our query terms were constructed from names compiled across the African American Policy
					Forum (AAPF) In Memoriam and related Wikipedia listings. In total we used <strong
						>18 names</strong
					> in the query. (See above for the listed names).
				</p>

				<p class="font-extrabold italic">How did we prepare the corpus?</p>
				<p class="ml-6">
					After scraping, we performed a <strong>two-stage deduplication pipeline</strong>:
				</p>
				<ol class="ml-12 list-decimal">
					<li>
						<strong>Source-level deduplication</strong> — removed obvious duplicate scrape results and
						redundant search-engine hits so each (outlet, URL) pair is unique.
					</li>
					<li>
						<strong>Content-level deduplication</strong> — clustered and collapsed near-identical articles
						(same text published on different platforms or syndicated copies). For each cluster we retained
						a canonical version (we kept the shortest/cleanest version in our workflow).
					</li>
				</ol>

				<p class="font-extrabold italic">
					Which level of deduplication was used for each analysis?
				</p>
				<p class="ml-6">To avoid confusion, here is the rule we followed throughout:</p>
				<ul class="ml-12 list-disc">
					<li>
						<strong>Timelines and publisher volume (who amplified coverage):</strong> use
						<em>source-level deduplication</em>. This preserves each publication event and shows how
						the story propagated across outlets and time.
					</li>
					<li>
						<strong>Text analyses, title-word counts, and “unique mentions” per person:</strong> use
						<em>content-level deduplication</em>. This prevents repeated syndicated copies from
						skewing vocabulary, topic models, or per-person mention counts.
					</li>
					<li>
						<strong>Title-mention counts of each woman:</strong> specifically, these are computed on
						the content-level deduplicated dataset so each story counts once.
					</li>
				</ul>

                <p class="italic font-extrabold">How were outlets classified (local / national / international / digital / etc.)?</p>
                    <p class="ml-6">
                        Outlet classification was a two-layer process:
                    </p>
                    <ol class="list-decimal ml-12">
                        <li>
                        We matched domains to the public mapping provided by Clemm von Hohenberg et al., <em>A list of over 5000 US news domains and their social media accounts</em> (2021). The canonical source we used is available at:
                        <a href="https://doi.org/10.5281/zenodo.7651047" class="text-purple-300" style="text-decoration: underline;">https://doi.org/10.5281/zenodo.7651047</a>.
                        </li>
                        <li>
                        We then applied manual and rule-based augmentations to that mapping to capture additional outlet types and new domains (for example, niche local sites, state-level outlets, and pure-digital publishers). These additions reflect commonly used classifiers and our local knowledge of outlet scope.
                        </li>
                        <li> <strong>Please note: </strong> This outlet classification is <strong>not</strong> error-free and should be treated as approximate. The Clemm et al. mapping is an external resource with its own limitations. Our manual augmentations introduce additional subjectivity and may misclassify local, niche, or multi-regional sites. As a result, counts by outlet type are best interpreted as indicative rather than definitive and small or borderline outlets may be assigned to a category that others might reasonably classify differently.</li>
                        </ol>
                        <div>
                    </div>

                    <p class="italic font-extrabold">How were keywords and categories created?</p>
                    <p class="ml-6">
                        Keyword extraction began with an explicit list of terms of interest (case names, movement phrases, and thematic keywords). We matched keywords in lowercased titles and bodies using substring rules and regular expressions, then grouped keywords into higher-level categories (Identity, Violence/Police, Activism, Legal/Institutional, Media, Specific Cases, Other) using deterministic, rule-based logic.
                    </p>

                    <p class="ml-6"><strong>Please note:</strong> The keyword categorization implemented here is <strong>not</strong> error-free. We performed limited manual checks on sampled items, but keyword counts are approximate and should be read as indicative trends, not exact measures. If your analytic conclusions depend on flawless category assignment, treat these results as exploratory and consider additional manual validation or refined NLP approaches. </p>

				<p class="font-extrabold italic">Additional data limitations and caveats:</p>
				<p class="ml-6">
					<strong>Scope:</strong> the dataset is bounded by the query terms above — articles that
					did not include those keywords but were nonetheless relevant will not appear. <br />
					<strong>Deduplication tradeoffs:</strong> content-level deduplication reduces redundancy
					but can mask small edits between versions; source-level deduplication preserves
					publication events but may overcount syndicated text. <br />
					<strong>Classifier &amp; keyword limits:</strong> automated filters and keyword matches
					are imperfect and can both miss relevant items and include false positives. <br />
					<strong>Undercount of cases:</strong> the set of names used is not an exhaustive list of all
					victims or cases — it reflects the names collected from AAPF and Wikipedia and is therefore
					a documented sample rather than a complete census.
				</p>
			</div>
		</div>
	</section>

    <section class="py-30 px-6 bg-linear-to-b from-pink-950 to-red-950">
        <div class="max-w-4xl mx-auto">
            <h2 class="text-4xl md:text-5xl mb-8 text-center text-white">Citations</h2>
            <div class="space-y-6 text-lg md:text-xl text-gray-300 leading-relaxed">
                <ul class="list-disc ml-10">
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
		from {
			opacity: 0;
			transform: translateY(10px);
		}
		to {
			opacity: 1;
			transform: translateY(0);
		}
	}
</style>
