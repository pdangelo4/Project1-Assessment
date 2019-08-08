var inputValue = '';
var currentCount = '1';


document.addEventListener('DOMContentLoaded', function () {

document.getElementById('currentCount').innerText = 1;


});

//Function to handle clicked images
document.addEventListener("click", handleClick);

function handleClick(click) {
    console.log(click.target.textContent)
    inputValue = document.getElementById('input').value
    if (click.target.id === "plus"){
        currentCount = eval(parseFloat(inputValue) + parseFloat(currentCount));
        console.log(click.target.id)
        console.log(document.getElementById('input').value)
        document.getElementById('currentCount').innerHTML = currentCount;
        color();
    }
    if (click.target.id === "minus"){
        currentCount = eval(parseFloat(currentCount) - parseFloat(inputValue));
        document.getElementById('currentCount').innerHTML = currentCount
        console.log(click.target.id);
        color();
    }
    if (isNaN(inputValue)){
        alert('Please enter a valid number')
        console.log('Is not a number')
    }
} 

function color() {
    document.getElementById('currentCount').innerHTML = currentCount;
    if (currentCount < 0) {
        document.getElementById('currentCount').style.color = 'red';
    }
    else {
        document.getElementById('currentCount').style.color = 'black';
    }
}