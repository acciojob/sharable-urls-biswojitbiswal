// your code here
// your code here
let btn = document.getElementById("submit");
let nameInput = document.querySelector("input[name='name']");
let yearInput = document.querySelector("input[name='year']");
let url = document.getElementById("heading");

url.textContent = "https://localhost:8080/";

btn.addEventListener("click", () => {
	url.textContent = `https://localhost:8080/?name=${nameInput.value ? nameInput.value : ""}&year=${yearInput.value ? yearInput : ""}`;
})