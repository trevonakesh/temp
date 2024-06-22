const textbox = document.getElementById("text");
const tofan = document.getElementById("tofahrenheit");
const tocel = document.getElementById("tocelsius");
const results = document.getElementById("results");

let temp;

function convert() {
  if (tofan.checked) {
    temp = Number(textbox.value);

    temp = (temp * 9) / 5 + 32;
    results.textContent = temp.toFixed(1) + "°F";
  } 
  
  else if (tocel.checked) {
    temp = Number(textbox.value);

    temp = (temp - 32) * (5 / 9);
    results.textContent = temp.toFixed(1) + "°C";
  }
  
  else {
    results.textContent = "Please Select a Unit!";
  }
}
