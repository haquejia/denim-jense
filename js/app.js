let signUpBtn = document.getElementById('signupBtn');
let signinBtn = document.getElementById('signinBtn');
let nameField = document.getElementById('nameField');
let title = document.getElementById('title')


signinBtn.onclick = function () {
    nameField.style.maxHeight = "0";
    title.innerHTML = "সফলভাবে  প্রবেশ করেছেন"
    signUpBtn.classList.add("disable")
    signinBtn.classList.remove("disable")

}

signUpBtn.onclick = function () {
    nameField.style.maxHeight = "60px";
    title.innerHTML = "অনুগ্রহ করে প্রবেশ করুন"
    signUpBtn.classList.remove("disable")
    signinBtn.classList.add("disable")

}

