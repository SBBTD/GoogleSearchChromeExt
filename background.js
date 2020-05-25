chrome.omnibox.onInputEntered.addListener((text) => {
	if (!text) return;
	chrome.tabs.create({ url: 'https://www.google.com/search?q=' + text });
});
