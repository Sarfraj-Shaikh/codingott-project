// Task: 1

let editor = document.getElementById("editor");
editor.focus();

let cut = document.getElementById("cut");
cut.addEventListener("click", function () {

    editor.focus();
    document.execCommand("cut");

});

let copy = document.getElementById("copy");
copy.addEventListener("click", function () {

    editor.focus();
    document.execCommand("copy");

});

document.getElementById("paste").addEventListener("click", async () => {

    editor.focus();

    try {
        const text = await navigator.clipboard.readText();
        document.execCommand("insertText", false, text);
    } catch (err) {
        alert("Paste blocked by browser security.");
    }
});

let deleted = document.getElementById("delete");

deleted.addEventListener("click", function () {

    editor.focus();
    document.execCommand("delete");

});

let forwardDelete = document.getElementById("forwardDelete");
forwardDelete.addEventListener("click", function () {

    editor.focus();
    document.execCommand("forwardDelete");

});

let bold = document.getElementById("bold");
bold.addEventListener("click", function () {

    editor.focus();
    document.execCommand("bold");

});

let strikethrough = document.getElementById("strikethrough");
strikethrough.addEventListener("click", function () {

    editor.focus();
    document.execCommand("strikethrough");

});

let superscript = document.getElementById("superscript");
superscript.addEventListener("click", function () {

    editor.focus();
    document.execCommand("superscript");

});

function changeFont(command, value) {

    if (!value) return;

    editor.focus();

    document.execCommand("styleWithCss", false, true);
    document.execCommand(command, false, value);
}

function changeFontSize(command, value) {

    editor.focus();
    document.execCommand(command, false, value);

}

function TextColor(command, value) {
    editor.focus();
    document.execCommand("styleWithCss", false, true);
    document.execCommand(command, false, value);
}

function bgTextColor(command, value) {
    editor.focus();
    document.execCommand("styleWithCss", false, true);
    document.execCommand(command, false, value);
}

let justifyLeft = document.getElementById("justifyLeft");
justifyLeft.addEventListener("click", function () {

    editor.focus();
    document.execCommand("justifyLeft");

});

let justifyCenter = document.getElementById("justifyCenter");
justifyCenter.addEventListener("click", function () {

    editor.focus();
    document.execCommand("justifyCenter");

});

let justifyRight = document.getElementById("justifyRight");
justifyRight.addEventListener("click", function () {

    editor.focus();
    document.execCommand("justifyRight");

});

let justifyFull = document.getElementById("justifyFull");
justifyFull.addEventListener("click", function () {

    editor.focus();
    document.execCommand("justifyFull");

});

let insertOrderedList = document.getElementById("insertOrderedList");
insertOrderedList.addEventListener("click", function () {

    editor.focus();
    document.execCommand("insertOrderedList");

});

let insertUnorderedList = document.getElementById("insertUnorderedList");
insertUnorderedList.addEventListener("click", function () {

    editor.focus();
    document.execCommand("insertUnorderedList");

});

let outdent = document.getElementById("outdent");
outdent.addEventListener("click", function () {

    editor.focus();
    document.execCommand("outdent");

});

let insertParagraph = document.getElementById("insertParagraph");
insertParagraph.addEventListener("click", function () {

    editor.focus();
    document.execCommand("insertParagraph");

});

let insertLineBreak = document.getElementById("insertLineBreak");
insertLineBreak.addEventListener("click", function () {

    editor.focus();
    document.execCommand("insertLineBreak");

});

function paraSeprator(value) {
    editor.focus();
    document.execCommand("defaultParagraphSeparator", false, value);
}

let createLink = document.getElementById("createLink");
createLink.addEventListener("click", function () {

    editor.focus();
    let url = prompt("Enter URL:");
    if (url) {
        document.execCommand("createLink", false, url);
    }

});

let unlink = document.getElementById("unlink");
unlink.addEventListener("click", function () {

    editor.focus();
    document.execCommand("unlink");

});

let insertImage = document.getElementById("insertImage");
insertImage.addEventListener("click", function () {

    editor.focus();
    let imgUrl = prompt("Enter Image URL:");
    if (imgUrl) {
        document.execCommand("insertImage", false, imgUrl);
    }

});

let insertHorizontalRule = document.getElementById("insertHorizontalRule");
insertHorizontalRule.addEventListener("click", function () {

    editor.focus();
    document.execCommand("insertHorizontalRule");

});

let insertHTML = document.getElementById("insertHTML");
insertHTML.addEventListener("click", function () {

    editor.focus();
    let htmlCode = prompt("Enter HTML Code:");
    if (htmlCode) {
        document.execCommand("insertHTML", false, htmlCode);
    }

});

let insertText = document.getElementById("insertText");
insertText.addEventListener("click", function () {

    editor.focus();
    let text = prompt("Enter Text:");
    if (text) {
        document.execCommand("insertText", false, text);
    }

});

let undo = document.getElementById("undo");
undo.addEventListener("click", function () {

    editor.focus();
    document.execCommand("undo");

});

let redo = document.getElementById("redo");
redo.addEventListener("click", function () {

    editor.focus();
    document.execCommand("redo");

});

let selectAll = document.getElementById("selectAll");
selectAll.addEventListener("click", function () {

    editor.focus();
    document.execCommand("selectAll");

});

let formatBlock = document.getElementById("formatBlock");

formatBlock.addEventListener("change", function () {
    let value = this.value;
    if (value) {
        editor.focus();
        document.execCommand("formatBlock", false, value);
    }
});