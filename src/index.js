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

var mainPhoto = document.getElementById("photo");
function getPhotoWidth(width){
    if (width > 1800) {
        return "dist/1920w.jpg";
    } else if (width > 1100) {
        return "dist/1200w.jpg";
    } else if (width > 800) {
        return "dist/960w.jpg";
    } else if (width > 500) {
        return "dist/600w.jpg";
    } else {
        return "dist/400w.jpg";
    }
}
mainPhoto.setAttribute("href", getPhotoWidth(window.innerWidth))