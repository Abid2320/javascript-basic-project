const paletts = document.querySelectorAll(".palett");
const generateBtn = document.querySelector(".generate");
const colorCode = document.querySelector(".color-code");

// base sixteen number
const baseSixteen = "0123456789ABCDEF";

generateColor();

// generate button function
generateBtn.addEventListener("click", generateColor);

// generating color for every single palett element
function generateColor() {
  paletts.forEach((e) => {
    let colorCode = randomColor();
    e.style.backgroundColor = colorCode;
    e.firstElementChild.innerText = colorCode;
  });
}

// generating random color
function randomColor() {
  let colorHash = "#";
  for (let i = 0; i < 6; i++) {
    colorHash = colorHash + baseSixteen[randomNumber()];
  }
  return colorHash;
}

//   generating random number
function randomNumber() {
  return Math.floor(Math.random() * baseSixteen.length);
}
