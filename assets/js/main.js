/*=============== SHOW MENU ===============*/
const navmenu = document.querySelector("#nav-menu");
const navtoggle = document.querySelector("#nav-toggle");
const navclose = document.querySelector("#nav-close");


if(navtoggle){
    navtoggle.addEventListener('click',() =>{
        navmenu.classList.add('show-menu');
    })
}

if(navclose){
    navclose.addEventListener('click',() =>{
        navmenu.classList.remove('show-menu');
    })
}

/*=============== REMOVE MENU MOBILE ===============*/
const navlink = document.querySelectorAll('.nav__link');
const linkAction = () =>{
    const navmenu = document.querySelector("#nav-menu");
    navmenu.classList.remove('show-menu');
}
navlink.forEach(n => n.addEventListener('click', linkAction));


/*=============== SWIPER PROJECTS ===============*/
let swiper = new Swiper(".projects__container", {
loop:true,
spaceBetween:24,
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
    pagination: {
      el: ".swiper-pagination",
    },
    // mousewheel: true,
    // keyboard: true,
    breakpoints: {
 
        1200: {
          slidesPerView: 2,
          spaceBetween: -56,
        },

      },
  });

/*=============== SWIPER TESTIMONIAL ===============*/
var swipertest = new Swiper(".testimonial__container", {
  grabCursor:true,
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});

/*=============== EMAIL JS ===============*/
const contactForm = document.querySelector('#contact-form'),
      contactName = document.querySelector('#contact-name'),
      contactEmail = document.querySelector('#contact-email'),
      contactProject = document.querySelector('#contact-project'),
      contactMessage = document.querySelector('#contact-message');

      const sendEmail = (e) =>{
        e.preventDefault()

        // check if the field has a value
        if(contactName.value === '' || contactEmail.value === '' || contactProject.value === ''){
          // add and remove color
          contactMessage.classList.remove('color-blue')
          contactMessage.classList.add('color-red')
          //show message
        contactMessage.textContent = 'write all the input fields';
        }
        else{
          //serviceID - templateID - #form - publicKey
          emailjs.sendForm('service_behvhq6','template_o9zfbsl','#contact-form','TGhWcA6eDhDbjdvp7')
          .then(() =>{
            // show message and add color
            contactMessage.classList.add('color-blue');
            contactMessage.textContent = 'Message sent ✅';

            //remove message after five seconds
            setTimeout(() =>{
              contactMessage.textContent = ''
            }, 5000)
          }, (error) =>{
            alert('OOPS! SOMETHING HAS FAILED...', error)
          })
          // to clear input field
          contactName.value = ''
          contactEmail.value = ''
          contactProject.value = ''
        }
      }
      contactForm.addEventListener('submit', sendEmail)

/*=============== SCROLL SECTIONS ACTIVE LINK ===============*/
const sections = document.querySelectorAll('section[id]');

const scrollActive = () =>{
const scrollY = window.pageYOffset

sections.forEach(current =>{
  const sectionHeight = current.offsetHeight,
        sectionTop = current.offsetTop - 58,
        sectionId = current.getAttribute('id'),
        sectionClass = document.querySelector('.nav__menu a[href*=' + sectionId + ']')

        if(scrollY > sectionTop && scrollY <= sectionTop + sectionHeight){
          sectionClass.classList.add('active-link')
        }
        else{
          sectionClass.classList.remove('active-link')
        }
})
}
window.addEventListener('scroll', scrollActive);

/*=============== SHOW SCROLL UP ===============*/ 
const scrollup = () =>{
const scrollup = document.querySelector('#scroll-up')

this.scrollY >= 350 ? scrollup.classList.add('show-scroll') : scrollup.classList.remove('show-scroll')
}
window.addEventListener('scroll', scrollup);

/*=============== DARK LIGHT THEME ===============*/ 
const themeButton = document.querySelector('#theme-button')
const darkTheme = 'dark-theme'
const iconTheme = 'ri-sun-line'

//previous selected topic (if user selected)
const selectedTheme = localStorage.getItem('selected-theme')
const selectedIcon = localStorage.getItem('selected-icon')

//we obtain the current theme that the interface has by validating the dark-theme class
const getCurrentTheme = () => document.body.classList.contains(darkTheme) ? 'dark' : 'light'
const getCurrentIcon = () => themeButton.classList.contains(iconTheme) ? 'ri-moon-line' : 'ri-sun-line'

//we validate if the user previously choose a topic
if(selectedTheme){
  //if the valication is fullfilled, we ask what the issue was to know if we activated or deactivated the dark
 document.body.classList[selectedTheme === 'dark' ? 'add' : 'remove'](darkTheme)
 themeButton.classList[selectedIcon === 'ri-moon-line' ? 'add' : 'remove'](iconTheme)

}
//Activate / deactivate the theme manually with the button
themeButton.addEventListener('click', () =>{
  //add or remove the dark / icon 
  document.body.classList.toggle(darkTheme)
  themeButton.classList.toggle(iconTheme)

  //we save the theme and the current icon that the user choose
  localStorage.setItem('selected-theme', getCurrentTheme())
  localStorage.setItem('selected-icon', getCurrentIcon())
})

/*=============== CHANGE BACKGROUND HEADER ===============*/
const scrollupHeader = () =>{
  const header = document.querySelector('#header')
  
  this.scrollY >= 50 ? header.classList.add('bg-header')
                     : header.classList.remove('bg-header')
  }
  window.addEventListener('scroll', scrollupHeader);

/*=============== SCROLL REVEAL ANIMATION ===============*/
const sr = ScrollReveal({
  origin:'top',
  distance: '60px',
  duration: 2500,
  delay: 400,
//  reset: true /*Animation repeat  */
})

sr.reveal(`.home__data, .projects__container, .testimonial__container, .footer__container`)
sr.reveal(`.home__info div`, {delay:600, origin:'bottom', interval: 100})
sr.reveal(`.skills__content:nth-child(1), .contact__content:nth-child(1)`, { origin:'left'})
sr.reveal(`.skills__content:nth-child(2), .contact__content:nth-child(2)`, { origin:'right'})
sr.reveal(`.qualification__content, .services__card`,  { interval: 100})