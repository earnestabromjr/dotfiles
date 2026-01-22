const cheerio = require("cheerio");

(async () => {
	try {
		let url = "https://example.com";
		const response = await fetch(url);
		if (!response.ok) {
			throw new Error(`HTTP error! status: ${response.status}`);
		}
		const $ = cheerio.load(await response.text());
		console.log($.html());
	} catch (error) {
		console.error(`Error scraping JavaScript from ${url}:`, error);
		return [];
	}
})();
