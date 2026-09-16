// header open close menu 
const openCloseMenu = document.getElementById('open-close-menu');
const menu = document.getElementById('menu');
let i = 0;
const open = () => menu.style.top = '0';
const close = () => menu.style.top = '-600px';

const btnTopBar = document.getElementById('top-bar');
const btnMiddleBar = document.getElementById('middle-bar');
const btnBottomBar = document.getElementById('bottom-bar');

let changeOpenBtn = () => {
    btnMiddleBar.style.opacity = '0';
    btnTopBar.style.transform = 'translateY(6px) rotate(45deg)';
    btnBottomBar.style.transform = 'translateY(-6px) rotate(-45deg)';
}

let changeCloseBtn = () => {
    btnMiddleBar.style.opacity = '1';
    btnTopBar.style.transform = 'translateY(0px) rotate(0deg)';
    btnBottomBar.style.transform = 'translateY(0px) rotate(0deg)';
}

openCloseMenu.addEventListener('click', () => {
    i+=1;
    if (i === 1) {
        open();
        changeOpenBtn();
    } else {
        close();
        changeCloseBtn();
        i = 0;
    }
})




// navigation bar onclick effect 
const navBar = document.querySelectorAll('.header__nav a');

const currentPage = window.location.pathname.split('/').pop();

navBar.forEach(item => {

    const linkPage = item.getAttribute('href').split('/').pop();

    if (linkPage === currentPage) {
        item.classList.add('clicked');
    }

});

// home page --> service section --> onscroll cards effect 

const homeCards = document.querySelectorAll('#home-cards .service__card');

let appears = function (element) {
    element.style.opacity = '1';
    element.style.transform = 'translateY(0px)';
    element.style.transition = '1s';
    setTimeout(() => {
        element.style.transition = '0.25s';
    }, 1500);
}

let eachCardAppears = function (element) {
    element.forEach((item, index)=> {
        setTimeout(() => {
            appears(item);
        }, index * 200);
    });
}


window.addEventListener('scroll', () => {

    if (window.scrollY >= 500) {

        homeCards.forEach(item => {

            appears(item);

        });

    }

});


// home numbers band effect 
const bandNums = document.querySelectorAll('.band__child b');

let counterStarted = false;

window.addEventListener('scroll', () => {

    if (window.scrollY >= 1020 && !counterStarted) {

        counterStarted = true;

        bandNums.forEach(item => {
            appears(item);
            const target = parseInt(item.textContent);
            const isPercentage = item.textContent.includes('%');

            let number = 0;

            const interval = setInterval(() => {

                number++;

                item.textContent = isPercentage
                    ? number + '%'
                    : number;

                if (number >= target) {
                    clearInterval(interval);
                }

            }, 20);

        });
    }
});



// Testimonials cards effect 

const testiCards = document.querySelectorAll('.testimonials__cards .testimonials__oneCard');

window.addEventListener('scroll', () => {
    if (window.scrollY >= 1429) {
        testiCards.forEach((item, index) => {
            setTimeout(() => {
                appears(item);
            },index * 100);
        })
    }
})

// about page =========> mession section -------> cards effect 

const aboutCards = document.querySelectorAll('.what-drives-us__cards .what-drives-us__card');

window.addEventListener('scroll', () => {
    if (window.scrollY >= 700) {
        eachCardAppears(aboutCards);
    }
})


// about page ======>> team section ====> cards effect

const teamCards = document.querySelectorAll('.meet-people__grid .meet-people__card')

window.addEventListener('scroll', () => {
    if (window.scrollY >= 2200) {
        eachCardAppears(teamCards);
    }
})


// services page =======> services card effect 
const ServicesPageCards = document.querySelectorAll('#p-s-cards .s-card ');

if (window.scrollY >= 0) {
    eachCardAppears(ServicesPageCards);
}

// packages -------

const packagesCards = document.querySelectorAll('.packages__cards .packages__card');

window.addEventListener('scroll', () => {
    if (window.scrollY >= 1400) {
        eachCardAppears(packagesCards);
        packagesCards.forEach(item => {
            item.style.scale = '1';
        })
    }
})


// question =========

const questions = document.querySelectorAll('.questions__container details');

window.addEventListener('scroll', () => {
    if (window.scrollY >= 2166) {
        eachCardAppears(questions);
    }
})
let count = 0;

questions.forEach(item => {
    item.addEventListener('click', () => {
        let span = item.querySelector('span');
        if (count === 0) {
            span.textContent = '-';
            count += 1;
        } else if (count === 1) {
            span.textContent = '+';
            count = 0;
        }
    })
})

// portfolio page =====> cards effect 

const workCards = document.querySelectorAll('.works__grid .image-container');

if (window.scrollY >= 0) {
    eachCardAppears(workCards);
}


// blog page ======> cards effect 

const leftGrid = document.querySelectorAll('.left-grid .card');

window.addEventListener('scroll', () => {
    if (window.scrollY >= 450) {
        eachCardAppears(leftGrid);
    }
})




