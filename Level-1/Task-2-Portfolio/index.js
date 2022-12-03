function ham() {
    var menu = document.getElementById("ham-menu-id");
    if (menu.style.opacity === '1'){
        menu.style.opacity = '0';
    }
    else {
        menu.style.opacity = '1';
    }
}