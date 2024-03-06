function calculateTriangleArea(){

    // Triangle Base
    const triAngleBaseInput = document.getElementById('triangleBAse');
    const triAngleBaseText = triAngleBaseInput.value;
    const base = parseFloat(triAngleBaseText);
    console.log(base)

    // Triangle Height
    const triAngleHeightInput = document.getElementById('triangleHeight');
    const triangleHeightText = triAngleHeightInput.value;
    const height = parseFloat(triangleHeightText);
    console.log(height);

    // Calculate Triangle Area
    const area = 0.5 * base * height;
    console.log('Area of the triangle is : ', area);

    // Display TRiangle Area
    const triangleAreaSpan = document.getElementById('triangleArea');
    triangleAreaSpan.innerText = area;
}