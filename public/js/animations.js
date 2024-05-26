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