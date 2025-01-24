var naruto = document.querySelector("#naruto")
var susuke = document.querySelector("#sasuke")
var chidori = document.querySelector("#chidori")
var rasengan = document.querySelector("#rasengan")
var h1 = document.querySelector("#h1")

var backgroundmusic = new Audio("music/background2.mp3")
var uchihasasuk = new Audio("music/u.mp3")
var dattebayo = new Audio("music/dattebayo.mp3")
var chidorisound = new Audio("music/chidorisound.mp3")
var rasengansound = new Audio("music/rasengan.mp3")
rasengansound.volume = 1

// ---------------jump----------------
window.onkeydown = function(e){
    keycode = e.keyCode
    if(keycode == 38) {
        naruto.classList.add("animatenaruto")
        backgroundmusic.play()
        setTimeout(()=>{
            naruto.classList.remove("animatenaruto")    
        },800)
    }
    else if(keycode == 39) {
        narutoX = parseInt(window.getComputedStyle(naruto, null).getPropertyValue("left"))
        naruto.style.left = narutoX + 100 + "px"
        naruto.style.transform = "scaleX(1)"
    }
    else if(keycode == 37) {
        narutoX = parseInt(window.getComputedStyle(naruto, null).getPropertyValue("left"))
        naruto.style.left = narutoX - 100 + "px"
        naruto.style.transform = "scaleX(-1)"
    }
    else if(keycode == 67) {
        chidorisound.play()
        chidori.classList.add("animatechidori")
        setTimeout(() => {
            chidori.classList.remove("animatechidori")
        }, 3000);
    }
    else if(keycode == 82) {
        rasengansound.play()
        rasengan.classList.add("animaterasengan")
        setTimeout(() => {
            rasengan.classList.remove("animaterasengan")
        }, 3000);
    }
}
setInterval(() => {
    nx = parseInt(window.getComputedStyle(naruto , null).getPropertyValue("left"))
    ny = parseInt(window.getComputedStyle(naruto , null).getPropertyValue("top"))

    sx= parseInt(window.getComputedStyle(susuke , null).getPropertyValue("left"))
    sy = parseInt(window.getComputedStyle(susuke , null).getPropertyValue("top"))

    offsetX = Math.abs(nx - sx)
    offsetY = Math.abs(ny - sy)
    if(offsetX < 145 && offsetY < 70){
        sasuke.classList.remove("animatesasuke")
        naruto.style.left = "10vw"
        h1.style.opacity = 1
        backgroundmusic.pause()
    }
    else {
        newanimation = parseFloat(window.getComputedStyle(sasuke,null).getPropertyValue("animation-duration"))
        newanimation = newanimation - 0.1;
        if(newanimation <= "2s"){
            newanimation = 2 + "s"
        }
    }
}, 100);




































// ----------------voice-------------------
susuke.addEventListener("mouseenter",function(){
    uchihasasuk.play()
})
naruto.addEventListener("mouseenter",function(){
    dattebayo.play()
})

