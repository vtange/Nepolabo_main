function hide_lid() {
	let lids = document.getElementsByClassName("c-bento-lid");
	for (var i = 0; i < lids.length; i++) {
		lids[i].classList.add("u-lid-off");
	}

	let hands = document.getElementsByClassName("c-hands");
	for (var i = 0; i < hands.length; i++) {
		hands[i].classList.add("u-fade-in");
	}
}
