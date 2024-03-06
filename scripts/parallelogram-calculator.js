function calculateParallelogramArea() {
    const base = getInputValueById('baseInput')
    console.log(base);

    const height = getInputValueById('heightInput');
    console.log(height);

    const area = base * height;
    setInnerTextById('parallelogramArea', area);
}

function getInputValueById(redwan) {
    const inputFeild = document.getElementById(redwan);
    const inputValueText = inputFeild.value;
    const value = parseFloat(inputValueText);
    return value;
}

function setInnerTextById(mim, redwan) {
    const element = document.getElementById(mim);
    element.innerText = redwan;
}
