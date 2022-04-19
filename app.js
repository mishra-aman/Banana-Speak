const btnTranslate = document.getElementById("btn-translate");
const textInput = document.querySelector("#text-input");
const outputDiv = document.querySelector("#output");

console.log(textInput);
const clickHandler = () => {
  outputDiv.innerText = textInput.value;
};

btnTranslate.addEventListener("click", clickHandler);
