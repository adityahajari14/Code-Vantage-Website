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

// Service Section Started 
function horizontalscroll(){
    let querylaptop1= window.matchMedia("(min-width:1024px)");
    let querylaptop2= window.matchMedia("(min-width:768px) and (max-width:1024px)");
    let querytablet= window.matchMedia("(min-width:425px) and (max-width:768px)");
    let querymobile1= window.matchMedia("(min-width:375px) and (max-width:425px)");
    let querymobile2= window.matchMedia("(min-width:320px) and (max-width:375px)");
    let querymobile3= window.matchMedia("(max-width:320px)");

    if(querylaptop1.matches){
        gsap.to(".servicesection .services",{
            transform:"translateX(-185%)",
            scrollTrigger:{
                trigger:".servicesection",
                scroller:"body",
                // markers:true,
                start:"top -5%",
                end:"top -100%",
                pin:true,
                scrub:1,
            }
        })
    } else if(querylaptop2.matches){
        gsap.to(".servicesection .services",{
            transform:"translateX(-185%)",
            scrollTrigger:{
                trigger:".servicesection",
                scroller:"body",
                // markers:true,
                start:"top -5%",
                end:"top -100%",
                pin:true,
                scrub:1,
            }
        })
    } else if(querytablet.matches){
        gsap.to(".servicesection .services",{
            transform:"translateX(-195vw)",
            scrollTrigger:{
                trigger:".servicesection",
                scroller:"body",
                // markers:true,
                start:"top 0%",
                end:"top -100%",
                pin:true,
                scrub:1,
            }
        })
    } else if(querymobile1.matches){
        gsap.to(".servicesection .services",{
            transform:"translateX(-200vw)",
            scrollTrigger:{
                trigger:".servicesection",
                scroller:"body",
                // markers:true,
                start:"top 0%",
                end:"top -100%",
                pin:true,
                scrub:1,
            }
        })
    } else if(querymobile2.matches){
        gsap.to(".servicesection .services",{
            transform:"translateX(-210vw)",
            scrollTrigger:{
                trigger:".servicesection",
                scroller:"body",
                // markers:true,
                start:"top 0%",
                end:"top -100%",
                pin:true,
                scrub:1,
            }
        })
    } else{ 
        gsap.to(".servicesection .services",{
            transform:"translateX(-210vw)",
            scrollTrigger:{
                trigger:".servicesection",
                scroller:"body",
                // markers:true,
                start:"top 0%",
                end:"top -100%",
                pin:true,
                scrub:1,
            }
        })
    }
}

horizontalscroll();
//  Section Ended

function reshaorange1(){
    let querylaptop = window.matchMedia("(min-width:1024px)");
    let querytablet = window.matchMedia("(min-width:768px) and (max-width:1024px)");
    let queryother = window.matchMedia("(min-width:0px) and (max-width:768px)");
    
    if(querylaptop.matches){
        gsap.to(".resh1,.reshorange1",{
            height:"15vw",
            duration:1,
            scrollTrigger: {
                trigger: ".resh1",
                scroller: "body",
                // markers:true,
                start: "top 40%",
            },
        })
    } else if(querytablet.matches){
        gsap.to(".resh1,.reshorange1",{
            height:"25vw",
            duration:1,
            scrollTrigger: {
                trigger: ".resh1",
                scroller: "body",
                start: "top 40%",
            },
        })
    } else{
        gsap.to(".resh1,.reshorange1",{
            height:"45vw",
            duration:1,
            scrollTrigger: {
                trigger: ".resh1",
                scroller: "body",
                start: "top 40%",
            },
        })
    }
};
function reshablue1(){
    let querylaptop = window.matchMedia("(min-width:1024px)");
    let querytablet = window.matchMedia("(min-width:768px) and (max-width:1024px)");
    let queryother = window.matchMedia("(min-width:0px) and (max-width:768px)");
    
    if(querylaptop.matches){
        gsap.to(".resh2,.reshblue1",{
            height:"15vw",
            duration:1,
            scrollTrigger: {
                trigger: ".resh2",
                scroller: "body",
                // markers:true,
                start: "top 40%",
            },
        })
    } else if(querytablet.matches){
        gsap.to(".resh2,.reshblue1",{
            height:"25vw",
            duration:1,
            scrollTrigger: {
                trigger: ".resh2",
                scroller: "body",
                start: "top 40%",
            },
        })
    } else{
        gsap.to(".resh2,.reshblue1",{
            height:"45vw",
            duration:1,
            scrollTrigger: {
                trigger: ".resh2",
                scroller: "body",
                start: "top 40%",
            },
        })
    }
};
reshaorange1();
reshablue1();


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

