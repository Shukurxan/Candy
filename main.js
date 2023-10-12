const inputValue = document.querySelector("input");
const egg = document.querySelector(".egg");
const eggColor = document.querySelector(".egg-color");
const openEggColor = document.querySelector(".open-egg-color");
const list = document.querySelector("ol");
const listBtn = document.querySelector(".listBtn");
let lotteryList = [];

function listRender() {
  list.innerHTML = lotteryList.map((ele) => `<li>${ele}</li>`).join("");
}

listBtn.addEventListener("click", function () {
  document.querySelector(".list-wrap").classList.toggle("active");
});

inputValue.addEventListener("keyup", function (e) {
  if (e.key === "Enter" && inputValue.value.trim() !== "") {
    console.log(inputValue.value);
    const lottery = inputValue.value.trim().split(" ");
    lotteryList = lotteryList.concat(lottery);
    inputValue.value = "";
    listRender();
  }
});

egg.addEventListener("click", function (e) {
  const luckyNum = Math.floor(Math.random() * lotteryList.length);
  const winner = lotteryList[luckyNum];
  document.querySelector(".winner").innerHTML =
    lotteryList.length >= 1 ? `<span>${winner}</span>` : "❤️ I Love You ❤️ ";
  lotteryList.splice(luckyNum, 1);
  listRender();
});

const colors = ["#E5A0B9", "#F3D478", "#9DCFE0", "#B9AED4"];
let currentColor = "#E5A0B9";

document.querySelector(".switch").addEventListener("click", function () {
  currentColor = colors[Math.floor(Math.random() * colors.length)];
  eggColor.style.fill = currentColor;
  openEggColor.style.fill = currentColor;
  this.classList.toggle("active");
  setTimeout(() => this.classList.remove("active"), 700);
  egg.classList.toggle("active");
});

egg.addEventListener("click", function () {
  this.classList.remove("active");
  document.querySelector(".mask").classList.toggle("active");
});

document.querySelector(".mask").addEventListener("click", function () {
  this.classList.toggle("active");
});
