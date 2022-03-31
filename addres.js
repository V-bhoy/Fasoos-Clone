document.querySelector("#form").addEventListener("submit",save);

//saveArr = JSON.parse(localStorage.getItem('addres'))||[];
let addres = JSON.parse(localStorage.getItem('addres'))||{}

function save(event){
    event.preventDefault()

    var home = document.querySelector("#home").value ;
    var land = document.querySelector("#land").value ;

    var obj = {
        home :home,
        land :land,
    }
    //saveArr.push(obj);
    //localStorage.setItem("addres",JSON.stringify(saveArr))
    localStorage.setItem('addres',JSON.stringify(obj))

    showdata(addres)
}

function showdata(addres){
    let add_d = document.getElementById("add_d")
    add_d.innerHTML = null;
    // <div id="first">
    //                 <div>
    //                     <img src="https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcQDuxgfQ_ZN_ffKjSKcBq5S8Onb-hwuUGfsW2GUAmWRvZWrz8vS" alt="" height="100%" width="100%"/>
    //                 </div>
    //                 <div>
    //                     <h2 >Logged in</h2>
    //                 </div>
    // </div>
    let first = document.createElement('div')
    first.setAttribute('id',"first")
    let div1 = document.createElement('div')
    let img = document.createElement('img')
    img.src = "https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcQDuxgfQ_ZN_ffKjSKcBq5S8Onb-hwuUGfsW2GUAmWRvZWrz8vS";
    img.setAttribute('height',"50%")
    img.setAttribute('width',"90%")
    div1.append(img)
    let div2 = document.createElement('div')
    let h1 = document.createElement('h1')
    h1.innerText="Delivery Address";
    let div_margin = document.createElement('div')
    div_margin.setAttribute('id','div_margin')
    let home = document.createElement('h3')
    home.innerText="Home"

    let home1 = document.createElement('h4')
    home1.innerText=addres.home;

    let land = document.createElement('h4')
    land.innerText=addres.land;
    div_margin.append(home,home1,land)



    div2.append(h1)
    first.append(div1,div2)
    add_d.append(first ,div_margin)
}