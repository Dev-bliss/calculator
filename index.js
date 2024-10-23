const display = document.getElementById("display");
console.log(display)


function appendToDisplay(input){
    display.value += input;
}
 
function clearDisplay(){
    display.value = " ";
}

function calculate(){
    
    display.value = eval(display.value);
}   

function delete9(){
    display.value = display.value.toString().slice(0, -1, '');
}

