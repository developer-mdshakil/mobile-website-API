//analysis input field and get input value
function getInputValueById(inputId){
    const inputField = document.getElementById(inputId);
    const inputValue = parseFloat(inputField.value);
    inputField.value = '';
    return inputValue;
}

//analysis text element and get element
function getTextElemet(textElement){
    const getTextElement = document.getElementById(textElement);
    const elementValue = parseFloat(getTextElement.innerText);
    return elementValue;
}

//crate setTextElement function and analysis text value
function setTextElement(element, newValue){
    const elementValue = document.getElementById(element);
    elementValue.innerText = newValue;
}