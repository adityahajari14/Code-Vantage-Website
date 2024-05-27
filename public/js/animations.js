// Hero Section Started
function herosectionanimation() {

    // Variable

    let tl = gsap.timeline();

    // Header 

    tl.from(".logo-extended,.contact-button", {
        y: -30,
        duration: 0.5,
        delay: 1,
        opacity: 0,
    })

    // Main text 

    tl.from(".crafting", {
        scale: 0,
        opacity: 0,
        duration: 0.5,
    })
    tl.from(".curly1", {
        x: -150,
        opacity: 0,
        rotate: 180,
        duration: 0.5,
    }, "curl")
    tl.from(".curly2", {
        x: 150,
        opacity: 0,
        rotate: 180,
        duration: 0.5,
    }, "curl")
    tl.from(".your", {
        x: -100,
        opacity: 0,
        duration: 0.5,
    },)
    tl.from(".web", {
        y: -50,
        opacity: 0,
        duration: 0.3,
    },)
    tl.from(".presence", {
        x: -100,
        opacity: 0,
        duration: 0.5,
    },)

    // Description 

    tl.from(".square1", {
        x: -150,
        opacity: 0,
        duration: 0.5,
    }, "square")
    tl.from(".square2", {
        x: 150,
        opacity: 0,
        duration: 0.5,
    }, "square")
    tl.from(".short-description",{
        scale: 0,
        opacity: 0,
        duration: 0.3,
    })

};
function descriptiontypeanimation(){
    let typed = new Typed(".short-description",{
        strings : ["Your one stop solution for <br> everything related web"],
        typeSpeed : 75,
        startDelay:5000,
    })
}

herosectionanimation();
descriptiontypeanimation();
// Hero Section Ended


// Portfolio Section Started

let tl2 = gsap.timeline({
    scrollTrigger: {
        trigger: ".portfolio",
        scroller: "body",
        start: "top 60%"
    }
});

tl2.from(".portfolio h2", {
    scale: 0,
    opacity: 0,
    duration: 0.5,
});

tl2.from(".portfolio-curly1", {
    x: -150,
    opacity: 0,
    rotate: 180,
    duration: 0.5,
}, "curl")

tl2.from(".portfolio-curly2", {
    x: 150,
    opacity: 0,
    rotate: 180,
    duration: 0.5,
}, "curl")

tl2.from(".swiper", {
    scale: 0,
    opacity: 0,
    duration: 0.5,
})

var swiper = new Swiper(".mySwiper", {
    slidesPerView: 1,
    spaceBetween: 30,
    grabCursor: true,
    centeredSlides: true,
    breakpoints: {
        640: {
          slidesPerView: 2,
        }},
    
  });

function handleMouseEnter1(){
    gsap.to(".portfolio-background1", {
        opacity: 0.6,
        duration: 0.5
    });
    gsap.to(".portfolio-name1", {
        opacity:1,
        duration: 0.5
    });
}
function handleMouseEnter2(){
    gsap.to(".portfolio-background2", {
        opacity: 0.6,
        duration: 0.5
    });
    gsap.to(".portfolio-name2", {
        opacity:1,
        duration: 0.5
    });
}

function handleMouseLeave1(){
    gsap.to(".portfolio-background1", {
        opacity: 0,
        duration: 0.5
    });
    gsap.to(".portfolio-name1", {
        opacity:0,
        duration: 0.5
    });
}
function handleMouseLeave2(){
    gsap.to(".portfolio-background2", {
        opacity: 0,
        duration: 0.5
    });
    gsap.to(".portfolio-name2", {
        opacity:0,
        duration: 0.5
    });
}


document.querySelector(".portfolio-name1").addEventListener("mouseenter", handleMouseEnter1);

document.querySelector(".portfolio-name1").addEventListener("mouseout", handleMouseLeave1);

document.querySelector(".portfolio-name2").addEventListener("mouseenter", handleMouseEnter2);

document.querySelector(".portfolio-name2").addEventListener("mouseout", handleMouseLeave2);

// Portfolio Section Started