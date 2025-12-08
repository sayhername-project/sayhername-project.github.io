<script>
	import Scroller from '$lib/components/Scroller.svelte';
	import ArticleText from '$lib/components/ArticleText.svelte';
	import Heading from '$lib/components/Heading.svelte';
	import FullWidthText from '$lib/components/FullWidthText.svelte';
	import BigStat from '$lib/components/BigStat.svelte';
	import Spacer from '$lib/components/Spacer.svelte';
</script>

<Scroller layout="right">
	{#snippet sticky()}
		<div class="conclusion-visual">
			<h2 class="mb-8 text-4xl font-bold text-white">The Bigger Picture</h2>
			<div class="stat-grid">
				<div class="stat-card">
					<div class="stat-number">10k+</div>
					<div class="stat-label">articles published in 2015</div>
				</div>
				<div class="stat-card">
					<div class="stat-number">5k+</div>
					<div class="stat-label">unique articles</div>
				</div>
				<div class="stat-card">
					<div class="stat-number">16+</div>
					<div class="stat-label">women memorialized by AAPF in 2015</div>
				</div>
			</div>
		</div>
	{/snippet}

	{#snippet scrolly()}
	    <Heading
			scene="Scene 0"
			title="The Silence Before the Storm"
		/>

		<ArticleText>
			Before #SayHerName, their names were footnotes. Sandra Bland. Rekia Boyd. Tanisha Anderson.
			When Black women were killed by police, media coverage was sparse, localized, and quickly
			forgotten.
		</ArticleText>
		<ArticleText>
			In 2015, a movement demanded something different: that we say their names, that we remember,
			that we refuse to look away. This is the story of how America's news media responded—and who
			chose to listen.
		</ArticleText>
		<ArticleText>
			<br /> <br /> <br /> <br />
			Our dataset, scraped from MediaCloud, began with 10,759 raw articles. We processed the data
			through two stages of deduplication. During stage 1, source-level deduplication, we removed duplicate
			results caused by repeated scrapes or overlapping Google search returns. This returned 7,505 articles.
			Next, we performed content-level deduplication to remove articles with identical or near-identical
			content across outlets. This reduced the dataset to 5,823 unique articles.
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
