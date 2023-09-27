// feather icons
feather.replace();
// feather icons

const listItems = document.querySelectorAll(".list-items");

for(i = 0; i < listItems.length; i++) {
    listItems[i].style.color= "brown";
} 
console.log(listItems);

const ul = document.querySelector("ul");
const li = document.createElement("li");

ul.append(li); 

