export async function load({ params, url }) {
	const { id } = params;

	// Fetch data from the API
	const response = await fetch('https://api.coindesk.com/v1/bpi/currentprice.json');
	const priceData = await response.json();
	console.log('priceData', priceData);

	return {
		priceData
	};
}
