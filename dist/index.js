"use strict";
document.getElementById("nojs-cover").style.display = "none";
var white_full = document.getElementById("white-full"),
    content = document.getElementById("content");

function init() {
    AOS.init({
        delay: 50,
        duration: 1e3,
        mirror: !0,
        once: !1
    }), new SimpleLightbox("#artbook-gallery a").on("error.simplelightbox", function (t) {
        console.log(t)
    })
}
setTimeout(function () {
    white_full.style.opacity = 1, setTimeout(function () {
        content.classList.add("open"), init(), setTimeout(function () {
            white_full.style.opacity = 0
        }, 500)
    }, 1e3)
}, 0);