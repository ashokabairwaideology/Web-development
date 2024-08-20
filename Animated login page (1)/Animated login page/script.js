let signinBtn = document.querySelector(".signinBtn");
let signupBtn = document.querySelector(".signupBtn");
let body = document.querySelector("body");

signupBtn.onclick = () => body.classList.add('slide');
signinBtn.onclick = () => body.classList.remove('slide');