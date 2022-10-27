let InputElementValue = document.getElementById("inputValues");
//display values
function display(val){
    InputElementValue.value+=val;
}
//calculate the given numbers
function equate(){
    let clickedValue = InputElementValue.value;
    let equatedValue = eval(clickedValue);
    InputElementValue.value = equatedValue;
}
//clear calculation
function clr(){
    InputElementValue.value="";
}
