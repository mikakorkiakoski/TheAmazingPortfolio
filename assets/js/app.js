//==============Scroll up button Section Start============//

function toggleScrollToTopButton() {
    var scrollToTopButton = document.getElementById("scrollToTopButton");
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        scrollToTopButton.style.display = "block";
    } else {
        scrollToTopButton.style.display = "none";
    }
}

function scrollToTop() {
    document.body.scrollTop = 0; // For Safari
    document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE, and Opera
}

window.addEventListener("scroll", toggleScrollToTopButton);

//==============Scroll up button End============//

//======== ABOUT ME TOGGLE SECTION START ========== //

var tablinks = document.getElementsByClassName("tab-links");
var tabcontents = document.getElementsByClassName("tab-contents");
function opentab(tabname) {
    for(tablink of tablinks){
        tablink.classList.remove("active-link");
    }
    for(tabcontent of tabcontents){
        tabcontent.classList.remove("active-tab");
    }
    event.currentTarget.classList.add("active-link");
    document.getElementById(tabname).classList.add("active-tab");
}

//=========== ABOUT ME TOGGLE SECTION END ============= //

// ================ TYPING ANIMATION START =============== //

let typed = new Typed('.auto-input', {
    strings: ['UI/UX Designer', 'Electrician', 'IT Student','Software Developer', 'Full-stack Developer', 'Web App Developer'],
    typeSpeed: 100,
    backSpeed: 50,
    backDelay: 2000,
    loop: true,
})

//================== TYPING ANIMATION END ================ //

//================== SideMenu For Media Screens max 600px Start ================== //

var sidemenu = document.getElementById("sidemenu");

function openmenu() {
    sidemenu.style.right = "0";
    document.body.style.overflow = "hidden";
    
}

function closemenu() {
    sidemenu.style.right = "-200px";
    document.body.style.overflow = "auto";
}

document.addEventListener("click", function(event) {
    var nav = document.querySelector("nav");
    var ul = document.querySelector("nav ul");

    // Check if the clicked element is not inside the nav element
    if (event.target !== nav && !nav.contains(event.target)) {
        // Check if the nav menu is open (right value is not -200px)
        if (ul.style.right !== "-200px") {
            // Close the nav menu by setting right to -200px
            closemenu();
        }
    }
});


//================== SideMenu For Media Screens max 600px End ================== //

//================== Contact Form Submit Start ======================= //

    const scriptURL = 'https://script.google.com/macros/s/AKfycbxbREj0hFOBjyXJSGiDwuWHA791WliA8Z3CIh39i8ue-R3hsIqrH71DsFLPzxHaM7Zy/exec'
    const form = document.forms['submit-to-google-sheet']
    const submitMsg = document.getElementById("submitMsg")
  
    form.addEventListener('submit', e => {
      e.preventDefault();
      fetch(scriptURL, { method: 'POST', body: new FormData(form) })
        .then(response => {
            submitMsg.innerHTML = "Message sent successfully!"
            setTimeout(function(){
                submitMsg.innerHTML = ""
            },5000)
            form.reset()
        })
        .catch(error => console.error('Error!', error.message))
    })
  

//================== Contact Form Submit End ======================= //




