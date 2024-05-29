// sidebar
gsap.from(".sidebar",{
    x:-80,
    duration:1.5,
    scrollTrigger:{
        trigger:"main",
        scroller:"body",
    }
})

// Cursor animation 
function cursoranimation (){
    let custom = document.querySelector(".cursor");
let stroke = document.querySelector(".cursorstroke");
let main = document.querySelector("body");
main.addEventListener("mousemove",function(dets){
    gsap.to(custom,{
        x:dets.x,
        y:dets.y,
        duration:0.3,
    },)
});
main.addEventListener("mousemove",function(dets){
    gsap.to(stroke,{
        x:dets.x-10,
        y:dets.y-10,
        duration:0.7,
    },)
});
};
cursoranimation();



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
        typeSpeed : 30,
        startDelay:5000,
    })
}
herosectionanimation();
descriptiontypeanimation();
// Hero Section Ended



// About section
function aboutsectionanimation(){
    gsap.from(".about",{
        y:200,
        duration:1,
        opacity:0,
        scrollTrigger:{
            trigger:".about",
            scroller:"body",
            start:"top 60%",
            // onEnter: abouttype,
            // markers:true,
        }
    })
    gsap.from(".about-div",{
        scrollTrigger:{
            trigger:".about-div",
            scroller:"body",
            start:"top 100%",
            onEnter: abouttype,
            // markers:true,
        }
    })
    
    const myabout = `<ol>
    <li> We create <span class="about-light-blue">visually unique</span> websites with intuitive <span class="about-light-blue">user interfaces</span> to ensure a memorable user experience.</li>
    <li>Our websites are built to load <span class="about-purple">quickly</span> and run <span class="about-purple">efficiently</span>, providing a seamless browsing experience.</li>
    <li>We prioritize <span class="about-yellow">SEO</span> to enhance your website's visibility and <span class="about-yellow">ranking</span> on search engines, driving more organic traffic.</li>
    <li>We deliver exceptional results and a <span class="about-orange">professional</span> process, offering more <span class="about-orange">value</span> than we charge.</li>
    </ol>`;
    
    function abouttype(){
        let typed = new Typed(".about-description",{
            strings : [myabout],
            typeSpeed : 2,
            startDelay:0,
            showCursor: true
        })
    }
};
aboutsectionanimation();



// Services Section Started
let tl3 = gsap.timeline({
    scrollTrigger: {
        trigger: ".servicesection",
        scroller: "body",
        start: "top 60%",
    }
});

tl3.from(".services-titlemain", {
    scale: 0,
    opacity: 0,
    duration: 0.5,
});

tl3.from(".services-curlytitle1", {
    x: -150,
    opacity: 0,
    rotate: 180,
    duration: 0.5,
}, "curl");

tl3.from(".services-curlytitle2", {
    x: 150,
    opacity: 0,
    rotate: 180,
    duration: 0.5,
}, "curl");

function horizontalscroll(){
    let querylaptop= window.matchMedia("(min-width:768px)");
    
    if(querylaptop.matches){
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
    }
    
}
gsap.from(".services",{
    opacity:0,
    duration:0.5,
    opacity:0,
    scrollTrigger:{
        trigger:".services",
        scroller:"body",
        start:"top 50%",
        // markers:true,
    }
})

horizontalscroll();
// Services Section Ended



// Resh animation 
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
function reshaorange2(){
    let querylaptop = window.matchMedia("(min-width:1024px)");
    let querytablet = window.matchMedia("(min-width:768px) and (max-width:1024px)");
    let queryother = window.matchMedia("(min-width:0px) and (max-width:768px)");
    
    if(querylaptop.matches){
        gsap.to(".resh3,.reshorange2",{
            height:"15vw",
            duration:1,
            scrollTrigger: {
                trigger: ".resh3",
                scroller: "body",
                // markers:true,
                start: "top 40%",
            },
        })
    } else if(querytablet.matches){
        gsap.to(".resh3,.reshorange2",{
            height:"25vw",
            duration:1,
            scrollTrigger: {
                trigger: ".resh3",
                scroller: "body",
                start: "top 40%",
            },
        })
    } else{
        gsap.to(".resh3,.reshorange2",{
            height:"45vw",
            duration:1,
            scrollTrigger: {
                trigger: ".resh3",
                scroller: "body",
                start: "top 40%",
            },
        })
    }
};
reshaorange1();
reshablue1();
reshaorange2();



// Portfolio Section Started
let tl2 = gsap.timeline({
    scrollTrigger: {
        trigger: ".portfolio",
        scroller: "body",
        start: "top 60%"
    }
});

tl2.from(".portfolio-titlemain", {
    scale: 0,
    opacity: 0,
    duration: 0.5,
});

tl2.from(".portfolio-curlytitle1", {
    x: -150,
    opacity: 0,
    rotate: 180,
    duration: 0.5,
}, "curl");

tl2.from(".portfolio-curlytitle2", {
    x: 150,
    opacity: 0,
    rotate: 180,
    duration: 0.5,
}, "curl");

tl2.from(".swiper", {
    scale: 0,
    opacity: 0,
    duration: 0.5,
});


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
// Portfolio Section Ended

// Process Section Started

let tl4 = gsap.timeline({
    scrollTrigger: {
        trigger: ".process",
        scroller: "body",
        start: "top 60%"
    }
});

tl4.from(".process-titlemain", {
    scale: 0,
    opacity: 0,
    duration: 0.5,
});

tl4.from(".process-curlytitle1", {
    x: -150,
    opacity: 0,
    rotate: 180,
    duration: 0.5,
}, "curl");

tl4.from(".process-curlytitle2", {
    x: 150,
    opacity: 0,
    rotate: 180,
    duration: 0.5,
}, "curl");

gsap.from(".timeline-progress-bar", {
    opacity: 0,
    height: "0%",
    scrollTrigger: {
        trigger: ".process-timeline",
        scroller: "body",
        start: "top 52%",
        end: "top 51%",
        scrub: 1,
    }
})



gsap.from(".ti-1", {
    opacity: 0.4,
    duration: 1,
    scrollTrigger: {
        trigger: ".timeline-trigger-1",
        scroller: "body",
        start: "top 50%",
        end: "bottom 51%",
        scrub:1
    }
})
gsap.from(".ti-2", {
    opacity: 0.4,
    duration: 1,
    scrollTrigger: {
        trigger: ".timeline-trigger-2",
        scroller: "body",
        start: "top 50%",
        end: "bottom 51%",
        scrub:1
    }
})
gsap.from(".ti-3", {
    opacity: 0.4,
    duration: 1,
    scrollTrigger: {
        trigger: ".timeline-trigger-3",
        scroller: "body",
        start: "top 50%",
        end: "bottom 51%",
        scrub:1
    }
})
gsap.from(".ti-4", {
    opacity: 0.4,
    duration: 1,
    scrollTrigger: {
        trigger: ".timeline-trigger-4",
        scroller: "body",
        start: "top 50%",
        end: "bottom 51%",
        scrub:1
    }
})
