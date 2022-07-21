/*
Counter Widget

- Header (Counter, etc)
- Current Count
- Three buttons: decrease, reset, increase, that update the count respectively
- Current count should be black at 0, red in the negative, and green in the positive
- STYLE EVERYTHING
*/

const positiveDigit = document.querySelector(".positive-digit");
const zeroDigit = document.querySelector(".zero-digit");
const negativeDigit = document.querySelector(".negative-digit");

// const numberedPositiveDigit = positiveDigit.innerText;
// const numberedZeroDigit = zeroDigit.innerText;
// const numberedNegativeDigit = negativeDigit.innerText;

const decreaseButton = document.getElementById("decrease");
const resetButton = document.getElementById("reset");
const increaseButton = document.getElementById("increase");

window.onload = () => {
  zeroDigit.style.display = "flex";
};

let metaCounter = 0;
decreaseButton.addEventListener("click", (e) => {
  positiveDigit.style.display = "none";
  zeroDigit.style.display = "none";
  negativeDigit.style.display = "none";

  metaCounter--;
  positiveDigit.innerText = metaCounter;
  negativeDigit.innerText = metaCounter;
  zeroDigit.innerText = metaCounter;

  if (metaCounter === 0) {
    zeroDigit.style.display = "flex";
  } else if (metaCounter < 0) {
    negativeDigit.style.display = "flex";
  } else if (metaCounter > 0) {
    positiveDigit.style.display = "flex";
  }
});

increaseButton.addEventListener("click", (e) => {
  positiveDigit.style.display = "none";
  zeroDigit.style.display = "none";
  negativeDigit.style.display = "none";

  metaCounter++;
  positiveDigit.innerText = metaCounter;
  negativeDigit.innerText = metaCounter;
  zeroDigit.innerText = metaCounter;

  if (metaCounter === 0) {
    zeroDigit.style.display = "flex";
  } else if (metaCounter < 0) {
    negativeDigit.style.display = "flex";
  } else if (metaCounter > 0) {
    positiveDigit.style.display = "flex";
  }
});

resetButton.addEventListener("click", (e) => {
  positiveDigit.style.display = "none";
  negativeDigit.style.display = "none";

  metaCounter = 0;
  positiveDigit.innerText = metaCounter;
  negativeDigit.innerText = metaCounter;
  zeroDigit.innerText = metaCounter;

  zeroDigit.style.display = "flex";
});
