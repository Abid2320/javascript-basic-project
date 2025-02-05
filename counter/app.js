const counterResult = document.querySelector("h1");
const buttons = document.querySelectorAll("button");

let value = 0;
updateValue();
buttons.forEach((button) => {
  button.addEventListener("click", (e) => {
    let classList = e.currentTarget.classList;
    if (classList.contains("increase")) {
      value++;
      updateValue();
    } else if (classList.contains("decrease")) {
      value--;
      updateValue();
    } else {
      value = 0;
      updateValue();
    }
  });
});

function updateValue() {
  counterResult.innerText = value;
}
