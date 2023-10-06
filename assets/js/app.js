

//======== ABOUT ME TOGGLE SECTION START //

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