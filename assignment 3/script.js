//Assignment 1: Change Background Color
// Title: Change Background Color Assignment

function getRandomColor(){
    
    const letters = '0123456789ABCDEF';
    let color = '#';
    //generates a random color in hexadecimal format 
    for (let i = 0; i < 6; i++) {
        //appending a random character from the letters string to the color variable.
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
}
function changeBackgroundColor(){
    // calls getRandomColor() to obtain the random color 
    const randomColor = getRandomColor();
    //applies it to the background color of the document.body using the style.backgroundColor property.
            document.body.style.backgroundColor = randomColor;
}
document.onclick = changeBackgroundColor;


//Assignment 2: Counter
// /Title: Counter Assignment

// JavaScript variable for counting
let count = 0;
  function updateCounter() { 
    count++;
    document.getElementById('count').textContent = count;
    } 