// ## Task

function generateOutput() {
    let code = document.getElementById("codeArea").value;
    let result = document.getElementById("outputFrame");

    result.innerHTML = code;
    // result.innerHTML = `${code}`;
}