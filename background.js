chrome.cookies.onChanged.addListener(function(info) {
	chrome.cookies.remove({
		name: "EMETA_NCLICK",
		url: "http://www.desmoinesregister.com"
	});
});