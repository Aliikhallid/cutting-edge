const lenis = new Lenis({
    duration: 1.2,
    easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t))
});

function raf(time) {
    lenis.raf(time);
    ScrollTrigger.update();
    requestAnimationFrame(raf);
}

requestAnimationFrame(raf);

const section_1 = document.getElementById("vertical");
const col_left = document.querySelector(".col_left");
const timeln = gsap.timeline({ paused: true });

timeln.fromTo(col_left, {y: 0}, {y: '170vh', duration: 1, ease: 'none'}, 0);

const scroll_1 = ScrollTrigger.create({
    animation: timeln,
    trigger: section_1,
    start: 'top top',
    end: 'bottom center',
    scrub: true
});
const section_2 = document.getElementById("horizontal");
let box_items = gsap.utils.toArray(".horizontal__item");

gsap.to(box_items, {
  xPercent: -100 * (box_items.length - 1),
  ease: "sine.out",
  scrollTrigger: {
    trigger: section_2,
    pin: true,
    scrub: 3,
    snap: 1 / (box_items.length - 1),
    end: "+=" + section_2.offsetWidth
  }
});
const { innerHeight } = window;

// zoom-out
gsap.from("#zoom-out h2", {
    scale: 50, stagger: 0.25, duration: 3,
    scrollTrigger: {
        trigger: "#zoom-out",
        pin: true,
        end: `+=${innerHeight * 1.3}`,
        scrub: 3
    }
});

// zoom-in
gsap.fromTo("#zoom-in h2",{}, {opacity: 1,
    scale: 1000, stagger: 0.25, duration: 3,ease: "sine.in",
    scrollTrigger: {
        trigger: "#zoom-in",
        pin: true,
        end: `+=${innerHeight * 1.3}`,
        scrub: 3
    }
});
gsap.from('.nav', {opacity: 0,y: -100});
gsap.from('#logo', {opacity: 0,y: -100, delay: .2});
gsap.from('#v1', {opacity: 0,x: 400, delay: .4});
gsap.from('.nav-items', {opacity: 0,y: -100, delay: .4});
gsap.from('.vertical__heading', {opacity: 0,x: -800});


gsap.from('#v2', {scrollTrigger: {
  trigger: '#v2',
  start: 'top 80%',
  toggleActions: "play none none reverse",
},
duration: 1,
opacity: 0,
x: 400,
});
gsap.from('#v3', {scrollTrigger: {
  trigger: '#v3',
  start: 'top 80%',
  toggleActions: "play none none reverse",
},
duration: 1,
opacity: 0,
x: 400,
});
gsap.from('#v4', {scrollTrigger: {
  trigger: '#v4',
  start: 'top 80%',
  toggleActions: "play none none reverse",
},
duration: 1,
opacity: 0,
x: 400,
});
gsap.from('#smart', {scrollTrigger: {
  trigger: '#smart',
  start: 'top 100%',
  toggleActions: "play none none reverse",
},
duration: 1,
opacity: 0,
y: 400,
});
gsap.from('#d', {scrollTrigger: {
  trigger: '#d',
  start: 'top 110%',
  toggleActions: "play none none reverse",
},
duration: 1,
opacity: 0,
y: 400,
});
gsap.from('#d1', {scrollTrigger: {
  trigger: '#d',
  start: 'top 110%',
  toggleActions: "play none none reverse",
},
delay: .2,
duration: 1,
opacity: 0,
y: 400,
});
gsap.from('#d2', {scrollTrigger: {
  trigger: '#d',
  start: 'top 110%',
  toggleActions: "play none none reverse",
},
delay: .4,
duration: 1,
opacity: 0,
y: 400,
});
gsap.from('#d3', {scrollTrigger: {
  trigger: '#d',
  start: 'top 110%',
  toggleActions: "play none none reverse",
},
delay: .6,
duration: 1,
opacity: 0,
y: 400,
});
gsap.from('#d4', {scrollTrigger: {
  trigger: '#d',
  start: 'top 110%',
  toggleActions: "play none none reverse",
},
delay: .8,
duration: 1,
opacity: 0,
y: 400,
});
gsap.from('.srv2', {scrollTrigger: {
  trigger: '#d',
  start: 'top 110%',
  toggleActions: "play none none reverse",
},
duration: 1,
opacity: 0,
y: 400,
});
gsap.from('.srv3', {scrollTrigger: {
  trigger: '#d',
  start: 'top 110%',
  toggleActions: "play none none reverse",
},
duration: 1,
opacity: 0,
y: 400,
});
gsap.from('.deer', {scrollTrigger: {
  trigger: '.deer',
  start: 'top 150%',
  toggleActions: "play none none reverse",
},
duration: 1,
height: 50,
width: 50,
opacity: 0,
y: 400,
});
gsap.from('.box', {scrollTrigger: {
  trigger: '.box',
  start: 'top 150%',
  toggleActions: "play none none reverse",
},
duration: 1,
height: 50,
width: 50,
opacity: 0,
y: 400,
});
gsap.from('.box2', {scrollTrigger: {
  trigger: '.box2',
  start: 'top 150%',
  toggleActions: "play none none reverse",
},
duration: 1,
height: 50,
width: 50,
opacity: 0,
y: 400,
});
gsap.from('.right-sl', {scrollTrigger: {
  trigger: '.right-sl',
  start: 'top 70%',
  toggleActions: "play none none reverse",
},
duration: 1,
opacity: 0,
x: -200,
});
gsap.from('.right-sl2', {scrollTrigger: {
  trigger: '.right-sl2',
  start: 'top 70%',
  toggleActions: "play none none reverse",
},
duration: 1,
opacity: 0,
x: -200,
});
gsap.registerPlugin(ScrollTrigger, ScrollToPlugin);