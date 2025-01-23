const navButtonMobile = document.querySelector('.nav-button-mobile');
const primaryNavigation = document.querySelector('.primary-navigation');

navButtonMobile.addEventListener('click', () => {
    const visibility = primaryNavigation.getAttribute('data-visible');

    if (visibility === "true") {
        primaryNavigation.setAttribute("data-visible", false);
        navButtonMobile.setAttribute("aria-expanded", false)
    } else {
        primaryNavigation.setAttribute("data-visible", true);
        navButtonMobile.setAttribute("aria-expanded", true)
    }
})