//Global selections and Varibles
const colorDivs = document.querySelectorAll('.color');
const generateBtn = document.querySelector('.generate');
const sliders = document.querySelectorAll('input[type="range"]');
const currentHexes = document.querySelectorAll('.color h2');
let initialColors; 

// functions

//Color Generator
// function genareteHex() {
//     const letters = "0123456789ABCDEF";
//     let hash = "#";
//     for (let i = 0; i < 6; i++) {
//         hash += letters[Math.floor(Math.random() * 16)];
//     }
//     return hash;
// }
function genareteHex() {
    const hexColor = chroma.random();
    return hexColor;
}

//Contrast
function checkTextContrast(color, text) {
    const luminance = chroma(color).luminance();
    if (luminance > 0.5) {
        text.style.color = "black";
    }else {
        text.style.color = "white";
    }
}

//
function randomColors() {
    colorDivs.forEach((div,index) => {
        const hexText = div.children[0];
        const randomColor = genareteHex();

        //Add the color to the bg
        div.style.backgroundColor = randomColor;
        hexText.innerText = randomColor;

        //Check for contrast
        checkTextContrast(randomColor, hexText);
    });
}

randomColors()