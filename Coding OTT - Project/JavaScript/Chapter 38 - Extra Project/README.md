# FileReader Projects - 1

## Project 1: Multi-image/Video Preview with Validation

**Task:**  
User multiple images or videos upload kare aur unhe preview ke sath display kare. Supported formats aur size validate karna.

**Concepts:**  
- `FileReader.readAsDataURL()`  
- Event handling (`change` event on `<input type="file">`)  
- DOM manipulation (`<img>` / `<video>` tags)  
- Validation: file type & size limit

**Implementation Steps:**  
1. HTML me `<input type="file" multiple>` aur preview `<div>` add kare.  
2. `input.addEventListener('change', callback)` set kare.  
3. Callback me:  
   - Loop through `files` array  
   - Validate `file.type` (`image/*`, `video/*`) aur `file.size` (<5MB)  
   - `FileReader.readAsDataURL(file)` call kare  
   - `onload` event me preview generate kare  
     - `<img src="reader.result">` for images  
     - `<video src="reader.result" controls>` for videos  

**Extra Challenge:**  
- Drag & drop support  
- Invalid files ke liye error message