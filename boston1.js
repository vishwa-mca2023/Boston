import { boston } from "./boston.js";

const bostondata = boston.data;

// Sort the data by salary (assuming salary is in the 11th column)
bostondata.sort((a, b) => b[11] - a[11]);

const topFiveEarners = bostondata.slice(0, 5);

const appElement = document.getElementById("app");
const ulElement = document.createElement("ul");

topFiveEarners.forEach(person => {
    const liElement = document.createElement("li");
    liElement.innerHTML = `
        <h2>${person[8]}</h2>
        <h3>${person[11]}</h3>
    `;
    ulElement.appendChild(liElement);
});

appElement.appendChild(ulElement);
