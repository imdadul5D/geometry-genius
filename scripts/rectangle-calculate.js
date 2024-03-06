function calculateRectangleArea(){
// Rectangle Weight
const rectangleWidthInput = document.getElementById('rectangleWeight');
const rectangleWidthText = rectangleWidthInput.value;
const width = parseFloat(rectangleWidthText);
console.log(width);


// Rectangle Length
const rectangleLengthInput = document.getElementById('rectangleLength');
const rectangleLengthText = rectangleLengthInput.value;
const length = parseFloat(rectangleLengthText);
console.log(length);

// Rectangle Area
const area = width * length;
console.log('Area of the Rectagle Is: ', area);


// Display Rectangle Area
const rectangleAreaSpan = document.getElementById('rectangleArea');
rectangleAreaSpan.innerText = area;

}


