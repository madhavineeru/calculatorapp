let InputElementValue = document.getElementById("inputValues");

function display(val){
    InputElementValue.value+=val;
}

function equate(){
    let clickedValue = InputElementValue.value;
    let equatedValue = eval(clickedValue);
    InputElementValue.value = equatedValue;
}

function clr(){
    InputElementValue.value="";
}
