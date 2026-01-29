## Chapter 24: Part 3

Is task me aapse nivedan hai ki first name ke liye jo validation implement ki gayi hai, **bilkul usi tarah ki validation last name ke liye bhi apply ki jaye**.

Validation ko aur secure banane ke liye **`charAt()`** aur **`isNaN()`** functions ka istemal kiya jaye.

### Name Validation Rules
First name aur last name dono ke liye yeh ensure kiya jaye ki:
- Enter kiya gaya naam **capital letter se start ho**

Jaise hi user first name aur last name dono fill kare:
- Dono values automatically **small letters me convert hokar username input field me set ho jani chahiye**

### Mobile Number Validation
Mobile number input ke liye niche diye gaye validation add ki jaye:
- Input **empty nahi hona chahiye**
- Maximum **10 digits** tak allow ho
- Agar **Indian mobile number** ke liye registration ho raha hai, to number **9, 8, ya 7 se start hona chahiye**

### Common Validation Behavior
- Agar kisi bhi input field ki validation complete nahi hoti hai:
- Input ka **border red color** me ho
- **Error message red color** me display ho
- Jab validation successfully complete ho jaye:
- Input ka border **black color** me ho jaye
- Error message **hide ho jaye**
- Input ke side me **check icon show hona chahiye**