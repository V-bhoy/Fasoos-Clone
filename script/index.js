document.querySelector("#ipt").addEventListener("submit",function(event){
    event.preventDefault();
    let val=document.querySelector("#locate-inp").value;
    localStorage.setItem("location",val);
    window.location.href="menu.html";
});
