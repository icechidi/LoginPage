document.addEventListener("DOMContentLoaded", function(){
    const formTitle = document.getElementById("form-title");
    const toggleLogin = document.getElementById("toggle-login");
    const form = document.getElementById("form");
    const emailBox = document.getElementById("email-box");
    const submitButton = document.querySelector(".btn");

    let isLogin = false;

    toggleLogin.addEventListener("click", function(e){
        e.preventDefault();
        isLogin = !isLogin;

        if(isLogin){
            formTitle.textContent = "Login";
            emailBox.style.display = "none";
            submitButton.textContent = "Login";
            toggleLogin.textContent = "Sign Up";
        }else{
            formTitle.textContent = "Sign Up";
            emailBox.style.display = "block";
            submitButton.textContent = "Sign Up";
            toggleLogin.textContent = "Login";
        }
    })
})