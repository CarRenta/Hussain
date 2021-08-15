
const navMenu=document.getElementById('nav-menu'),
navtoggle=document.getElementById("nav-toggle"),
navclose=document.getElementById("nav-close")

if (navtoggle) {
    navtoggle.addEventListener ('click',()=>{
        navMenu.classList.add('show-menu')
    })
    
};

if (navclose) {
    navclose.addEventListener ('click',()=>{
        navMenu.classList.remove('show-menu')
    })
    
};




const navLink = document.querySelectorAll('.nav-link')

function linkAction(){
    const navMenu = document.getElementById('nav-menu')
    // When we click on each nav__link, we remove the show-menu class
    navMenu.classList.remove('show-menu')
}
navLink.forEach(n => n.addEventListener('click', linkAction))









function myFunction() {
  document.getElementById("myDropdown").classList.toggle("show");
 
}

// Close the dropdown if the user clicks outside of it
window.onclick = function(event) {
  if (!event.target.matches('.dropbtn')) {
    var dropdowns = document.getElementsByClassName("dropdown-content");
    var i;
    for (i = 0; i < dropdowns.length; i++) {
      var openDropdown = dropdowns[i];
      if (openDropdown.classList.contains('show')) {
        openDropdown.classList.remove('show');
      }
    }
  }
}




function mFunction() {
  document.getElementById("mDropdown").classList.toggle("shown");
 
}

// Close the dropdown if the user clicks outside of it
window.onclick = function(event) {
  if (!event.target.matches('.dropbt')) {
    var dropdowns = document.getElementsByClassName("dropdown-contnt");
    var i;
    for (i = 0; i < dropdowns.length; i++) {
      var openDropdown = dropdowns[i];
      if (openDropdown.classList.contains('shown')) {
        openDropdown.classList.remove('shown');
      }
    }
  }
}


function mFunctin() {
  document.getElementById("mDropdow").classList.toggle("qual-show");
 
}

// Close the dropdown if the user clicks outside of it
window.onclick = function(event) {
  if (!event.target.matches('.dropb')) {
    var dropdowns = document.getElementsByClassName("dropdown-contt");
    var i;
    for (i = 0; i < dropdowns.length; i++) {
      var openDropdown = dropdowns[i];
      if (openDropdown.classList.contains('qual-show')) {
        openDropdown.classList.remove('qual-show');
      }
    }
  }
}







function my() {
  document.getElementById("dropid").classList.toggle("open");
  document
 
}

// Close the dropdown if the user clicks outside of it
window.onclick = function(event) {
  if (!event.target.matches('.drop')) {
    var dropdowns = document.getElementsByClassName("dropdown");
    var i;
    for (i = 0; i < dropdowns.length; i++) {
      var openDropdown = dropdowns[i];
      if (openDropdown.classList.contains('open')) {
        openDropdown.classList.remove('open');
      }
    }
  }
}

// const skillscontent=document.getElementsByclassName('skills-content'),
// skillsheader=document.querySelectorAll('skills-header')
// function toggleskills() {
//     let itemclass=this.parentnode.className


//     for (let i = 0; i < skillscontent.length; i++) {
//         skillscontent[i].className='skills-list grid  skills-close'
        
//     }

//     if (itemclass=='skills-list grid  skills-close') {
        

//         this.parentnode.className='skills-list grid  skills-open'
//     }
// }; 

// skillsheader.forEach((el)=>{
//     el.addEventListener('click',toggleskills)
// })
// var blame=document.getElementById('skills-header'),
// Ahmad=document.getElementById(".skills-list"),


// if(Ahmad)
// {
//     Ahmad.addEventListener('click',()=>{
//         blame.classList.add('show-skills')
//     })
// }

// if (navclose) {
//     navclose.addEventListener ('click',()=>{
//         navMenu.classList.remove('show-menu')
//     })
    
// };
// const tabcontents=document.querySelectorAll('[data-content]'),
// tabs=document.querySelectorAll('[data-target]')

// tabs.forEach(tab =>{
//   tab.addEventListener('click',()=>{
//     const target= document.querySelector(tab.dataset.target)


//     tabcontents.forEach(tabcontent =>{
//       tabcontent.classList.remove('qual-active')

//     })
//     target.classList.add('qual-Active')


//     tab.forEach(tab =>{
//       tab.classList.remove('qual-active')

//     })
//     tab.classList.add('qual-active')

//   })
// })
















    // // Get the modal
    // var modal = document.getElementById("myModal");
    
    // // Get the button that opens the modal
    // var btn = document.getElementById("myBtn");
    
    // // Get the <span> element that closes the modal
    // var span = document.getElementsByClassName("service-modal-content")[0];
    
    // // When the user clicks the button, open the modal 
    // btn.onclick = function() {
    //   modal.style.visibility= 'visible';

    // }
    // function am() {
    //   modal.style.visibility = "hidden";
    // }
    
    // // When the user clicks on <span> (x), close the modal
    // span.onclick = function() {
    //   modal.style.visibility = "hidden";
    // }
    
    // // When the user clicks anywhere outside of the modal, close it
    // window.onclick = function(event) {
    //   if (event.target == modal) {
    //     modal.style.visibility = "hidden";
    //   }
    // }

    var modal = document.getElementById("myModa");
    
    // Get the button that opens the modal
    var btn = document.getElementById("myBt");
    
    // Get the <span> element that closes the modal
    var span = document.getElementsByClassName("bi bi-x-lg service-modal-close")[0];
    
    // When the user clicks the button, open the modal 
    btn.onclick = function() {
      modal.style.visibility= 'visible';

    }
    
    // When the user clicks on <span> (x), close the modal
    function ahm() {
      modal.style.visibility = "hidden";
    }
    
    // When the user clicks anywhere outside of the modal, close it
    window.onclick = function(event) {
      if (event.target == modal) {
        modal.style.visibility = "hidden";
      }
    }








    var modal = document.getElementById("myModal");
    
    // Get the button that opens the modal
    var btn = document.getElementById("myBtn");
    
    // Get the <span> element that closes the modal
    var span = document.getElementsByClassName("bi bi-x-lg service-modal-close")[0];
    
    // When the user clicks the button, open the modal 
    btn.onclick = function() {
      modal.style.visibility= 'visible';

    }
    
    // When the user clicks on <span> (x), close the modal
    function am() {
      modal.style.visibility = "hidden";
    }
    
    // When the user clicks anywhere outside of the modal, close it
    window.onclick = function(event) {
      if (event.target == modal) {
        modal.style.visibility = "hidden";
      }
    }




    // let swiper = new Swiper('.port-container', {
    //   cssMode: true,
    //   navigation: {
    //     nextEl: ".swiper-button-next",
    //     prevEl: ".swiper-button-prev",
    //   },
    //   pagination: {
    //     el: ".swiper-pagination",
    //   },
    //   mousewheel: true,
    //   keyboard: true,
    // });







    const sections = document.querySelectorAll('section[id]')

function scrollActive(){
    const scrollY = window.pageYOffset

    sections.forEach(current =>{
        const sectionHeight = current.offsetHeight
        const sectionTop = current.offsetTop - 50;
        sectionId = current.getAttribute('id')

        if(scrollY > sectionTop && scrollY <= sectionTop + sectionHeight){
            document.querySelector('.nav-menu a[href*=' + sectionId + ']').classList.add('active-link')
        }else{
            document.querySelector('.nav-menu a[href*=' + sectionId + ']').classList.remove('active-link')
        }
    })
}
window.addEventListener('scroll', scrollActive)











function scrollHeader(){
  const nav = document.getElementById('header')
  // When the scroll is greater than 200 viewport height, add the scroll-header class to the header tag
  if(this.scrollY >= 200) nav.classList.add('scroll-header'); else nav.classList.remove('scroll-header')
}
window.addEventListener('scroll', scrollHeader)













const themeButton = document.getElementById('theme-button')
const darkTheme = 'dark-theme'
const iconTheme = 'bi-brightness-high'

// Previously selected topic (if user selected)
const selectedTheme = localStorage.getItem('selected-theme')
const selectedIcon = localStorage.getItem('selected-icon')

// We obtain the current theme that the interface has by validating the dark-theme class
const getCurrentTheme = () => document.body.classList.contains(darkTheme) ? 'dark' : 'light'
const getCurrentIcon = () => themeButton.classList.contains(iconTheme) ? 'bi-moon' : 'bi-brightness-high'

// We validate if the user previously chose a topic
if (selectedTheme) {
  // If the validation is fulfilled, we ask what the issue was to know if we activated or deactivated the dark
  document.body.classList[selectedTheme === 'dark' ? 'add' : 'remove'](darkTheme)
  themeButton.classList[selectedIcon === 'bi-moon' ? 'add' : 'remove'](iconTheme)
}




// Activate / deactivate the theme manually with the button
themeButton.addEventListener('click', () => {
  // Add or remove the dark / icon theme
  document.body.classList.toggle(darkTheme)
  themeButton.classList.toggle(iconTheme)
  // We save the theme and the current icon that the user chose
  localStorage.setItem('selected-theme', getCurrentTheme())
  localStorage.setItem('selected-icon', getCurrentIcon())
})
