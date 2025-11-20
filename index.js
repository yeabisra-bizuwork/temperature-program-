const output = document.getElementById("output");
const tofahrenheit = document.getElementById("tofahrenheit");
const tocelsius = document.getElementById("tocelsius");
const submit = document.getElementById("submit");

submit.onclick = function convert() {
  let value = Number(document.getElementById("temp").value);

  if (tofahrenheit.checked) {
    output.textContent = ((value * 9) / 5 + 32).toFixed(1) + "℉";
  } else if (tocelsius.checked) {
    output.textContent = (((value - 32) * 5) / 9).toFixed(1) + " ℃";
  }
};
