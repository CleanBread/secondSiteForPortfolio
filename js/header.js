'use strict';
(function () {
    var header = document.querySelector('.header');
    var logo = document.querySelector('.logo__img');
    var logoDark = document.querySelector('.logo__img_active');
    var links = document.querySelectorAll('.navbar__link');

    var header_active = () => {
        if (window.pageYOffset > 50) {
            header.classList.add('header_active');
            logo.classList.add('hide');
            logoDark.classList.remove('hide');
            links.forEach((item) => {
                item.classList.add('navbar__link_active');
            })
        } else {
            header.classList.remove('header_active');
            logoDark.classList.add('hide');
            logo.classList.remove('hide');
            links.forEach((item) => {
                item.classList.remove('navbar__link_active');
            })
        }
    }

    window.onscroll = () => {
        setTimeout(header_active, 200);
    }

    window.onload = () => {
        setTimeout(header_active, 200);
    }
    

})();