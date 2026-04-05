# Chapter 38

## Task:
Please create a project in which a text is displayed saying **"Upload your file"** along with an **upload icon**.  

When the user selects a file, the text **"Uploading..."** should be shown until the file is completely read. 

Once the upload is finished, the selected video should automatically be displayed by setting the file path into the **video tag `src`**.

After the upload is completed, the **file name** should be shown below, along with a button labeled **"Upload Another Video"**.

---

## Conditions:
- All elements should be displayed at **100% width**.
- The project must be **fully responsive** for multiple devices.

---

## Required JavaScript Concepts:
- Use **`new FileReader()`**
- Read the selected file using **`readAsDataURL()`**
- Use **`.result`** to update the video tag `src`
- Access the file using **`.files[0]`**
- Display the file name inside **`.onload`**