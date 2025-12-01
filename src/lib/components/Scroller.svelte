<script>
	let { layout = 'right', sticky, scrolly } = $props();
</script>

<div class="wrapper {layout}">
	<div class="sticky">
		{@render sticky()}
	</div>

	<div class="scrolly">
		{@render scrolly()}
	</div>
</div>

<style>
	.wrapper {
		display: flex;
		flex-direction: row;
		flex-wrap: wrap;
		align-items: flex-start;
		min-height: 100vh;
	}

	.left .sticky {
		order: 0;
	}
	.left .scrolly {
		order: 1;
	}
	.right .scrolly {
		order: 1;
	}
	.right .sticky {
		order: 0;
	}

	.sticky,
	.scrolly {
		display: flex;
		flex-direction: column;
		flex: 1 1;
	}

	.sticky {
		position: sticky;
		top: 10vh;
		align-items: center;
		justify-content: center;
		z-index: 0;
		flex-shrink: 0;
		max-height: 80vh;
		background: rgb(17,17,17);
		padding: 2rem;
		/* border-right: 1px solid rgba(255, 255, 255, 0.05); */
	}
	.scrolly {
		z-index: 1;
		background: rgb(245, 245, 245);
		color: rgb(0,0,0);
		padding: 4rem 2rem;
	}

	@media (max-width: 768px) {
		.wrapper {
			flex-direction: column;
		}

		.sticky {
			position: relative;
			top: 0;
			max-height: 50vh;
			order: 0 !important;
			border-right: none;
			/* border-bottom: 1px solid rgba(255, 255, 255, 0.05); */
		}

		.scrolly {
			order: 1 !important;
		}
	}
</style>
