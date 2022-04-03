let closetag=document.querySelector("#close");
let bars=document.querySelector("#bars");
let user=document.querySelector("#username");
let logout=document.querySelector("#lout");
let loop=document.querySelector("#locate>p");
let str=localStorage.getItem("location");
let page=document.querySelector("#main-login");
let page1=document.querySelector("#main");
let sign=document.querySelector("#sign");
let log=document.querySelector("#log");
let naam=localStorage.getItem("user");
loop.innerText=str;


user.addEventListener("click",function(){
    page.style.display="block";
})
sign.addEventListener("click",function(){
    page.style.display="none";
    page1.style.display="block";
})
log.addEventListener("click",function(){
    page1.style.display="none";
    page.style.display="block";
})
if(naam==null){
    user.innerText="Login";
}

// user.addEventListener("click",function(){
//     let res=user.innerText.replace(user.innerText,"vaishu");
//     user.innerText=res;
// })
closetag.addEventListener("click",function(){
    let sidebar= document.querySelector("#sidebar");
    sidebar.style.display="none";
})
bars.addEventListener("click",function(){
    let sidebar= document.querySelector("#sidebar");
    let profile=document.querySelector("#prof");
    let address=document.querySelector("#addr");
    let order=document.querySelector("#orde");
    let payment=document.querySelector("#paym");
    let help=document.querySelector("#help");
    let out=document.querySelector("#lout");
    let ctr=-200;
    let id=setInterval(Animate,0.025);
    function Animate(){
        if(ctr===0){
            clearInterval(id);
        }
        else{
            ctr++;
            if(user.innerText!=="Login"){
                profile.style.display="block";
                address.style.display="block";
                order.style.display="block";
                payment.style.display="block";
                help.style.display="block";
                out.style.display="block";
            }
            sidebar.style.marginRight=ctr+"px";
            sidebar.style.display="block";
            
        }
    }
})
logout.addEventListener("click",function(){
   localStorage.removeItem("user");
    window.location.href="menu.html";
})

//---------------------------

let prof=document.querySelector("#prof");
let orde=document.querySelector("#orde");
let paym=document.querySelector("#paym");
let addr=document.querySelector("#addr");

prof.addEventListener("click",function(){
    window.location.href="./c3 FASSOOS PROJECT/profile.html";
})
orde.addEventListener("click",function(){
    window.location.href="./c3 FASSOOS PROJECT/orders.html";
})
paym.addEventListener("click",function(){
    window.location.href="./c3 FASSOOS PROJECT/payments.html";
})
addr.addEventListener("click",function(){
    window.location.href="./c3 FASSOOS PROJECT/addresses.html";
})


