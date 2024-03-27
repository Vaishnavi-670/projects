var cursr=document.querySelector("#cursor");
var blur=document.querySelector("#cursor-blur");
 document.addEventListener("mousemove",function (details) {
    cursr.style.left=details.x+20 +"px"
    cursr.style.top=details.y+"px"
    blur.style.left=details.x-150+"px" //yaha pr -150 small cursor aur bade cursor ko ek sath lane ke liye kiya h 
    blur.style.top=details.y-150+"px" //150  ya kch plx  kam krne ke yah dono sath me aa jaege
 })
 var h4all=document.querySelectorAll("#nav h4")
 h4all.forEach(function (elem) {
    elem.addEventListener("mouseenter",function(){
        cursr.style.scale=3
        cursr.style.border="1px solid #fff"
        cursr.style.backgroundColor="transparent"
    })
    elem.addEventListener("mouseleave",function(){
        cursr.style.scale=1
        cursr.style.border="0px solid #95C11E"
        cursr.style.backgroundColor="#95C11E"
    })
})
gsap.to("#nav",{
    backgroundColor: "black",
    duration: 0.5,
    height:"100",
    scrollTrigger: {
        trigger: "#nav", 
        scroller:"body",
        // markers: true,  //for debugging , means iske use se hme pta chal jata h ki animation kaha pr se start hoga
        start:"top -10%",
        end:"top -11%",
        scrub:1, 
    }
})
gsap.to("#main",{
    backgroundColor: "black",
     scrollTrigger: {
        trigger: "#main",
        scroller:"body",
        // markers: true,
        start:"top -25%",
        end:"top -70%",
        scrub:2,  
    }
})
gsap.from("#aboutUs img,#aboutUs-text",{
    y:50,
    opacity:0,
    duration:1,
    //  stagger:0.6,
    scrollTrigger:{
        trigger:"#aboutUs",
        scroller:"body",
        // markers:true,
        start:"top 63%",
        end:"top 45%",
        scrub:3,
    }
})
gsap.from(".card",{
    scale:0.8,
    opacity:0,
    duration:1,
    // stagger:0.1,
    scrollTrigger:{
        trigger:".card",
        scroller:"body",
        // markers:true,
        start:"top 70%",
        end:"top 65%",
        scrub:2,
    }
})
gsap.from("#colon1",{
    y:-70, //yha pr -70 isliye kiya h kyuki yha pr y axis ke upar se aana h
    x:-70, //x axis ke left se aana h
    scrollTrigger:{
        trigger:"#colon1",
        scroller:"body",
        // markers:true,
        start:"top 55%",
        end:"top 45%",
        scrub:4,
    }
})
gsap.from("#colon2",{
    y:70,
    x:70,
    scrollTrigger:{
        trigger:"#colon1",
        scroller:"body",
        // markers:true,
        start:"top 55%",
        end:"top 45%",
        scrub:4,
    }
})
gsap.from("#page4 h1",{
    y:40,
    scrollTrigger:{
        trigger:"#page4 h1",
        scroller:"body",
        //  markers:true,
        start:"top 85%",
        end:"top 75%",
        scrub:2,
    }
})