var crsr=document.querySelector("#cursor");
var blur=document.querySelector("#cursor-blur")
document.addEventListener("mousemove",function(dets){
    crsr.style.left=dets.x+20+"px";
    crsr.style.top=dets.y+20+"px";
    blur.style.left=dets.x - 200+"px";
    blur.style.top=dets.y - 200+"px";
})

var tabs=document.querySelectorAll("nav h4");
tabs.forEach(function(elms){
    elms.addEventListener("mouseenter",function(){
        crsr.style.scale=3;
        crsr.style.border="1px solid white";
        crsr.style.backgroundColor="transparent";
        crsr.style.transition="all linear 0.3s"
    })
})
tabs.forEach(function(elms){
    elms.addEventListener("mouseleave",function(){
        crsr.style.scale=1;
        crsr.style.border="0px solid yellowgreen";
        crsr.style.backgroundColor="yellowgreen";
        crsr.style.transition="all linear 0.3s"
    })
})

gsap.to("nav",{
    backgroundColor: "black",
    duration:0.5,
    height: "120px",
    scrollTrigger:{
        trigger: "nav",
        scroller:"body",
        start:"top -10%",
        end: "top -11%",
        scrub: 1
    }
})
gsap.to("main",{
    backgroundColor: "black",
    scrollTrigger:{
        trigger: "main",
        scroller:"body",
        start:"top -30%",
        end: "top -80%",
        scrub: 2
    }
})
gsap.from("#colon1",{
    y:-70,
    x:-70,
    scrollTrigger:{
        trigger:"#colon1",
        scroller:"body",
        
        start:"top 55%",
        end: "top 45%",
        scrub: 2
    }
})
gsap.from("#colon2",{
    y:70,
    x:70,
    scrollTrigger:{
        trigger:"#colon2",
        scroller:"body",
        
        start:"top 55%",
        end: "top 45%",
        scrub: 4
    }
})
gsap.from(".about img,#aboutUs",{
    y:50,
    opacity:0,
    duration:5,
    stagger:0.4,
    scrollTrigger:{
        trigger:".about",
        scroller:"body",
       // markers:true,
        start:"top 70%",
        end:"top 65%",
        scrub:3
    }
})
gsap.from(".card",{
    scale:0.8,
    opacity:0,
    duration:5,
    stagger:0.4,
    scrollTrigger:{
        trigger:".card",
        scroller:"body",
       // markers:true,
        start:"top 70%",
        end:"top 65%",
        scrub:1
    }
})

gsap.to(".reg",{
    y:-200,
    duration:5,
    stagger:0.4,
    scrollTrigger:{
        trigger:".reg",
        scroller:"body",
       // markers:true,
        start:"top 70%",
        end:"top 65%",
        scrub:2
    }
})
