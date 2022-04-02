let closetag=document.querySelector("#close");
let bars=document.querySelector("#bars");
let user=document.querySelector("#username");
let logout=document.querySelector("#lout");
let loop=document.querySelector("#locate>p");
let str=localStorage.getItem("location");
loop.innerText=str;
user.addEventListener("click",function(){
    let res=user.innerText.replace(user.innerText,"vaishu");
    user.innerText=res;
})
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
   window.location.href="menu.html";
})