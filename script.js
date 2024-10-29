// your code here
let btn = document.getElementById("button");
let nameInput = document.querySelector("[name='name']");
let yearInput = document.querySelector("[name='year']");
let url = document.getElementById("url");

url.textContent = "https://localhost:8080/";

btn.addEventListener("click", () => {
	const name = nameInput.value ? nameInput.value : "";
    const year = yearInput.value ? yearInput.value : "";

    let baseUrl = `https://localhost:8080/?`;

    let queryParams = [];

    if (name) {
        queryParams.push(`name=${name}`);
    }

    if (year) {
        queryParams.push(`year=${year}`);
    }

    url.textContent = baseUrl + queryParams.join('&');
})