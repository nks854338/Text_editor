let inputBox = document.querySelector(".input");
let boldBtn = document.querySelector(".bold");
let ItalicBtn = document.querySelector(".italic");
let upperBtn = document.querySelector(".upCase");
let lowerBtn = document.querySelector(".lowCase");
let saveBtn = document.querySelector(".save");
let deleteBtn = document.querySelector(".delete");
let resultBox = document.querySelector(".para");
let icon = document.querySelector(".icon");

let result = "";

saveBtn.addEventListener('click', () => {
    result = inputBox.value;
    resultBox.innerText += result;
    inputBox.value = "";
})

deleteBtn.addEventListener('click', () => {
    resultBox.innerText = "";
})

icon.addEventListener('click', () => {
    inputBox.value = "";
})

upperBtn.addEventListener('click', () => {
    result = inputBox.value;
    result = result.toUpperCase(result);
    inputBox.value = result;
})

lowerBtn.addEventListener('click', () => {
    result = inputBox.value;
    result = result.toLowerCase(result);
    inputBox.value = result;
})

// function toggleBold() {
//     var input = document.getElementById('textInput');
//     // Check if the classList contains 'bold', if so remove it, otherwise add it
//     input.classList.toggle('bold');
// }

boldBtn.addEventListener('click', () => {

})

ItalicBtn.addEventListener('click', () => {

})

// addEventListener version
document.addEventListener("selectionchange", () => {
    console.log(document.getSelection());
});

// onselectionchange version
document.onselectionchange = () => {
    console.log(document.getSelection());
};

console.log("hello");