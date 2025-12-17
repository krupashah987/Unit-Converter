function cmToMeter(value) {
    return value / 100;
}

function celsiusToFahrenheit(value) {
    return (value * 9 / 5) + 32;
}

function inrToUsd(value) {
    const rate = 0.012; // static rate
    return value * rate;
}

function convertUnit() {
    let value = document.getElementById("inputValue").value;
    let unit = document.getElementById("unitType").value;
    let result = "";

    if (value === "" || unit === "") {
        document.getElementById("result").innerText = "Please enter value and select unit";
        return;
    }

    value = parseFloat(value);

    if (unit === "cmToM") {
        result = cmToMeter(value) + " meters";
    }
    else if (unit === "cToF") {
        result = celsiusToFahrenheit(value) + " °F";
    }
    else if (unit === "inrToUsd") {
        result = inrToUsd(value).toFixed(2) + " USD";
    }

    document.getElementById("result").innerText = "Result: " + result;
}

function resetAll() {
    document.getElementById("inputValue").value = "";
    document.getElementById("unitType").value = "";
    document.getElementById("result").innerText = "Converted value will appear here";
}
