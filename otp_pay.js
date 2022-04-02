let h1 = document.getElementById('count');

    function counter(){

        let i = 300;

       let id = setInterval(function(){
            i--
            h1.innerText = i;
            if(i<0){
                clearInterval(id);
                return i
            }
        } , 1000)
    }

    counter()

    var otp = document.querySelector("#hi12").addEventListener('submit',show);
    function show(e){
        event.preventDefault()
        let otp = document.querySelector("#otp").value ;
        //console.log(otp)
        if(otp=="123456"){
            alert("Order Successfully Place");
            localStorage.removeItem("cartItems");
            window.location.href="./menu.html"
        }
        else{
            alert("Plese Enter correct OTP.")
        }
    }
    
  