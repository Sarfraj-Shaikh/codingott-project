## Q1. Text Style Controller

### Ek webpage banao jisme:

### Ek paragraph ho Neeche buttons / select options ho jo:

1 • Font size increase / decrease karein
2 • Text color change karein
Bold aur Normal ke beech toggle karein
3 • Text alignment left, center aur right karein

## Conditions:
• Har action onclick event se ho
• CSS properties JavaScript se change ho
• Ek hi paragraph par multiple buttons ka effect pade

## Q2. Theme Switcher

### Ek page design karo jisme:

1 • 3 buttons ho: Light, Dark, Blue
2 • Kisi bhi button par click karne par:
• Page ka background color change ho
• Text color change ho
• Buttons ka color bhi change ho

## Conditions:
• Sirf onclick use karo
• Elements ko getElementById se select karo
• style.backgroundColor aur • style.color ka use ho

## Q3. Password Strength Indicator

### Ek password input field banao jisme:

1 • User jaise-jaise type kare, password strength show ho

## Rules:
Length < 5 → Weak
Length 5–8 → Medium
Length > 8 → Strong

## Conditions:
• onkeyup ya onchange event use ho
• Strength text ya color ke form me dikhni chahiye
• Logic input.value.length se implement ho

## Q4. Input Live Preview

### Ek webpage banao jisme:

1 • Ek text input ho
2 • Neeche ek preview box ho

## Behaviour:
1 • User jo bhi type kare, wahi text real-time preview box me dikhe

## Conditions:
• onkeyup event use ho
• innerText ya innerHTML ka use ho
• Page reload nahi hona chahiye

## Q5. Form Validation

### Ek form design karo jisme:

1 • Name
2 • Email
3 • Password
Submit button ho

## Validation Rules:
1 • Koi field empty ho → error message show ho
2 • Password length < 6 ho → error message show ho

## Conditions:
• .value se input read ho
• Error messages DOM me show/hide ho
• alert() use karna mana hai
• Form submit par page reload nahi hona chahiye