const mobileMenuIcon = document.querySelector("#mobile-menu-icon");
const mobileNavigations = document.querySelector("#mobile-navigations");

document.addEventListener('DOMContentLoaded', () =>
{
    mobileMenuIcon.addEventListener('click', () =>
    {
        console.log("Menu icon clicked");
        mobileNavigations.classList.toggle('hide-mobile-navigations');
    });
    window.onscroll = () =>
        {
            hideNavigations();
            scroll_function();
        };
});

function hideNavigations()
{
    mobileNavigations.classList.add('hide-mobile-navigations');
}

function scroll_function()
{
    var nav_bar = document.querySelector("#navbar");

    if(document.body.scrollTop > 50 || document.documentElement.scrollTop > 50)
    {
        nav_bar.classList.remove("border-bottom");
    }
    else
    {
        nav_bar.classList.add("border-bottom");
    }
}   


var links = document.querySelectorAll('.title-links');
var contents = document.querySelectorAll('.content');

function opentab(tabname) {
    links.forEach(link => {
        link.classList.remove("active-link");
    });

    contents.forEach(content => {
        content.classList.remove("active-tab");
    });

    event.currentTarget.classList.add("active-link");
    document.getElementById(tabname).classList.add("active-tab");
}

