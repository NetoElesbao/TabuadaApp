// Seleção de elementos
const multiplicationform = document.querySelector("#multiplication-form");
const numberInput = document.querySelector("#number");
const multiplicationInput = document.querySelector("#multiplicator");

console.log(multiplicationform);
console.log(numberInput);
console.log(multiplicationInput);

// Funções
multiplicationform.addEventListener("submit", (event) => {
  event.preventDefault();

  const multiplicatonNumber = +numberInput.value;
  const multiplicatorNumber = +multiplicationInput.value;

  if (!multiplicatonNumber || !multiplicatorNumber) {
    return;
  }

  console.log(multiplicatonNumber, multiplicatorNumber);
});

// Eventos
