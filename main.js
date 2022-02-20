let num = document.querySelector(".container .land .num");


let minus = document.querySelector(".container .land .minus");
let reset = document.querySelector(".container  .reset");
let plus = document.querySelector(".container .land .plus");


minus.onclick = function() {
    num.innerHTML = Number(num.innerHTML) - 1
}
plus.onclick = function() {
    num.innerHTML = Number(num.innerHTML) + 1
}
reset.onclick = function() {
    num.innerHTML = Number(num.innerHTML) - Number(num.innerHTML)
}