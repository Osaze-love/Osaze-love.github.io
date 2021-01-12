const timeline = gsap.timeline()
timeline.from('.navbar', {
    duration:1, y:'-100%', ease: 'power2' 
})
.from('.main_header', {
    duration:1, opacity:0, y:'-20%', ease: 'power2' 
})
.from('.main_paragraph', {
    duration:1, opacity:0, x:'-20%', ease: 'power2' 
})
.from('.main_btn', {
    duration:1, opacity:0, ease: 'power2' 
})


