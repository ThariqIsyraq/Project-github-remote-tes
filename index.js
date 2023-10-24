// feather icons
feather.replace();
// feather icons

const tambahin = document.getElementsByClassName("tambahin")[0];

tambahin.addEventListener('click', function () {
    const diva = document.getElementById("a");
    const pBaru = document.createElement("p");
    pBaru.textContent = "halohehehe" 

    diva.appendChild(pBaru);
})

// const tambahin = document.querySelector(".tambahin");

// if (tambahin) {
//   tambahin.addEventListener('click', addNewParagraph);
// }

// function addNewParagraph() {
//   const diva = document.getElementById("a");

//   if (diva) {
//     const pBaru = document.createElement("p");
//     const text = document.createTextNode("halohehe");
//     pBaru.appendChild(text);
//     diva.appendChild(pBaru);
//   }
// }

