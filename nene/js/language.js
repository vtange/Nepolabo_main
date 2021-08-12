// stores the user's language preferences in a cookie (default is japanese)
function toggle_lang() {
	// checks if a cookie exists
	if (document.cookie.indexOf("lang=") == -1) {
		// if not, creates a cookie with the default language
		document.cookie = "lang=ja; sameSite=Lax";
	} else if (document.cookie.indexOf("lang=ja") != -1) {
		document.cookie = "lang=en; sameSite=Lax";
	} else {
		document.cookie = "lang=ja; sameSite=Lax";
	}
	console.log(document.cookie);
	show_lang_divs();
}

// shows a all divs labeled japanese when the user's language is japanese
function show_lang_divs() {
	if (document.cookie.indexOf("lang=ja") != -1) {
		// hides divs with the class "jp" and shows "en"
		var jp_divs = document.getElementsByClassName("jp");
		for (var i = 0; i < jp_divs.length; i++) {
			jp_divs[i].style.display = "none";
		}

		var en_divs = document.getElementsByClassName("en");
		for (var i = 0; i < en_divs.length; i++) {
			en_divs[i].style.display = "block";
		}
	} else {
		// hides divs with the class "en" and shows "jp"
		var en_divs = document.getElementsByClassName("en");
		for (var i = 0; i < en_divs.length; i++) {
			en_divs[i].style.display = "none";
		}

		var jp_divs = document.getElementsByClassName("jp");
		for (var i = 0; i < jp_divs.length; i++) {
			jp_divs[i].style.display = "block";
		}
	}
}

document.onload = show_lang_divs();

// First we get the viewport height and we multiple it by 1% to get a value for a vh unit
let vh = window.innerHeight * 0.01;
// Then we set the value in the --vh custom property to the root of the document
document.documentElement.style.setProperty("--vh", `${vh}px`);

// We listen to the resize event
window.addEventListener("resize", () => {
	// We execute the same script as before
	let vh = window.innerHeight * 0.01;
	document.documentElement.style.setProperty("--vh", `${vh}px`);
});
