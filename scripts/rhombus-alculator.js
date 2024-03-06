function calculateRhombusArea() {
    const diagonal1 = getValueById('diagonal1Input');
    const diagonal2 = getValueById('diagonal2Input');
    const area = 0.5 * diagonal1 * diagonal2;
    setInnerTextById('rhombusArea',area);


}

function getValueById(redwan) {
    const inputFeild = document.getElementById(redwan);
    const inputValueText = inputFeild.value;
    const value = parseFloat(inputValueText);
    return value
}

function setInnerTextById(mim,redwan) {
    const element = document.getElementById(mim);
    element.innerText = redwan;
}