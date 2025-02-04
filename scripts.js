const convertButton = document.querySelector(".convert-button");
const currencySelect = document.querySelector(".currency-select");

function convertValues() {
    const inputCurrency = document.querySelector(".input-currency");
    const inputCurrencyValue = parseFloat(inputCurrency.value.replace(",", "."));
    
    if (isNaN(inputCurrencyValue) || inputCurrencyValue <= 0) {
        document.querySelector(".currency-value-to-convert").innerHTML = "R$ 0.00";
        document.querySelector(".currency-value").innerHTML = "0.00";
        return;
    }

    const currencyValueToConvert = document.querySelector(".currency-value-to-convert");
    const currencyValueConverted = document.querySelector(".currency-value");

    const dolarToday = 5.81;
    const euroToday = 6.02;
    const libraToday = 7.05;
    const bitcoinToday = 340000;

    let convertedValue = 0;

    if (currencySelect.value === "dolar") {
        convertedValue = inputCurrencyValue / dolarToday;
        currencyValueConverted.innerHTML = new Intl.NumberFormat("en-US", {
            style: "currency",
            currency: "USD"
        }).format(convertedValue);
    }

    if (currencySelect.value === "euro") {
        convertedValue = inputCurrencyValue / euroToday;
        currencyValueConverted.innerHTML = new Intl.NumberFormat("de-DE", {
            style: "currency",
            currency: "EUR"
        }).format(convertedValue);
    }

    if (currencySelect.value === "libra") {
        convertedValue = inputCurrencyValue / libraToday;
        currencyValueConverted.innerHTML = new Intl.NumberFormat("en-GB", {
            style: "currency",
            currency: "GBP"
        }).format(convertedValue);
    }

    if (currencySelect.value === "bitcoin") {
        convertedValue = inputCurrencyValue / bitcoinToday;
        currencyValueConverted.innerHTML = convertedValue.toFixed(6) + " BTC";
    }

    currencyValueToConvert.innerHTML = new Intl.NumberFormat("pt-BR", {
        style: "currency",
        currency: "BRL"
    }).format(inputCurrencyValue);
}


function changeCurrency() {
    const currencyName = document.getElementById("currency-name");
    const currencyImage = document.querySelector(".currency-img");

    if (currencySelect.value === "dolar") {
        currencyName.innerHTML = "Dólar Americano";
        currencyImage.src = "./assets/dolar.png";
    }
    if (currencySelect.value === "euro") {
        currencyName.innerHTML = "Euro";
        currencyImage.src = "./assets/euro.png";
    }
    if (currencySelect.value === "libra") {
        currencyName.innerHTML = "Libra Esterlina";
        currencyImage.src = "./assets/libra.png";
    }
    if (currencySelect.value === "bitcoin") {
        currencyName.innerHTML = "Bitcoin";
        currencyImage.src = "./assets/bitcoin.png";
    }

    convertValues();
}

currencySelect.addEventListener("change", changeCurrency);
convertButton.addEventListener("click", convertValues);