

const aloeBtn = document.querySelector(".aloebu");
const onionBtn = document.querySelector(".onionbu");
const eggBtn = document.querySelector(".eggbu");
const closebtn = document.querySelector("#closebu");

const popup1 = document.getElementById("popup1");
const popup2 = document.getElementById("popup2");
const popup3 = document.getElementById("popup3");


aloeBtn.addEventListener("click", function(){
    popup1.style.display = "flex";
});

onionBtn.addEventListener("click", () => {
    popup2.style.display = "flex";

});

eggBtn.addEventListener("click", () => {
    popup3.style.display = "flex";

});

function closePopup(id) {
    document.getElementById(id).style.display = "none";
}

