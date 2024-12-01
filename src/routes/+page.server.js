import { browser } from '$app/environment';

export async function load({ fetch }) {
	const response = await fetch('https://api.coindesk.com/v1/bpi/currentprice.json');
	const priceData = await response.json();
	console.log(`${browser ? 'Client' : 'Server'} priceData`, JSON.stringify(priceData));

	return {
		priceData
	};
}
