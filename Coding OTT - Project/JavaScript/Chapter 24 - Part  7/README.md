# Chapter 24: Part 7

## Task: Email Validation

Please create an email validation feature with the following requirements:

- The email input should not allow empty values and must validate the presence of `@`.
- Only the following email domains should be accepted:
  - `gmail.com`
  - `yahoomail.com`
  - `zohomail.in`

- When the user types `@`, a suggestion list should appear displaying:
  - `gmail.com`
  - `yahoomail.com`
  - `zohomail.in`

- If the user clicks on any suggestion, the selected domain should be appended to the user’s entered value.

- If the user does not select any suggestion and manually types the domain, the suggestion list should automatically hide as soon as the typed value matches any of the allowed domains.

- Once all validations are successfully met, a check icon should be displayed next to the email input field.