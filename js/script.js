/* Declare and initialize global variables */
var pageBg = document.querySelector("html"); // Selects the HTML element
var sliders = document.getElementsByTagName("input"); // Gets all input elements
var rgb = [0, 0, 0]; // Initializes an array to store RGB values

/* Event handlers for range sliders */
for (var i = 0; i < sliders.length; i++) { // Loops through each input element
    sliders[i].onchange = function () { // Adds an onchange event handler to each input element
        var whichSlider = this.getAttribute("id"); // Gets the id attribute of the changed input element
        var sliderValue = this.value; // Gets the value of the changed input element
        // Call the changeRgb function to update the global rgb variable
        var newRgb = changeRgb(whichSlider, sliderValue);
        // Call the writeCSS function to generate a new CSS string
        var newCSS = writeCSS(newRgb);
        // Update the background color of the HTML page
        pageBg.style.backgroundColor = newCSS;
    };
}

/* Functions */
// Function to update the RGB array based on the slider changed
function changeRgb(channel, value) {
    switch (channel) { // Switch based on the id of the changed input element
        case "red":
            rgb[0] = value; // Update the red value in the RGB array
            break;
        case "green":
            rgb[1] = value; // Update the green value in the RGB array
            break;
        case "blue":
            rgb[2] = value; // Update the blue value in the RGB array
            break;
    }
    // Return the updated RGB array
    return rgb;
}

// Function to generate CSS background-color string
function writeCSS(newRgb) {
    var newColor = 'rgb('; // Initialize the CSS color string
    var i = 0;
    while (i < newRgb.length) { // Iterate through the RGB array
        newColor += newRgb[i]; // Add the current RGB value to the CSS string
        // Add comma if not the last element
        if (i !== newRgb.length - 1) {
            newColor += ',';
        }
        i++;
    }
    // Complete the string and return
    newColor += ')';
    return newColor;
}
