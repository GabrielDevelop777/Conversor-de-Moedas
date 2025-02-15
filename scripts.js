const convertButton = document.querySelector(".convert-button")
const currencySelect = document.querySelector(".currency-select")
const currencyToSelect = document.querySelector(".currency-to-select")


function convertValues() {
    const inputCurrencyValue = Number(document.querySelector(".input-currency").value)
    const currencyValueToConvert = document.querySelector(".currency-value-to-convert")
    const currencyValueConverted = document.querySelector(".currency-value")

    const exchangeRates = {
        real: 1.0,
        dolar: 5.7,
        euro: 5.98,
        libra: 7.2,
        bitcoin: 556188
    }

    // Exibe o valor formatado da moeda de origem
    const originCurrency = currencyToSelect.value
    const originFormatted = new Intl.NumberFormat("en-US", {
        style: "currency",
        currency: originCurrency === "real" ? "BRL" :
                  originCurrency === "dolar" ? "USD" :
                  originCurrency === "euro" ? "EUR" :
                  originCurrency === "libra" ? "GBP" : "BTC"
    }).format(inputCurrencyValue)
    currencyValueToConvert.innerHTML = originFormatted

    // Faz a conversão com base nas taxas
    const targetCurrency = currencySelect.value
    const convertedValue = (inputCurrencyValue * exchangeRates[originCurrency]) / exchangeRates[targetCurrency]

    // Formata e exibe o valor convertido
    if (targetCurrency === "bitcoin") {
        currencyValueConverted.innerHTML = convertedValue.toFixed(6) + " BTC"
    } else {
        currencyValueConverted.innerHTML = new Intl.NumberFormat("en-US", {
            style: "currency",
            currency: targetCurrency === "real" ? "BRL" :
                      targetCurrency === "dolar" ? "USD" :
                      targetCurrency === "euro" ? "EUR" :
                      targetCurrency === "libra" ? "GBP" : "BTC"
        }).format(convertedValue)
    }
}




function changeCurrency() {
    const currencyName = document.getElementById("currency-name")
    const currencyImage = document.querySelector(".currency-img")
    

    if (currencySelect.value == "dolar") {
        currencyName.innerHTML = "Dólar americano"
        currencyImage.src = "./assets/dolar.png"
    }

    if (currencySelect.value == "real") {
        currencyName.innerHTML = "Real"
        currencyImage.src = "./assets/real.png"
    }

    if (currencySelect.value == "euro") {
        currencyName.innerHTML = "Euro"
        currencyImage.src = "./assets/euro.png"
    }

    if (currencySelect.value == "libra") {
        currencyName.innerHTML = "líbra"
        currencyImage.src = "./assets/libra.png"
    }

    if (currencySelect.value == "bitcoin") {
        currencyName.innerHTML = "BitCoin"
        currencyImage.src = "./assets/bitcoin.png"

    }

    convertValues()
}




function changeSelect() {
    const currencyName = document.querySelector(".currency-name")
    const currencyImage = document.querySelector(".currency-real")


    if (currencyToSelect.value == "dolar") {
        currencyName.innerHTML = "Dólar americano"
        currencyImage.src = "./assets/dolar.png"
    }

    if (currencyToSelect.value == "real") {
        currencyName.innerHTML = "Real"
        currencyImage.src = "./assets/real.png"
    }

    if (currencyToSelect.value == "euro") {
        currencyName.innerHTML = "Euro"
        currencyImage.src = "./assets/euro.png"
    }

    if (currencyToSelect.value == "libra") {
        currencyName.innerHTML = "Líbra"
        currencyImage.src = "./assets/libra.png"
    }

    if (currencyToSelect.value == "bitcoin") {
        currencyName.innerHTML = "Bitcoin"
        currencyImage.src = "./assets/bitcoin.png"
    }
    convertValues()
}

currencyToSelect.addEventListener("change", changeSelect)
convertButton.addEventListener("click", convertValues)
currencySelect.addEventListener("change", changeCurrency)