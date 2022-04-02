// document.querySelector("#form").addEventListener("submit", signUpData);
document.querySelector("#form").addEventListener("submit",(e)=>{
    signUpData(e);
}) 
let signupArr= JSON.parse(localStorage.getItem("signupInform")) || [];
// console.log("1");

function signUpData (event){
    console.log("1");
    event.preventDefault();
    console.log("2");

    // let signUpCountryCode = document.querySelector("#signupCountries").value;
    let signUpCountry = document.querySelector("#signupCountries").value;
    let signUpPhone = document.querySelector("#signupPhone").value;
    let signUpName = document.querySelector("#signupName").value;
    let signUpEmail = document.querySelector("#signupEmail").value;
    console.log(signUpCountry);
    let signUpObj = {
        // signupCountriescode : signUpCountryCode,
        signupCountry : signUpCountry,
        signupPhone : signUpPhone,
        signupEmail : signUpEmail,
        signupName : signUpName
    };
   
    signupArr.push(signUpObj);
    console.log(signupArr)
    localStorage.setItem("signupInform",JSON.stringify(signupArr));
}
