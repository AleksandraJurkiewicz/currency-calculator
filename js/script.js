{
    const welcome = () => {
        console.log("Witam z radością, bo myślałam, że nigdy mi się nie uda");
    };

    const calculateResult = (amount, currency) => {
        switch (currency) {
            case "dolar":
                return 4.38 * amount;
            case "euro":
                return 4.63 * amount;
            case "funt":
                return 5.47 * amount;
            default: "N/A";
        }
    };

    const updateResultText = (result) => {
        const resultElement = document.querySelector(".js-result");
        resultElement.innerText = result.toFixed(2);
    };

    const onFormSubmit = (event) => {
        event.preventDefault();

        const amountElement = document.querySelector(".js-amount");
        const currencyElement = document.querySelector(".js-currency");
        
        const result = calculateResult(amountElement.value, currencyElement.value);

        updateResultText(result);
    };

    const init = () => {
        const formElement = document.querySelector(".js-form");

        formElement.addEventListener("submit", onFormSubmit);

        welcome();
    };

    init();
}