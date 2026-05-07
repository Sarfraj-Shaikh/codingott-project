function savePDF() {

    let pdfFileName = document.getElementById("pdfFileName");

    if (pdfFileName.value.trim() === "") {

        console.error("Enter File Name");
        pdfFileName.style.borderColor = "#FF0000";

    } else {

        pdfFileName.style.borderColor = "inherit";

        // SAVING PDF

        let pdf = new jsPDF('p', 'pt', 'a4');

        pdf.addHTML(document.body, function () {

            pdf.save(pdfFileName.value.trim() + ".pdf");

        });

    }
}