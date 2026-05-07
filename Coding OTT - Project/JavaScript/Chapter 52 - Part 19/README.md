## Chapter 52 – Part 19

### Task:
Ek aisa project develop karna hai jisme PDF Converter functionality ho.
Is functionality ke through kisi specific page ya web page ko PDF format me convert kiya ja sake.
Requirements:

**PDF generation ke liye following libraries ka use karna hoga:**
- jQuery
- html2canvas
- jsPDF (CDN)

### Implementation Logic:
PDF create karne ke liye jsPDF ka object initialize karna hoga:

```

let pdf = new jsPDF('p', 'pt', 'a4');

```

Kisi specific section ka PDF generate karne ke liye:

```

pdf.addHTML(document.body, function () {

    pdf.save("file.pdf");

});

```

### Note:
`save()` function ke andar jo string pass ki jayegi wahi download hone wale PDF ka file name hoga.
Function ke andar target section define karna hoga jiska PDF generate karna hai.