var debutN = 1628780400000;
var debutP = 1629039600000;
var debutL = 1628694000000;
var debutB = 1628866800000;
var debuts = [debutN,debutP,debutL,debutB];
function secondsToHms(d) {
    d = Number(d);
    var h = Math.floor(d / 3600);
    var m = Math.floor(d % 3600 / 60);
    var s = Math.floor(d % 3600 % 60);
    return (
      (h > 0 ? h + ":" + (m < 10 ? "0" : "") : "") + m + ":" + (s < 10 ? "0" : "") + s
    );
}
function get(a){
    return document.getElementById(a);
}
function runTimer(){
    var time = new Date().getTime();
    nplb.forEach(function(el,i){
        el.innerHTML = secondsToHms((debuts[i] - time)/1000);
    });
}
var ne = get("ne");
var po = get("po");
var ra = get("ra");
var bo = get("bo");
var nplb = [ne,po,ra,bo];
runTimer();
window.setInterval(function(){
    runTimer();
},1000);