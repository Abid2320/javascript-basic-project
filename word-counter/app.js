const form = document.querySelector(".input");
const value = document.querySelector(".count-value");
const input = document.querySelector(".input-box");

form.addEventListener("submit", (e) => {
  e.preventDefault();
  console.log("hi");

  if (!input.value) {
    value.textContent = 0;
    return;
  }
  let text = input.value;
  value.textContent = countWords(text);
  input.value = "";
});

function countWords(words) {
  let text = words.trim();
  let wordsArray = text.split(/\s+/);
  let filterWords = wordsArray.filter((word) => word.length > 0);
  return filterWords.length;
}
