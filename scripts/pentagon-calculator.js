function calculatePentagonArea() {
    const perimeter = getValueById('perimeterInput');
    const apothem = getValueById('apothemInput');
    const area = 0.5 * perimeter * apothem;
    setInnerTextById('pentagonArea', area);
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