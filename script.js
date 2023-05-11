console.log("olá!");

document
  .querySelector("#rating-btn1")
  .addEventListener("click", changeColorOrange1);

function changeColorOrange1() {
  document.querySelector("#rating-btn1").classList.remove("selected");
  document.querySelector("#rating-btn2").classList.remove("selected");
  document.querySelector("#rating-btn3").classList.remove("selected");
  document.querySelector("#rating-btn4").classList.remove("selected");
  document.querySelector("#rating-btn5").classList.remove("selected");
  document.querySelector("#rating-btn1").classList.add("selected");
}

// paciente.querySelector(".info-status").classList.add("peso-normal");

document
  .querySelector("#rating-btn2")
  .addEventListener("click", changeColorOrange2);

function changeColorOrange2() {
  document.querySelector("#rating-btn1").classList.remove("selected");
  document.querySelector("#rating-btn2").classList.remove("selected");
  document.querySelector("#rating-btn3").classList.remove("selected");
  document.querySelector("#rating-btn4").classList.remove("selected");
  document.querySelector("#rating-btn5").classList.remove("selected");
  document.querySelector("#rating-btn2").classList.add("selected");
}

document
  .querySelector("#rating-btn3")
  .addEventListener("click", changeColorOrange3);

function changeColorOrange3() {
  document.querySelector("#rating-btn1").classList.remove("selected");
  document.querySelector("#rating-btn2").classList.remove("selected");
  document.querySelector("#rating-btn3").classList.remove("selected");
  document.querySelector("#rating-btn4").classList.remove("selected");
  document.querySelector("#rating-btn5").classList.remove("selected");
  document.querySelector("#rating-btn3").classList.add("selected");
}

document
  .querySelector("#rating-btn4")
  .addEventListener("click", changeColorOrange4);

function changeColorOrange4() {
  document.querySelector("#rating-btn1").classList.remove("selected");
  document.querySelector("#rating-btn2").classList.remove("selected");
  document.querySelector("#rating-btn3").classList.remove("selected");
  document.querySelector("#rating-btn4").classList.remove("selected");
  document.querySelector("#rating-btn5").classList.remove("selected");
  document.querySelector("#rating-btn4").classList.add("selected");
}

document
  .querySelector("#rating-btn5")
  .addEventListener("click", changeColorOrange5);

function changeColorOrange5() {
  document.querySelector("#rating-btn1").classList.remove("selected");
  document.querySelector("#rating-btn2").classList.remove("selected");
  document.querySelector("#rating-btn3").classList.remove("selected");
  document.querySelector("#rating-btn4").classList.remove("selected");
  document.querySelector("#rating-btn5").classList.remove("selected");
  document.querySelector("#rating-btn5").classList.add("selected");
}

document
  .querySelector("#submit-btn")
  .addEventListener("click", changeColorWhite);

function changeColorWhite() {
  document.querySelector("#submit-btn").style.backgroundColor = "#ffffff";
  document.querySelector("#submit-btn").style.color = "#fb7413";
}
