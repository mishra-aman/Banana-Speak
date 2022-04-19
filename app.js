const btnTranslate = document.getElementById("btn-translate");
const textInput = document.querySelector("#text-input");
console.log(textInput);
const clickHandler = () => {
  console.log("Clicked");
  console.log("input", textInput.value);
};

btnTranslate.addEventListener("click", clickHandler);
