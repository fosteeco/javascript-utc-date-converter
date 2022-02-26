console.log("run");
const form = document.querySelector("#date-form");
const dateStringInput = document.querySelector("#date-string-input");
const output = document.querySelector("#output");

form.addEventListener("submit", (e) => {
  e.preventDefault();
  const dateString = dateStringInput.value;
  const dateObj = new Date(dateString);
  const dateLocaleString = dateObj.toLocaleString();
  const dateToString = dateObj.toString();
  const dateOutput =
    "date.toString() String: " +
    dateToString +
    "\n\n" +
    "date.toLocaleString():" +
    dateLocaleString;
  output.innerText = dateOutput;

  console.log("dateString :", dateString);
});
