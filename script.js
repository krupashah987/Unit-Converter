function convertUnit() {
    let value = document.getElementById("inputValue").value;
    let unit = document.getElementById("unitType").value;
    let resultText = "";

    if (value === "") {
        resultText = "Please enter a value";
    }

    // Length Converter
    else if (unit === "mToKm") {
        resultText = value + " meters = " + (value / 1000) + " kilometers";
    }
    else if (unit === "kmToM") {
        resultText = value + " kilometers = " + (value * 1000) + " meters";
    }

    // Temperature Converter
    else if (unit === "cToF") {
        resultText = value + "°C = " + ((value * 9 / 5) + 32) + "°F";
    }
    else if (unit === "fToC") {
        resultText = value + "°F = " + ((value - 32) * 5 / 9).toFixed(2) + "°C";
    }

    // Weight Converter
    else if (unit === "kgToG") {
        resultText = value + " kg = " + (value * 1000) + " grams";
    }
    else if (unit === "gToKg") {
        resultText = value + " grams = " + (value / 1000) + " kg";
    }

    // Time Converter
    else if (unit === "hrToMin") {
        resultText = value + " hours = " + (value * 60) + " minutes";
    }
    else if (unit === "minToHr") {
        resultText = value + " minutes = " + (value / 60) + " hours";
    }

    document.getElementById("result").innerText = resultText;
}
