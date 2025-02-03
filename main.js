let counter = 1;
let faviconImgs = 5;
let favicons = document.querySelectorAll('link');

function animateFavicon() {
    favicons.forEach(item => {
        if(item.getAttribute('rel').indexOf('icon') >= 0) {
            item.setAttribute('href', 'fav/' + counter + '..png')
        }
    });
    counter++;
    if(counter == faviconImgs) {counter = 1;}
}

setInterval(animateFavicon,10000);
