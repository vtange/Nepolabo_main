$(window).on('load', function () {
    $(window).delay(800).queue(function () {
        $('.op_anim').addClass('open');
        $('body').addClass('active');
    });
});

$(document).ready(function () {
    $(this).scrollTop(0);
});

var scrollToTopBtn = document.querySelector(".scroll-to-top")
var rootElement = document.documentElement

function handleScroll() {
    // Do something on scroll
    var scrollTotal = rootElement.scrollHeight - rootElement.clientHeight
    if ((rootElement.scrollTop / scrollTotal) > 0.20) {
        // Show button
        scrollToTopBtn.classList.add("showBtn")
    } else {
        // Hide button
        scrollToTopBtn.classList.remove("showBtn")
    }
}

function scrollToTop() {
    // Scroll to top logic
    rootElement.scrollTo({
        top: 0,
        behavior: "smooth"
    })
}
scrollToTopBtn.addEventListener("click", scrollToTop)
document.addEventListener("scroll", handleScroll)