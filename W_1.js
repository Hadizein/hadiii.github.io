let icon = document.querySelector('.icon')
let x = 0;
let siteNav = document.querySelector('nav')
let pseudos = window.getComputedStyle(siteNav,':after')
icon.onclick = function(){
    x += 90;
    siteNav.querySelector('ul').classList.toggle('nav-icon-of');
    icon.style.transform=`rotate(${x}deg)`;
    
    if ( Number.isInteger((x/90)/2) ){
        siteNav.style.setProperty('--after-color','#16a085')
    }

    else{
        siteNav.style.setProperty('--after-color','#1abc9c')
    }

}


