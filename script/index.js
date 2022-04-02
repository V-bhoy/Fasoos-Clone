document.querySelector("#ipt").addEventListener("submit",function(event){
    event.preventDefault();
    let val=document.querySelector("#locate-inp").value;
    localStorage.setItem("location",val);
    window.location.href="menu.html";
});
let sign=document.querySelector("#sign");
let log=document.querySelector("#log");
let signup=document.querySelector("#son0102");
let login=document.querySelector("#son0101");
let page1=document.querySelector("#main-login");
let page=document.querySelector("#main");
sign.addEventListener("click",function(){
    page.style.display="block";
})
log.addEventListener("click",function(){
    page1.style.display="block";
})
signup.addEventListener("click",function(){
    page.style.display="block";
})
login.addEventListener("click",function(){
    page1.style.display="block";
})
window.addEventListener("mouseup",function(event){
    if(event.target!=page && event.target.parentNode!=page){
        page.style.display="none";
    }
    if(event.target!=page1 && event.target.parentNode!=page1){
        page1.style.display="none";
    }
})