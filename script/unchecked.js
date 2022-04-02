

function origData01(){
    let wraps=JSON.parse(localStorage.getItem("wraps"));
    let items=document.querySelector(".items");
    items.innerHTML=null;
    wraps.forEach((elem,index)=>{
        
            let div=document.createElement("div");
            let pic=document.createElement("img");
            pic.src=elem.image;
            let name=document.createElement("div");
            name.style.display="flex";
            name.style.justifyContent="space-between";
            name.style.padding="10px";
            div.class="name";
            let title=document.createElement("h4");
            title.innerText=elem.name;
            title.style.fontSize="16px";
            title.style.paddingRight="80px";
            title.style.lineHeight="1.5";
            let p1=document.createElement("p");
            p1.innerText=`₹${elem.price}`;
            p1.style.fontSize="14px";
            name.append(title,p1);
            let p2=document.createElement("p");
            p2.innerText=elem.glance;
            p2.style.fontSize="12px";
            p2.style.padding="10px";
            p2.style.color="rgb(126,126,126)";
            p2.style.letterSpacing="0.4px";
            p2.style.paddingBottom="0px";
            p2.style.marginBottom="0px";
            let link=document.createElement("a");
            link.addEventListener("click",function(){
                elem.quan=1;
                localStorage.setItem("show",JSON.stringify(elem));
            })
            link.href="details.html";
            link.innerText="Read More";
            let star=document.createElement("div");
            div.class="star";
            star.style.display="flex";
            star.style.justifyContent="space-between";
            star.style.padding="10px";
            star.style.marginTop="10px";
            let div1=document.createElement("div");
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
            p4.innerText=elem.buy+" bought this";
            p4.style.fontSize="10px";
            p4.style.color="rgb(167, 165, 165)";
            p4.style.padding="2px";
            p4.style.letterSpacing="0.8px";
            div1.append(p3,p4);
            let div2=document.createElement("div");
            let btn=document.createElement("button");
            btn.innerText="ADD";
            btn.addEventListener("click",function(){
                empty.style.display="none";
                check.style.display="block";
        
                let cart = JSON.parse(localStorage.getItem("cartItems"))||[];
                elem.quan=1;
                console.log(elem);
                cart.push(elem);
                localStorage.setItem("cartItems",JSON.stringify(cart));
                  
                let cartItems=JSON.parse(localStorage.getItem("cartItems"));
                displayData(cartItems);
                showTotal();
            })
            btn.style.backgroundColor="rgb(252, 216, 58)";
            btn.style.border="1px solid rgb(252,216,58)";
            btn.style.width="100px";
            btn.style.height="28px";
            btn.style.fontSize="14px";
            btn.style.fontWeight="bold";
            btn.style.borderRadius="4px";
            btn.style.boxShadow="rgba(100, 100, 111, 0.2) 0px 7px 29px 0px";
            btn.style.cursor="pointer";
            let p5=document.createElement("p");
            p5.innerText="Customisable";
            p5.style.fontSize="10px";
            p5.style.color="rgb(167, 165, 165)";
            p5.style.padding="5px";
            p5.style.letterSpacing="0.8px";
            p5.style.textAlign="center";
            div2.append(btn,p5);
            star.append(div1,div2);
            div.append(pic,name,p2,link,star);
            
            items.append(div);
        
      
        
    });

}





function origData02(){
    let chef=JSON.parse(localStorage.getItem("chef"));
    let special=document.querySelector("#special");
    special.innerHTML=null;
    chef.forEach((elem,index)=>{
        
            let div=document.createElement("div");
            let pic=document.createElement("img");
            pic.src=elem.image;
            let name=document.createElement("div");
            name.style.display="flex";
            name.style.justifyContent="space-between";
            name.style.padding="10px";
            div.class="name";
            let title=document.createElement("h4");
            title.innerText=elem.name;
            title.style.fontSize="16px";
            title.style.paddingRight="80px";
            title.style.lineHeight="1.5";
            let p1=document.createElement("p");
            p1.innerText=`₹${elem.price}`;
            p1.style.fontSize="14px";
            name.append(title,p1);
            let p2=document.createElement("p");
            p2.innerText=elem.glance;
            p2.style.fontSize="12px";
            p2.style.padding="10px";
            p2.style.color="rgb(126,126,126)";
            p2.style.letterSpacing="0.4px";
            p2.style.paddingBottom="0px";
            p2.style.marginBottom="0px";
            let link=document.createElement("a");
            link.addEventListener("click",function(){
                elem.quan=1;
                localStorage.setItem("show",JSON.stringify(elem));
            })
            link.href="details.html";
            link.innerText="Read More";
            let star=document.createElement("div");
            div.class="star";
            star.style.display="flex";
            star.style.justifyContent="space-between";
            star.style.padding="10px";
            star.style.marginTop="10px";
            let div1=document.createElement("div");
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
            p4.innerText=elem.buy+" bought this";
            p4.style.fontSize="10px";
            p4.style.color="rgb(167, 165, 165)";
            p4.style.padding="2px";
            p4.style.letterSpacing="0.8px";
            div1.append(p3,p4);
            let div2=document.createElement("div");
            let btn=document.createElement("button");
            btn.innerText="ADD";
            btn.addEventListener("click",function(){
                empty.style.display="none";
                check.style.display="block";
        
                let cart = JSON.parse(localStorage.getItem("cartItems"))||[];
                elem.quan=1;
                console.log(elem);
                cart.push(elem);
                localStorage.setItem("cartItems",JSON.stringify(cart));
                  
                let cartItems=JSON.parse(localStorage.getItem("cartItems"));
                displayData(cartItems);
                showTotal();
            })
            btn.style.backgroundColor="rgb(252, 216, 58)";
            btn.style.border="1px solid rgb(252,216,58)";
            btn.style.width="100px";
            btn.style.height="28px";
            btn.style.fontSize="14px";
            btn.style.fontWeight="bold";
            btn.style.borderRadius="4px";
            btn.style.boxShadow="rgba(100, 100, 111, 0.2) 0px 7px 29px 0px";
            btn.style.cursor="pointer";
            let p5=document.createElement("p");
            p5.innerText="Customisable";
            p5.style.fontSize="10px";
            p5.style.color="rgb(167, 165, 165)";
            p5.style.padding="5px";
            p5.style.letterSpacing="0.8px";
            p5.style.textAlign="center";
            div2.append(btn,p5);
            star.append(div1,div2);
            div.append(pic,name,p2,link,star);
            
            special.append(div);
        
      
        
    });

}





function origData03(){
    let roll=JSON.parse(localStorage.getItem("roll"));
    let pocket=document.querySelector("#rolls");
    pocket.innerHTML=null;
    roll.forEach((elem,index)=>{
        
            let div=document.createElement("div");
            let pic=document.createElement("img");
            pic.src=elem.image;
            let name=document.createElement("div");
            name.style.display="flex";
            name.style.justifyContent="space-between";
            name.style.padding="10px";
            div.class="name";
            let title=document.createElement("h4");
            title.innerText=elem.name;
            title.style.fontSize="16px";
            title.style.paddingRight="80px";
            title.style.lineHeight="1.5";
            let p1=document.createElement("p");
            p1.innerText=`₹${elem.price}`;
            p1.style.fontSize="14px";
            name.append(title,p1);
            let p2=document.createElement("p");
            p2.innerText=elem.glance;
            p2.style.fontSize="12px";
            p2.style.padding="10px";
            p2.style.color="rgb(126,126,126)";
            p2.style.letterSpacing="0.4px";
            p2.style.paddingBottom="0px";
            p2.style.marginBottom="0px";
            let link=document.createElement("a");
            link.addEventListener("click",function(){
                elem.quan=1;
                localStorage.setItem("show",JSON.stringify(elem));
            })
            link.href="details.html";
            link.innerText="Read More";
            let star=document.createElement("div");
            div.class="star";
            star.style.display="flex";
            star.style.justifyContent="space-between";
            star.style.padding="10px";
            star.style.marginTop="10px";
            let div1=document.createElement("div");
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
            p4.innerText=elem.buy+" bought this";
            p4.style.fontSize="10px";
            p4.style.color="rgb(167, 165, 165)";
            p4.style.padding="2px";
            p4.style.letterSpacing="0.8px";
            div1.append(p3,p4);
            let div2=document.createElement("div");
            let btn=document.createElement("button");
            btn.innerText="ADD";
            btn.addEventListener("click",function(){
                empty.style.display="none";
                check.style.display="block";
        
                let cart = JSON.parse(localStorage.getItem("cartItems"))||[];
                elem.quan=1;
                console.log(elem);
                cart.push(elem);
                localStorage.setItem("cartItems",JSON.stringify(cart));
                  
                let cartItems=JSON.parse(localStorage.getItem("cartItems"));
                displayData(cartItems);
                showTotal();
            })
            btn.style.backgroundColor="rgb(252, 216, 58)";
            btn.style.border="1px solid rgb(252,216,58)";
            btn.style.width="100px";
            btn.style.height="28px";
            btn.style.fontSize="14px";
            btn.style.fontWeight="bold";
            btn.style.borderRadius="4px";
            btn.style.boxShadow="rgba(100, 100, 111, 0.2) 0px 7px 29px 0px";
            btn.style.cursor="pointer";
            let p5=document.createElement("p");
            p5.innerText="Customisable";
            p5.style.fontSize="10px";
            p5.style.color="rgb(167, 165, 165)";
            p5.style.padding="5px";
            p5.style.letterSpacing="0.8px";
            p5.style.textAlign="center";
            div2.append(btn,p5);
            star.append(div1,div2);
            div.append(pic,name,p2,link,star);
            
            pocket.append(div);
        
      
        
    });

}



function origData04(){
    let rice=JSON.parse(localStorage.getItem("rice"));
    let bowl=document.querySelector("#rice");
    bowl.innerHTML=null;
    rice.forEach((elem,index)=>{
        
            let div=document.createElement("div");
            let pic=document.createElement("img");
            pic.src=elem.image;
            let name=document.createElement("div");
            name.style.display="flex";
            name.style.justifyContent="space-between";
            name.style.padding="10px";
            div.class="name";
            let title=document.createElement("h4");
            title.innerText=elem.name;
            title.style.fontSize="16px";
            title.style.paddingRight="80px";
            title.style.lineHeight="1.5";
            let p1=document.createElement("p");
            p1.innerText=`₹${elem.price}`;
            p1.style.fontSize="14px";
            name.append(title,p1);
            let p2=document.createElement("p");
            p2.innerText=elem.glance;
            p2.style.fontSize="12px";
            p2.style.padding="10px";
            p2.style.color="rgb(126,126,126)";
            p2.style.letterSpacing="0.4px";
            p2.style.paddingBottom="0px";
            p2.style.marginBottom="0px";
            let link=document.createElement("a");
            link.addEventListener("click",function(){
                elem.quan=1;
                localStorage.setItem("show",JSON.stringify(elem));
            })
            link.href="details.html";
            link.innerText="Read More";
            let star=document.createElement("div");
            div.class="star";
            star.style.display="flex";
            star.style.justifyContent="space-between";
            star.style.padding="10px";
            star.style.marginTop="10px";
            let div1=document.createElement("div");
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
            p4.innerText=elem.buy+" bought this";
            p4.style.fontSize="10px";
            p4.style.color="rgb(167, 165, 165)";
            p4.style.padding="2px";
            p4.style.letterSpacing="0.8px";
            div1.append(p3,p4);
            let div2=document.createElement("div");
            let btn=document.createElement("button");
            btn.innerText="ADD";
            btn.addEventListener("click",function(){
                empty.style.display="none";
                check.style.display="block";
        
                let cart = JSON.parse(localStorage.getItem("cartItems"))||[];
                elem.quan=1;
                console.log(elem);
                cart.push(elem);
                localStorage.setItem("cartItems",JSON.stringify(cart));
                  
                let cartItems=JSON.parse(localStorage.getItem("cartItems"));
                displayData(cartItems);
                showTotal();
            })
            btn.style.backgroundColor="rgb(252, 216, 58)";
            btn.style.border="1px solid rgb(252,216,58)";
            btn.style.width="100px";
            btn.style.height="28px";
            btn.style.fontSize="14px";
            btn.style.fontWeight="bold";
            btn.style.borderRadius="4px";
            btn.style.boxShadow="rgba(100, 100, 111, 0.2) 0px 7px 29px 0px";
            btn.style.cursor="pointer";
            let p5=document.createElement("p");
            p5.innerText="Customisable";
            p5.style.fontSize="10px";
            p5.style.color="rgb(167, 165, 165)";
            p5.style.padding="5px";
            p5.style.letterSpacing="0.8px";
            p5.style.textAlign="center";
            div2.append(btn,p5);
            star.append(div1,div2);
            div.append(pic,name,p2,link,star);
            
            bowl.append(div);
        
      
        
    });

}



function origData05(){
    let drink=JSON.parse(localStorage.getItem("drink"));
    let drinks=document.querySelector("#drinks");
    drinks.innerHTML=null;
    drink.forEach((elem,index)=>{
        
            let div=document.createElement("div");
            let pic=document.createElement("img");
            pic.src=elem.image;
            let name=document.createElement("div");
            name.style.display="flex";
            name.style.justifyContent="space-between";
            name.style.padding="10px";
            div.class="name";
            let title=document.createElement("h4");
            title.innerText=elem.name;
            title.style.fontSize="16px";
            title.style.paddingRight="80px";
            title.style.lineHeight="1.5";
            let p1=document.createElement("p");
            p1.innerText=`₹${elem.price}`;
            p1.style.fontSize="14px";
            name.append(title,p1);
            let p2=document.createElement("p");
            p2.innerText=elem.glance;
            p2.style.fontSize="12px";
            p2.style.padding="10px";
            p2.style.color="rgb(126,126,126)";
            p2.style.letterSpacing="0.4px";
            p2.style.paddingBottom="0px";
            p2.style.marginBottom="0px";
            let link=document.createElement("a");
            link.addEventListener("click",function(){
                elem.quan=1;
                localStorage.setItem("show",JSON.stringify(elem));
            })
            link.href="details.html";
            link.innerText="Read More";
            let star=document.createElement("div");
            div.class="star";
            star.style.display="flex";
            star.style.justifyContent="space-between";
            star.style.padding="10px";
            star.style.marginTop="10px";
            let div1=document.createElement("div");
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
            p4.innerText=elem.buy+" bought this";
            p4.style.fontSize="10px";
            p4.style.color="rgb(167, 165, 165)";
            p4.style.padding="2px";
            p4.style.letterSpacing="0.8px";
            div1.append(p3,p4);
            let div2=document.createElement("div");
            let btn=document.createElement("button");
            btn.innerText="ADD";
            btn.addEventListener("click",function(){
                empty.style.display="none";
                check.style.display="block";
        
                let cart = JSON.parse(localStorage.getItem("cartItems"))||[];
                elem.quan=1;
                console.log(elem);
                cart.push(elem);
                localStorage.setItem("cartItems",JSON.stringify(cart));
                  
                let cartItems=JSON.parse(localStorage.getItem("cartItems"));
                displayData(cartItems);
                showTotal();
            })
            btn.style.backgroundColor="rgb(252, 216, 58)";
            btn.style.border="1px solid rgb(252,216,58)";
            btn.style.width="100px";
            btn.style.height="28px";
            btn.style.fontSize="14px";
            btn.style.fontWeight="bold";
            btn.style.borderRadius="4px";
            btn.style.boxShadow="rgba(100, 100, 111, 0.2) 0px 7px 29px 0px";
            btn.style.cursor="pointer";
            let p5=document.createElement("p");
            p5.innerText="Customisable";
            p5.style.fontSize="10px";
            p5.style.color="rgb(167, 165, 165)";
            p5.style.padding="5px";
            p5.style.letterSpacing="0.8px";
            p5.style.textAlign="center";
            div2.append(btn,p5);
            star.append(div1,div2);
            div.append(pic,name,p2,link,star);
            
            drinks.append(div);
        
      
        
    });

}



function origData06(){
    let cake=JSON.parse(localStorage.getItem("cake"));
    let dessert=document.querySelector("#desserts");
    dessert.innerHTML=null;
    cake.forEach((elem,index)=>{
            let div=document.createElement("div");
            let pic=document.createElement("img");
            pic.src=elem.image;
            let name=document.createElement("div");
            name.style.display="flex";
            name.style.justifyContent="space-between";
            name.style.padding="10px";
            div.class="name";
            let title=document.createElement("h4");
            title.innerText=elem.name;
            title.style.fontSize="16px";
            title.style.paddingRight="80px";
            title.style.lineHeight="1.5";
            let p1=document.createElement("p");
            p1.innerText=`₹${elem.price}`;
            p1.style.fontSize="14px";
            name.append(title,p1);
            let p2=document.createElement("p");
            p2.innerText=elem.glance;
            p2.style.fontSize="12px";
            p2.style.padding="10px";
            p2.style.color="rgb(126,126,126)";
            p2.style.letterSpacing="0.4px";
            p2.style.paddingBottom="0px";
            p2.style.marginBottom="0px";
            let link=document.createElement("a");
            link.addEventListener("click",function(){
                elem.quan=1;
                localStorage.setItem("show",JSON.stringify(elem));
            })
            link.href="details.html";
            link.innerText="Read More";
            let star=document.createElement("div");
            div.class="star";
            star.style.display="flex";
            star.style.justifyContent="space-between";
            star.style.padding="10px";
            star.style.marginTop="10px";
            let div1=document.createElement("div");
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
            p4.innerText=elem.buy+" bought this";
            p4.style.fontSize="10px";
            p4.style.color="rgb(167, 165, 165)";
            p4.style.padding="2px";
            p4.style.letterSpacing="0.8px";
            div1.append(p3,p4);
            let div2=document.createElement("div");
            let btn=document.createElement("button");
            btn.innerText="ADD";
            btn.addEventListener("click",function(){
                empty.style.display="none";
                check.style.display="block";
        
                let cart = JSON.parse(localStorage.getItem("cartItems"))||[];
                elem.quan=1;
                console.log(elem);
                cart.push(elem);
                localStorage.setItem("cartItems",JSON.stringify(cart));
                  
                let cartItems=JSON.parse(localStorage.getItem("cartItems"));
                displayData(cartItems);
                showTotal();
            })
            btn.style.backgroundColor="rgb(252, 216, 58)";
            btn.style.border="1px solid rgb(252,216,58)";
            btn.style.width="100px";
            btn.style.height="28px";
            btn.style.fontSize="14px";
            btn.style.fontWeight="bold";
            btn.style.borderRadius="4px";
            btn.style.boxShadow="rgba(100, 100, 111, 0.2) 0px 7px 29px 0px";
            btn.style.cursor="pointer";
            let p5=document.createElement("p");
            p5.innerText="Customisable";
            p5.style.fontSize="10px";
            p5.style.color="rgb(167, 165, 165)";
            p5.style.padding="5px";
            p5.style.letterSpacing="0.8px";
            p5.style.textAlign="center";
            div2.append(btn,p5);
            star.append(div1,div2);
            div.append(pic,name,p2,link,star);
            
            dessert.append(div);
        
      
        
    });

}




export {origData01,origData02,origData03,origData04,origData05,origData06};