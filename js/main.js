document.addEventListener('DOMContentLoaded', function() {
    
    //Btns Selector 
    const mobileNav = document.querySelector('.mnav');
    const closeBtn = document.querySelector('.mnav__close-btn');
    const closeBtnIcn = document.querySelector('.mnav__close-btn-icon');

    const btnServicesFooter =  document.getElementById('servicesNavBtnFooter')
    const btnServicesNav =  document.getElementById('servicesNavBtn')
    const btnServicesMobileNav =  document.getElementById('servicesNavMobileBtn')
    
    // mobile nav
    const navOpenedClass = 'left-0';
    const navClosedClass = '-left-[300px]';
    const arrowLeftClass = 'ri-arrow-left-s-line';
    const arrowRightClass = 'ri-arrow-right-s-line';
    
    function toggleNav() {
        mobileNav.classList.toggle(navOpenedClass);
        mobileNav.classList.toggle(navClosedClass);
        closeBtnIcn.classList.toggle(arrowLeftClass);
        closeBtnIcn.classList.toggle(arrowRightClass);
    }

    closeBtn.addEventListener('click', function() {
        if (mobileNav.classList.contains(navClosedClass)) {
            mobileNav.classList.toggle(navClosedClass);
            mobileNav.classList.toggle(navOpenedClass);
        } else {
            toggleNav();
        }
    });

    // Click directions
    function goto_services() {
        document.querySelector('#servicesSection').scrollIntoView({ behavior: 'smooth' });
    }

    btnServicesFooter.addEventListener('click', goto_services);

    btnServicesNav.addEventListener('click', goto_services);

    btnServicesMobileNav.addEventListener('click', function () {
        toggleNav();
        goto_services()
    });
    
    
    // Scroll reveal animations
    const sr = ScrollReveal({
        origin: 'bottom',
        distance: '60px',
        duration: 3000,
        delay: 600
        // reset: true //reset aniamtion
    })
    
    // Hero 
    sr.reveal('.hero__text', {origin: 'top'});
    sr.reveal('.hero__img');
    
    // Stats
    sr.reveal('.stats__item', {
        delay: 0,
        distance: '100px',
        interval: 100,
        origin: 'top'
    })

    // Services
    sr.reveal('.services', {delay: 0, duration: 1500});
    sr.reveal('.services__top');
    sr.reveal('.services__item', {
        delay: 0,
        distance: '100px',
        interval: 100,
        origin: 'bottom'
    })

    // Departments
    sr.reveal('.departments__bg', {delay: 0, duration: 2000});
    sr.reveal('.departments__container', {delay: 0, duration: 2000});

    // Appontment
    sr.reveal('.appoinment__title', {delay: 0, duration: 2000});
    // sr.reveal('.appontment__container'); // Feo efecto por la carpa de la API de Calendly

    // Blog
    sr.reveal('.blog__title', {delay: 0, duration: 1500});
    sr.reveal('.blog__post', {
        delay: 0,
        duration: 2000,
        distance: '100px',
        interval: 100,
        origin: 'bottom'
    })

    // Newsletter
    sr.reveal('.newsletter', {delay: 0, duration: 2000});

    // Departments
    sr.reveal('.departments__bg');
    sr.reveal('.departments__container');
});





