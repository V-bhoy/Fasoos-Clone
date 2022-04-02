let signupArr= JSON.parse(localStorage.getItem("signupInform")) || [];

document.querySelector("#form").addEventListener("submit",loginData);

    function loginData(event)
    {
        event.preventDefault();
        let CountryCode = document.querySelector("#loginCountries").value;
        let Phone = document.querySelector("#loginPhone").value;
    
 
        let flag = false;
        console.log(signupArr);
       for(let i=0; i<signupArr.length; i++)
       {
        // console.log("aaaaaaaa");
        //    console.log(signupArr[i].signupPhone);
           if(signupArr[i].signupPhone == Phone )
           {
            flag = true;
            console.log("aaaaaaaa");
           }
       }
       if(Phone.length == "10")
       {
           if(flag == true )
           {
            window.location.href = "otp.html";
           }
           else{
               alert("Enter correct No")
           }
       }
       else if(flag == false && Phone.length == "10"){
           alert("Diffrent Mobile No, Use same mobile no");
       }
       else if(Phone.length != "10"){
           alert("Enter ten digits Number");
       }
    }
   


/* <script>
    var matchUserData = JSON.parse(localStorage.getItem("signUpDetails"));
    // console.log(matchUserData);
    // console.log(matchUserData.email);


    document.querySelector("#mylogin").addEventListener("submit", formSubmit);

    // var form = document.querySelector("#mylogin");
    // console.log(form);
    function formSubmit(event)
    {
        event.preventDefault();
        var user = document.querySelector("#user").value;
        var pass = document.querySelector("#pass").value;
        var flag = false;
        // var user = form.user.value;
        // var pass = form.pass.value;
        // console.log(user,form);

        for(var i=0; i<matchUserData.length; i++)
        {
          // console.log(matchUserData[i].email);
          // console.log(matchUserData[i].comfirmpassword);

            if(matchUserData[i].email == user && matchUserData[i].comfirmpassword == pass)
            {
                flag = true;
            }
        }
        if(flag == true)
        {
          alert("Login Successfully");
        }
        else
            {
                alert("Invalid Username or Password");
            }
    }

    // var form = document.querySelector("#mylogin");

    // var Email = document.querySelector("#email").value;
    // var Password = document.querySelector("#password").value;

    // var loginObj = {
    //     user : mylogin.email.value,
    //     pass : mylogin.password.value,
    // };
</script> */