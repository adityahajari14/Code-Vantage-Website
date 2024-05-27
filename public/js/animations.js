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
                markers:true,
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

herosectionanimation();
descriptiontypeanimation();
horizontalscroll();