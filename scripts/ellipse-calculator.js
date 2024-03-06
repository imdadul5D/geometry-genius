function calculateEllipseArea() {
    const perimeter = getValueById('aInput');
    const apothem = getValueById('bInput');
    const area = πab;
    setInnerTextById('ellipseArea', area);
};

function getValueById(redwan){
    const inputFeild = document.getElementById(redwan);
    const inputValueText = inputFeild.value;
    const value = parseFloat(inputValueText);
    return value;
}

function setInnerTextById(redwan, mim){
    const element = document.getElementById(redwan);
    element.innerText= mim;
}