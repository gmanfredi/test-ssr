<script>
	export let data;
	$: ({ priceData } = data);
</script>

{#if priceData}
	<div class="container">
		<div class="header">
			<h1>{priceData.chartName} Prices</h1>
			<p>Last updated: {priceData.time.updated}</p>
		</div>

		<div>
			{#each Object.entries(priceData.bpi) as [key, value]}
				<div class="bpi">
					<h2>{value.description} ({value.code})</h2>
					<p class="bpi-item">Rate: {@html value.symbol}{value.rate}</p>
				</div>
			{/each}
		</div>

		<a href="/about">disclaimer</a>
	</div>
{/if}

<style>
	.container {
		font-family: Arial, sans-serif;
		padding: 1rem;
		max-width: 600px;
		margin: auto;
	}
	.header {
		text-align: center;
		margin-bottom: 1.5rem;
	}
	.bpi {
		margin: 1rem 0;
		border: 1px solid #ddd;
		border-radius: 5px;
		padding: 1rem;
		background: #f9f9f9;
	}
	.bpi-item {
		margin-bottom: 0.5rem;
	}
	.disclaimer {
		font-size: 0.9rem;
		color: #666;
		margin-top: 1rem;
	}
</style>
