document.getElementById("nojs-cover").style.display = "none";

var white_full = document.getElementById("white-full");
var content = document.getElementById('content');

setTimeout(function(){
    white_full.style.opacity = 1;
    setTimeout(function(){
        content.classList.add('open');
        init();
        setTimeout(function(){
            white_full.style.opacity = 0;
        }, 500);
    }, 1000);
}, 1000);

function init() {
    AOS.init({
        delay: 50,
        duration: 1000,
        mirror: true,
        once: false,
    });

    let gallery_a = new SimpleLightbox('#artbook-gallery a');
    gallery_a.on('error.simplelightbox', function (e) {
        console.log(e); // some usefull information
    });
}