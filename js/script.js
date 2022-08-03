console.log("Witam z radością, bo myślałam, że nigdy mi się nie uda");
let amountElement = document.querySelector(".js-amount");
let formElement = document.querySelector(".js-form");
let currencyElement = document.querySelector(".js-currency")
let resultElement = document.querySelector(".js-result");


formElement.addEventListener("submit", (event) => {
    event.preventDefault();

    let amount = amountElement.value;
    let currency = currencyElement.value;
    let result;

    switch (currency) {
        case "dolar":
            result = 4.38 * amount;
            break
        case "euro":
            result = 4.63 * amount;
            break
        case "funt":
            result = 5.47 * amount;
            break
        default: "N/A"
    }
    resultElement.innerText = result.toFixed(2);
})