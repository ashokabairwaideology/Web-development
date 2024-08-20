const input = document.querySelector(".textBtn");
const count = document.querySelector(".count");
const maxlength = input.getAttribute("maxlength");

input.onkeyup = () => {
    count.innerText = maxlength - input.value.length;
}