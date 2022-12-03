function ham() {
    var menu = document.getElementById("ham-menu-id");
    if (menu.style.opacity === '1'){
        menu.style.height = '0'
        menu.style.opacity = '0';
    }
    else {
        menu.style.height = 'auto'
        menu.style.opacity = '1';
    }
}