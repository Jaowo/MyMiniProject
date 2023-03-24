const header = document.querySelector('.navbar');

window.onscroll = funtion() {
    var top = window.scrollY;
    if(top >=50 ) {
        header.add('navbarkcolor');
    }
    else {
        header.classList.remove('navbarcolor');
    }
}