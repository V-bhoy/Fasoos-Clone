let signupArr= JSON.parse(localStorage.getItem("signupInform")) || [];

let otpNumber = document.querySelector("#OTPnumber");
let div = document.createElement("p");
// div.setAttribute("id","otpDiv");
div.style.marginTop = "0px"
for(let i=0; i<signupArr.length; i++)
{
    div.innerText = signupArr[i].signupPhone;
console.log(div);
}
otpNumber.append(div);
document.querySelector("#form").addEventListener("submit",otpVerification);

function otpVerification(event)
{
    // console.log("hiiiiiiiiiii");
    event.preventDefault();
    otpNumber = signupArr.signupPhone;
    console.log(signupArr.signupPhone);
    let loginOTP = document.querySelector("#loginOTP").value;
    console.log("loginOTP");
    if(loginOTP == "824125")
    {
        window.location.href = "sign-up.html";
    }
    else{
        alert("Wrong OTP");
    }
}