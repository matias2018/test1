var scroll = document.getElementById("scroll-range");

scroll.oninput = function () {
	var panel = document.getElementById("scrolling-container");

	var total = panel.scrollWidth - panel.offsetWidth;
	var percentage = total*(this.value/100);

	console.log(total);
	panel.scrollLeft = percentage;
	//console.log(percentage);
}
