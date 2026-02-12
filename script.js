const toggle=document.getElementById("toggle")
const menu=document.getElementById("menu")

toggle.onclick=()=>menu.classList.toggle("active")

document.querySelectorAll("nav a").forEach(link=>{
link.addEventListener("click",()=>{
menu.classList.remove("active")
})
})

window.addEventListener("scroll",()=>{
document.getElementById("header")
.classList.toggle("scrolled",scrollY>50)

document.getElementById("top").style.display=
scrollY>400?"block":"none"
})

document.getElementById("top").onclick=()=>{
scrollTo({top:0,behavior:"smooth"})
}

const observer=new IntersectionObserver(entries=>{
entries.forEach(e=>{
if(e.isIntersecting) e.target.classList.add("show")
})
})

document.querySelectorAll(".fade")
.forEach(el=>observer.observe(el))

document.querySelectorAll("[data]").forEach(el=>{
let target=+el.getAttribute("data")
let n=0

function update(){
n+=target/60
if(n<target){
el.textContent=Math.floor(n)
requestAnimationFrame(update)
}else el.textContent=target
}
update()
})