// Task: 1

function autoFocus(input, nextInput) {

    if (input.value.length === 4) {

        let next = document.getElementById(nextInput);
        next.focus();

    };

};

function moveBack(event, input, backInput) {

    if (event.key === "Backspace" && input.value.length === 0) {

        let back = document.getElementById(backInput);
        back.focus();

    };

};