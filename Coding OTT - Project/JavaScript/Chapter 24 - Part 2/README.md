# Chapter 24: Part 2

## Task Description

Please create a project that includes a form with multiple input fields. The form should contain the following fields:

- First Name  
- Last Name  
- Email  
- Phone  
- Username  
- Password  
- Confirm Password  

Additionally, the **Submit** button must be present but should remain **disabled by default** using the `disabled` attribute.

---

## Conditions

- When the user clicks on any input field **other than the First Name**, the system should first check whether the **First Name** field has been filled or not.

- If the **First Name field is empty**, the following actions must be performed using **setAttribute** and **ternary operators**:
  - The input value should be updated accordingly.
  - An **empty value message** should be displayed.
  - An **error message** should appear inside a `<p>` tag.
  - The input field, its border, and the error message text should turn **red**.
  - An animation from **animate.css** should be applied to the input or error message.

- If the **First Name field is filled correctly**:
  - A **check icon** should appear next to the input field.
  - The input text color and border color should change to **black**.
  - The error message should be hidden.

---

## Additional Requirements

- There must be **one separate function** for performing validation checks.
- There must be **another separate function** for removing validation and error states.