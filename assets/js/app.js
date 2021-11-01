gsap.registerPlugin(ScrollTrigger);

gsap.to(".home_scroll", {
    y: -500,
    duration: 10,
    scrollTrigger: {
        trigger: ".home_scroll",
        start: "top 60%",
        end: "top 30%",
        markers: false,
        scrub: 1,
        pinSpacing: false, //to add panning
        toggleActions: "play reverse play reverse",
        //properties: onEnter onLeave onEnterBack onLeaveBack
    }
});

gsap.to(".title_about", {
    y: 120,
    duration: 0.5,
    scrollTrigger: {
        trigger: ".anchor1",
        markers: false,
        scrub: false,
        pinSpacing: false, //to add panning
        toggleActions: "play reverse play reverse"
        //properties: onEnter onLeave onEnterBack onLeaveBack
    }
});

gsap.to(".title_services", {
    y: 120,
    duration: 0.5,
    scrollTrigger: {
        trigger: ".anchor2",
        markers: false,
        scrub: false,
        pinSpacing: false, //to add panning
        toggleActions: "play reverse play reverse"
        //properties: onEnter onLeave onEnterBack onLeaveBack
    }
});

gsap.to(".title_portfolio", {
    y: 120,
    duration: 0.5,
    scrollTrigger: {
        trigger: ".anchor3",
        markers: false,
        scrub: false,
        pinSpacing: false, //to add panning
        toggleActions: "play reverse play reverse"
        //properties: onEnter onLeave onEnterBack onLeaveBack
    }
});

gsap.to(".title_skills", {
    y: 120,
    duration: 0.5,
    scrollTrigger: {
        trigger: ".anchor4",
        markers: false,
        scrub: false,
        pinSpacing: false, //to add panning
        toggleActions: "play reverse play reverse"
        //properties: onEnter onLeave onEnterBack onLeaveBack
    }
});

gsap.to(".title_blog", {
    y: 120,
    duration: 0.5,
    scrollTrigger: {
        trigger: ".anchor5",
        markers: false,
        scrub: false,
        pinSpacing: false, //to add panning
        toggleActions: "play reverse play reverse"
        //properties: onEnter onLeave onEnterBack onLeaveBack
    }
});

gsap.to(".title_contact", {
    y: 120,
    duration: 0.5,
    scrollTrigger: {
        trigger: ".anchor6",
        markers: false,
        scrub: false,
        pinSpacing: false, //to add panning
        toggleActions: "play reverse play reverse"
        //properties: onEnter onLeave onEnterBack onLeaveBack
    }
});


////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

//query-mobile
ScrollTrigger.matchMedia({
    "(max-width: 1199px)": function () {
        gsap.to(".title_about", {
            y: 120,
            duration: 0.5,
            scrollTrigger: {
                trigger: ".anchor1",
                markers: false,
                scrub: false,
                pinSpacing: false, //to add panning
                toggleActions: "play reverse play reverse"
                //properties: onEnter onLeave onEnterBack onLeaveBack
            }
        });

        gsap.to(".title_services", {
            y: 120,
            duration: 0.5,
            scrollTrigger: {
                trigger: ".anchor2",
                markers: false,
                scrub: false,
                pinSpacing: false, //to add panning
                toggleActions: "play reverse play reverse"
                //properties: onEnter onLeave onEnterBack onLeaveBack
            }
        });

        gsap.to(".title_portfolio", {
            y: 120,
            duration: 0.5,
            scrollTrigger: {
                trigger: ".anchor3",
                markers: false,
                scrub: false,
                pinSpacing: false, //to add panning
                toggleActions: "play reverse play reverse"
                //properties: onEnter onLeave onEnterBack onLeaveBack
            }
        });

        gsap.to(".title_skills", {
            y: 120,
            duration: 0.5,
            scrollTrigger: {
                trigger: ".anchor4",
                markers: false,
                scrub: false,
                pinSpacing: false, //to add panning
                toggleActions: "play reverse play reverse"
                //properties: onEnter onLeave onEnterBack onLeaveBack
            }
        });

        gsap.to(".title_blog", {
            y: 120,
            duration: 0.5,
            scrollTrigger: {
                trigger: ".anchor5",
                markers: false,
                scrub: false,
                pinSpacing: false, //to add panning
                toggleActions: "play reverse play reverse"
                //properties: onEnter onLeave onEnterBack onLeaveBack
            }
        });

        gsap.to(".title_contact", {
            y: 120,
            duration: 0.5,
            scrollTrigger: {
                trigger: ".anchor6",
                markers: false,
                scrub: false,
                pinSpacing: false, //to add panning
                toggleActions: "play reverse play reverse"
                //properties: onEnter onLeave onEnterBack onLeaveBack
            }
        });
    },
});