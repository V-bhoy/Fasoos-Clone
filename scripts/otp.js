let main_otp=document.querySelector("#main-otp");
let otpNumber = document.querySelector("#OTPnumber");
let n=document.querySelector("#username");
let user_n=JSON.parse(localStorage.getItem("user"));
let phon=localStorage.getItem("phone");
otpNumber.innerText=phon;
let otpform=document.querySelector("#otpform");
console.log(otpform);

otpform.addEventListener("submit",function(event){
    event.preventDefault();
  
    let loginOTP = document.querySelector("#loginOTP").value;
    console.log("loginOTP");
    if(loginOTP == "824125")
    {
        main_otp.style.display="none";
        let res=n.innerText.replace(n.innerText,`Hi Vaishali`);
        n.innerText=res;
        alert("Logged in successfully!");
    }
    else{
        n.innerText="Login";
        alert("Wrong OTP");
    }
});

