// OUVERTURE DE LA NAV
function openNav() {
    document.getElementById("myNav").style.height = "100vh";
    document.getElementById("bars_btn").style.display = "none";
    document.getElementById("cross_btn").style.display = "flex";
    document.getElementById("cross_btn").style.zIndex = "2";
    document.getElementById("logo").style.zIndex = "2";
    document.getElementById("")
}

// FERMETURE DE LA NAV AVEC LE X
function closeNav() {
    document.getElementById("myNav").style.height = "0%";
    document.getElementById("bars_btn").style.display = "flex";
    document.getElementById("cross_btn").style.display = "none";
}

// FERMETURE DU MENU AU SCROLL
var prevScrollpos = window.pageYOffset;
window.onscroll = function () {
    var currentScrollPos = window.pageYOffset;
    if (prevScrollpos < currentScrollPos) {
        closeNav()
    }
}