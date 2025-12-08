<script>
	import Scroller from '$lib/components/Scroller.svelte';
	import ArticleText from '$lib/components/ArticleText.svelte';
	import Heading from '$lib/components/Heading.svelte';
	import FullWidthText from '$lib/components/FullWidthText.svelte';
	import BigStat from '$lib/components/BigStat.svelte';
	import Spacer from '$lib/components/Spacer.svelte';
  import NamesInteractive from '$lib/newsSections/NamesInteractive.svelte';
</script>

<Scroller layout="right">
	{#snippet sticky()}
		<NamesInteractive />
	{/snippet}

	{#snippet scrolly()}
	    <Heading
			scene="Scene 0.5"
			title="Whose Stories Are We Talking About?"
		/>

		<ArticleText>
			Before exploring timelines, coverage patterns, and narrative control, it’s important to understand who this dataset was built to capture. The #SayHerName movement exists because far too many stories of Black women killed by police were overlooked, unreported, or quickly forgotten.
		</ArticleText>

		<ArticleText>
			MediaCloud does not automatically know which cases belong to the #SayHerName movement.
			To build the corpus, we constructed a query using 18 names documented on the African American Policy Forum’s In Memoriam list and corroborated through contemporaneous Wikipedia sources.
		</ArticleText>

		<ArticleText>
			Across the 18 women included in our queries, Sandra Bland appeared in over <strong>1,000</strong> articles, even after removing duplicates.
		</ArticleText>

		<ArticleText>
			Most others were mentioned fewer than <strong>20</strong> times.
		</ArticleText>

		<ArticleText>
			<strong>9 of the 18 women</strong> returned zero articles in our 2015 scrape — not because their lives mattered any less, but because their stories were not preserved in the media archives we could access.
		</ArticleText>

		<ArticleText>
			This interactive allows you to explore:
			<ul>
				<li> • which names surfaced in the media</li>
				<li> • how uneven the landscape of attention truly was</li>
				<li> • and examples of the headlines that shaped public understanding</li>
			</ul>
		</ArticleText>

		<ArticleText>
			It's equally important to remember that these 18 women do not represent all Black women killed by police in 2015.
			They represent the documented cases for which names were accessible, searchable, and historically recorded — a limitation that shapes the dataset itself.
		</ArticleText>

		<ArticleText>
			It is not a measure of whose life mattered.
			It is a measure of whose stories the media allowed into the record — and a reminder of those who were left out.
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
</style>
