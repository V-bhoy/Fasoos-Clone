function setadd(){
    document.getElementById("myForm").style.display = "block";
}
function closeForm() {
    document.getElementById("myForm").style.display = "none";
  }

// function credit(){
//     let show = document.getElementById("option")
//     show.innerHTML=null;

//     let first1 = document.createComment("div")
//     let div = document.createComment("div")
//     let p = document.createComment("p")
//     p.innerHTML="We_Accept"
//     div.append("p")
//     let div1 = document.createComment("div")
//     let img = document.createComment("img")
//     img.src = "https://www.faasos.com/images/group-card.svg";
//     div1.append(img)
//     first1.append(div,div1)
//     show.append(first1)
// }

function card_detailes(){
    let show = document.getElementById("option")
    //show.setAttribute("id","form")
    show.innerHTML=null;

    let div1 = document.createElement('div')
    let h1 = document.createElement('h4')
    //h1.innerText="< Back"
    let form1 = document.createElement("form")
    form1.setAttribute("id","form")
    let card_num = document.createElement('input')
    card_num.setAttribute("type","text")
    card_num.setAttribute("placeholder","Card Number")
    card_num.setAttribute("id","card_n")

    let name = document.createElement('input')
    name.setAttribute("type","text")
    name.setAttribute("placeholder","Name")
    name.setAttribute("id","name")

    let join = document.createElement('div')
    join.setAttribute("class","join")

    let month = document.createElement('input')
    month.setAttribute("value","2018-05")
    month.setAttribute('type','month')
    month.setAttribute('id','month')

    let cvv = document.createElement('input')
    cvv.setAttribute("type","text")
    cvv.setAttribute("placeholder","cvv")
    cvv.setAttribute("id","cvv")

    join.append(month,cvv)

    // let btn = document.createElement('button')
    // btn.setAttribute("onclick","pay()")
    // btn.innerHTML="pay"
    // btn.setAttribute("value","submit")
    // btn.setAttribute("id","pay")
    let btn = document.createElement('input')
    btn.setAttribute("type","submit")
    btn.setAttribute('value',"pay")
   
    
    

    form1.append(card_num,name,join,btn)
    div1.append(h1,form1)
    show.append(div1)
    
}
document.querySelector("#option").addEventListener("submit",pay);
//var arr = []
    function pay(event){
        //console.log("hi")
        event.preventDefault()
        let card = document.querySelector("#card_n").value ;
        let name = document.querySelector("#name").value ;
        let month = document.querySelector("#month").value ;
        let cvv = document.querySelector("#cvv").value ;
        var obj = {
            card : card,
            name : name,
            month:month,
            cvv: cvv,

        }
        console.log(obj)

        if(card.length==16 & cvv.length==3 ){
            alert("OTP SEND SUCCESSFULY.")
            window.location.href = "otp_pay.html"
            //console.log("yes")
        }
        else{
            alert("Some error occurred. Please retry.")
            //console.log("no")
        }

}
