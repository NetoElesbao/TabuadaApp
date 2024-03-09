// Seleção de elementos
const multiplicationForm = document.querySelector("#multiplication-form");
const numberInput = document.querySelector("#number");
const multiplicatorInput = document.querySelector("#multiplicator");
const multiplicationOperations = document.querySelector(
  "#multiplication-operations"
);
const multiplicationTitle = document.querySelector(
  "#multiplication-title span"
);
// Funções
const createTable = (number, multiplicator) => {
  // debugger;
  multiplicationOperations.innerHTML = "";

  for (i = 1; i <= multiplicator; i++) {
    const result = number * i;

    const template = `<div class="row">
    <div class="operations">${number} x ${i} = </div>
    <div class="result">${result}</div>
    </div>`;

    const parser = new DOMParser();

    const htmlTemplate = parser.parseFromString(template, "text/html");

    const row = htmlTemplate.querySelector(".row");

    multiplicationOperations.appendChild(row);
  }

  multiplicationTitle.innerText = number;
};

// Eventos

multiplicationForm.addEventListener("submit", (event) => {
  event.preventDefault();

  const number = +numberInput.value;
  const multiplicator = +multiplicatorInput.value;

  if (!number || !multiplicator) return;
  createTable(number, multiplicator);
});
