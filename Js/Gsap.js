gsap.registerPlugin(ScrollTrigger);

const tl = gsap.timeline({
    scrollTrigger: {
        trigger: '.ball1',
        markers: true,
        start: 'top 60%',
        end: 'top 20%',
        scrub: 2
    }
});

tl.to('.ball1', {x: 400,duration: 2})

  