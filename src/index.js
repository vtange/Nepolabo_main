document.getElementById("nojs-cover").style.display = "none";

setTimeout(function(){
    init();
}, 0);

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

var artbookLoaded = false;

function reclick(el) {
    if (artbookLoaded) return;
    window.setTimeout(function(){artbookLoaded=true;el.click();},0)
}