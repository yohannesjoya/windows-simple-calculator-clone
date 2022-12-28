// // closing hover
var closing = document.querySelectorAll(".closing span");
// closing.forEach((icon) => {
//   icon.addEventListener("mouseover", () => {
//     if (icon.className === "minimize") {
//       icon.innerHTML = "<i><small>Min</small></i>";
//       setTimeout(() => {
//         icon.innerHTML = "<i>-</i>";
//       }, 1000);
//     } else if (icon.className === "close") {
//       icon.innerHTML = "<i><small>close</small></i>";
//       setTimeout(() => {
//         icon.innerHTML = "<i>x</i>";
//       }, 1000);
//     }
//   });
// });
// closing click
closing.forEach((icon) => {
  icon.addEventListener("click", () => {
    const calc = document.querySelector(".calculator-wrapper");
    if (icon.className === "minimize") {
      var writing = document.querySelector(".writting-area");
      var keypads = document.querySelector(".keypads");
      writing.classList.toggle("hidden");
      keypads.classList.toggle("hidden");
      if (
        writing.className == "writting-area hidden" &&
        keypads.className == "keypads hidden"
      ) {
        calc.classList.add("collapsed");
      } else {
        calc.classList.remove("collapsed");
      }
    } else if (icon.className === "close") {
      calc.classList.add("hidden");
      var closing_messageOnBody = document.querySelector("body");
      closing_messageOnBody.innerHTML =
        "<h1 style='color:black; text-align:center;'>Thanks<br><br>for<br><br>Your Time!! </h1>";
    }
  });
});

var tempWritingArea = document.querySelector(".writting-area .tempWriting");
var acceptInput = document.querySelector(".writting-area input"); //this is the input acceptor
var typableKeys = document.querySelectorAll(".typable");
typableKeys.forEach((Element) => {
  Element.addEventListener("click", () => {
    acceptInput.value += Element.textContent;
    tempWritingArea.textContent += Element.textContent;
  });
});
// below code is to clear the inputs of calculator
var clearingKeys = document.querySelectorAll(".clearingKeys");
clearingKeys.forEach((Element) => {
  Element.addEventListener("click", () => {
    acceptInput.value = "";
    tempWritingArea.textContent = "";
  });
});
// below is for 1 back dell key
var Dell = document.querySelectorAll(".Dell");
Dell.forEach((Element) => {
  Element.addEventListener("click", () => {
    acceptInput.value = acceptInput.value.slice(0, -1);
    tempWritingArea.textContent = tempWritingArea.textContent.slice(0, -1);
  });
});

// equal is the is equal to key that calculates every thing
var CalcEqual = document.querySelector(".equal");
CalcEqual.addEventListener("click", () => {
  console.log(typeof eval(acceptInput.value) !== "number");
  console.log(eval(acceptInput.value) != "Infinity");
  if (
    typeof eval(acceptInput.value) !== "number" &&
    eval(acceptInput.value) != "Infinity"
  ) {
    acceptInput.value = "Invalid expression";
    return;
  }
  acceptInput.value = eval(acceptInput.value);
  // was thinking to set timeOut for new inputs but leave
});


// this is for theme change
var dawa = document.querySelector(".dawa-change");
var CalculatorBG = document.querySelector(".calculator-wrapper");
dawa.addEventListener("click", () => {
  CalculatorBG.classList.toggle("theme2");
});
