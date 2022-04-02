let cont=document.querySelector("#container");
let element=JSON.parse(localStorage.getItem("show"));
console.log(element);
detail(element);
function detail(elem){
     cont.innerHTML=null;

     let a1=document.createElement("a");
     a1.innerText="Home /"
     a1.style.color="rgb(153, 153, 153)"
     a1.style.fontSize="12px";
     a1.style.cursor="pointer";
     a1.style.textDecoration="none";
     a1.href="menu.html";

     let a2=document.createElement("a");
     a2.style.color="rgb(153,153,153)"
     a2.style.fontSize="12px";
     a2.style.cursor="pointer";
     a2.href="menu.html";
     a2.style.textDecoration="none";
     a2.innerText=" Collections / "

     let p1=document.createElement("p");
     p1.id="detail-para";
     p1.innerText=elem.name;

     let div1=document.createElement("div");
     div1.id="menu-detail";

     let div2=document.createElement("div");
     div2.id="menu-image";

     let pic=document.createElement("img");
     pic.src=elem.image;
     pic.style.width="100%";
     pic.style.height="100%";
     div2.append(pic);

     div1.append(div2);

     let div3=document.createElement("div");
     div3.id="describe";

     let div4=document.createElement("div")
     div4.id="glory";

     let b1=document.createElement("div");
     b1.style.width="100%"
     b1.style.height="50%"
     b1.style.display="flex";
     b1.style.justifyContent="space-between";
     b1.style.alignItems="center";
     b1.style.padding="20px";
     div4.append(b1);

     let name=document.createElement("h4");
     name.innerText=elem.name;
     name.style.fontSize="22px"
     b1.append(name);

     let price=document.createElement("p");
     price.innerText=`₹ ${(elem.price*elem.quan)}`;
     price.style.fontSize="14px";
     price.style.color="rgb(126,126,126)"
     b1.append(price);

     let b2=document.createElement("div");
     b2.style.width="100%"
     b2.style.height="50%"
     b2.style.display="flex";
     b2.style.justifyContent="space-between";
     b2.style.alignItems="center";
     b2.style.padding="20px";
     b2.style.backgroundColor="rgba(218, 216, 216,0.2)"

     let d1=document.createElement("div");
     let p3=document.createElement("p");
     p3.innerText=`⭐ ${elem.rating}`;
     p3.style.backgroundColor="rgb(24, 170, 24)";
     p3.style.marginRight="60px";
     p3.style.padding="2px 5px";
     p3.style.paddingRight="7px";
     p3.style.fontSize="12px";
     p3.style.fontWeight="bold";
     p3.style.color="white";
     p3.style.borderRadius="3px";
     let p4=document.createElement("p4");
     p4.innerText="0.2k"+" bought this";
     p4.style.fontSize="10px";
     p4.style.color="rgb(167, 165, 165)";
     p4.style.padding="2px";
     p4.style.letterSpacing="0.8px";
     d1.append(p3,p4);
     b2.append(d1);

     let d2=document.createElement("div");
     let quan=document.createElement("div");
     let btn1=document.createElement("button")
     btn1.innerText="-";
     btn1.style.transform="skewY(-10deg)";
     btn1.style.cursor="pointer";
     btn1.addEventListener("click",function(){
         decreaseQuant(elem);
             
     
         
     })
     let quantity=document.createElement("span");
     quantity.id="quantity";
     quantity.innerText=elem.quan;
     let btn2=document.createElement("button")
     btn2.style.transform="skewY(10deg)";
     btn2.style.cursor="pointer";
     btn2.innerText="+";
     btn2.addEventListener("click",function(){
         increaseQuant(elem);
      
     })
     quan.id="quan";
     quan.append(btn1,quantity,btn2); 

     let p5=document.createElement("p");
    p5.innerText="Customisable";
    p5.style.fontSize="10px";
    p5.style.color="rgb(167, 165, 165)";
    p5.style.padding="5px";
    p5.style.letterSpacing="0.8px";
    p5.style.textAlign="center";

     d2.append(quan,p5);
     b2.append(d2);

     div4.append(b2);

     let div5=document.createElement("div");
     div5.id="descrip";
     div5.innerText=elem.description;


     let div6=document.createElement("div");
     div6.id="tags-detail";
     let heading=document.createElement("h3");
     heading.innerText="Tags";
     heading.style.fontWeight="500";
     heading.style.marginBottom="15px";
     let par1=document.createElement("p");
     par1.innerText=elem.type[0];
     par1.style.display="inline";
     par1.style.color="rgb(112, 85, 0)";
     par1.style.backgroundColor="rgb(255, 247, 222)";
     par1.style.textAlign="center";
     par1.style.borderRadius="13px";
     par1.style.padding="8px";
     par1.style.margin="0px 10px"
     let par2=document.createElement("p");
     par2.innerText=elem.type[1];
     par2.style.display="inline";
     par2.style.color="rgb(112, 85, 0)";
     par2.style.backgroundColor="rgb(255, 247, 222)";
     par2.style.textAlign="center";
     par2.style.borderRadius="13px";
     par2.style.padding="8px";
     par2.style.margin="0px 10px"
     div6.append(heading,par1,par2);

     div3.append(div4,div5,div6)
     div1.append(div3)


     let btn=document.createElement("button");
     btn.innerText="PROCEED TO CHECKOUT";
     btn.id="break";
     btn.style.display="block";
     btn.style.backgroundColor="rgb(252, 216, 58)";
     btn.style.border="1px solid rgb(252,216,58)";
     btn.style.width="18%";
     btn.style.margin="auto";
     btn.style.height="40px";
     btn.style.fontSize="14px";
     btn.style.fontWeight="bold";
     btn.style.borderRadius="4px";
     btn.style.boxShadow="rgba(100, 100, 111, 0.2) 0px 7px 29px 0px";
     btn.style.cursor="pointer";
    if(window.matchMedia("(max-width:441px)").matches){
        a1.style.paddingLeft="5px";
        btn.style.fontSize="10px";
        btn.style.width="50%"
        btn.style.padding="10px"
        btn.style.marginTop="10px"
    }
     cont.append(a1,a2,p1,div1,btn)
}
function decreaseQuant(elem) {
    elem.quan--;
    if(elem.quan<0){
        elem.quan=0;
    }
    localStorage.setItem("show", JSON.stringify(elem));
    
    detail(elem); // this will show data when we move from men to cart//
  }

  function increaseQuant(elem) {
    elem.quan++;
    localStorage.setItem("show", JSON.stringify(elem));
    detail(elem); // this will show data when we move from men to cart/
  }