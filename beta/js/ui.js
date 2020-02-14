const ui = (() => {
	var overlay = document.getElementById("ui");
	var performance = document.getElementById("performanceDisplay");
	var beatmap = document.getElementById("beatmapDisplay");
	var results = document.getElementById("resultsDisplay");
	var modifier = document.getElementById("modifierDisplay");

	return {
		play() {
			overlay.style.opacity = "1";
			performance.style.top = "20px";
			beatmap.style.right = "-250px";
		},
		pause() {
			overlay.style.opacity = "0.5";
			performance.style.top = "20px";
			beatmap.style.right = "-250px";
		},
		menue() {
			overlay.style.opacity = "1";
			performance.style.top = "-200px";
			beatmap.style.right = "0px";
		}
		
	}
})();