## Chapter 23: RegExp

### Information

`match()` JavaScript ka ek function hota hai jo search functionalities aur *find and replace* jaise features banane ke liye use hota hai.

**RegExp** ko *Regular Expression* kaha jata hai.

---

### Syntax
/pattern/modifier

#### Pattern  
Pattern ke andar hum apni required conditions likhte hain, jaise:
- `[a-z]`
- `[A-Z]`
- `[0-9]`  
etc.

#### Modifier  
Modifier yeh define karta hai ke matching **sensitive** hogi ya **insensitive**.

- Sensitive matching ke liye `g` use hota hai  
- Insensitive matching ke liye `i` use hota hai

---

### Examples

- `/[a-z]/g`  → Sensitive matching  
- `/[A-Z]/i`  → Insensitive matching  
- `/[!@#$%^&*(),.?":{}|<>]/`
- `/[^a-zA-Z0-9]/`

---

### Task

Ek aisa project banayein jisme **RegExp** ka use karke **password validation** ki jaye.

#### Project Requirements

- Jab user input field par click kare, to ek **requirement list** show ho.
- Requirement list me following conditions hon:
  - Uppercase letter required  
  - Lowercase letter required  
  - Number required  
  - Special symbol required  
  - Minimum 6 characters length required  

#### Functionality

- `oninput` event par har condition ko **Ternary Operator** ki madad se check kiya jaye.
- Agar koi condition match ho jaye, to us condition ko requirement list me se  
  `display: none` kar diya jaye.
- Agar condition match na ho, to usay  
  `display: block` rakha jaye.
- Jab **saari conditions match** ho jayein, to input field ke side me  
  **check icon** show ho jana chahiye.

---

**Note:** Is project ka main focus RegExp, Ternary Operator, aur real-time validation ko samajhna aur implement karna hai.