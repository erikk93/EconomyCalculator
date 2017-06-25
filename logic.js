function calculate() {
    var income1Input = document.getElementById("income1Input");
    var income2Input = document.getElementById("income2Input");
    var spending1Input = document.getElementById("spending1Input");
    var spending2Input = document.getElementById("spending2Input");

    var income1 = parseInt(income1Input.value);
    var income2 = parseInt(income2Input.value);
    var spending1 = parseInt(spending1Input.value);
    var spending2 = parseInt(spending2Input.value);

    if (isNaN(income1)) {
        income1 = 0;
    } if (isNaN(income2)) {
        income2 = 0;
    } if (isNaN(spending1)) {
        spending1 = 0;
    } if (isNaN(spending2)) {
        spending2 = 0;
    }

    var totalIncomeText = document.getElementById("totalIncomeText");
    var totalIncome = income1 + income2;
    totalIncomeText.innerText = totalIncome + " kr";

    var totalSpendingText = document.getElementById("totalSpendingText");
    var totalSpending = spending1 + spending2;
    totalSpendingText.innerText = totalSpending + " kr";

    var income1Percentage = income1 / totalIncome;
    var income2Percentage = income2 / totalIncome;
    var shouldHavePaid1 = totalSpending * income1Percentage;
    var shouldHavePaid2 = totalSpending * income2Percentage;

    printResultTexts(shouldHavePaid1, spending1, shouldHavePaid2, spending2);
}

function printResultTexts(shouldHavePaid1, spending1, shouldHavePaid2, spending2) {
    var resultText = document.getElementById("resultText");
    var whoOwesWhoText = document.getElementById("whoOwesWhoText");

    var person1OwesPerson2 = shouldHavePaid1 > spending1;
    var person2OwesPerson1 = shouldHavePaid1 < spending1;

    if (person1OwesPerson2) {
        resultText.innerText = (shouldHavePaid1 - spending1).toFixed(0); + " kr";
        whoOwesWhoText.innerHTML = "<b>Person 1</b> är skyldig <b>person 2</b>";
    } else if (person2OwesPerson1) {
        resultText.innerText = (shouldHavePaid2 - spending2).toFixed(0); + " kr";
        whoOwesWhoText.innerHTML = "<b>Person 2</b> är skyldig <b>person 1</b>";
    } else {
        resultText.innerText = "Ni är kvitt";
    }

    showResultContainer();    
}

function showResultContainer() {
    var resultContainer = document.getElementById("resultContainer");
    resultContainer.style.display = "";
}