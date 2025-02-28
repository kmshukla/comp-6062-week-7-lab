document.addEventListener("input", function () {
    const numberInput = document.querySelector("#numberInput");

    numberInput.addEventListener("input", function () {
        let value = parseInt(numberInput.value, 10);

        if (value <= -10 || value >= 10) {
            alert("The number should be between -10 and 10");
        }
    });
    const fruit = {
        name: "Pear",
        color: "Green",
        taste: "Sweet"
    };

    const fruitElements = document.querySelectorAll("div p");
    fruitElements[0].innerHTML = `Name: ${fruit.name}`;
    fruitElements[1].innerHTML = `Color: ${fruit.color}`;
    fruitElements[2].innerHTML = `Taste: ${fruit.taste}`;
});
