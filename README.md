# Password Generator

## Description

This is a simple password generator built using HTML, CSS and JavaScript. The generator is made up of a basic HTML form. The user inputs values into the form which are then read by JS. The main function within the JS file checks to see which criteria the user would like for their password and then produces one while assigning it to the `textContent` of an HTML element. A more thorough explanation of the code is provided below.

[Password Generator](https://maxfrank13.github.io/Password-Generator/)

![Photo of Password Generator](https://github.com/MaxFrank13/Password-Generator/blob/main/assets/app-photo.PNG)


## What's happening in the code

1. HTML
    - basic HTML form
        - first form section is a range input set with `min=8`, `max=128`, and a host of classes/ids to act as selectors for the JS
        - second form section provides a range of inputs with `type=checkbox` that each contain a `checked` value set to true/false depending on if the box has been filled or not; these are used by JS to determine which criteria the user would like
    - password display & buttons
        - hide class is toggled depending on state of application
    
2. CSS 
    - basic CSS reset
    - generator and form are both formatted using flexbox
        - form inputs are set up with flex grid areas
    - button is given some styles to make it look like it's actually being pressed
    - password class property `word-wrap: break-word` makes sure the password continues onto a new line if its not broken up by a space

3. JavaScript
    - entire JS waits for DOM content to load before executing any code
    - form elements and their inputs are selected and stored in variables
    - functioinality is added to buttons and other UI components
    - `getPassword` function takes in five parameters: a number and 4 boolean values
        - the number is taken from the range input in the generator form
        - the boolean values are taken from each criteria checkbox
        - a blank array and blank string are initiated in seperate variables
        - values are generated using `String.fromCharCode(Math.floor(Math.random() * 95 + 32))` which returns a random character that is either a number, uppercase letter, lowercase letter, or special character
            - `fromCharCode()` takes in a number and returns the associated UTF-16 code unit
            - numbers 32-128 are associated with numbers, uppercase letters, lowercase letters, and special characters
            - see this [Unicode chart](https://www.techonthenet.com/unicode/chart.php) for more information
        - once a random value is generated, a for loop is initiated and the value is then run through an if statement to make sure it passes the user's criteria
            - regular expressions are used with `.test()` to check each value
            - if space is chosen then `\xa0` is added as a string
            - if the value passes the test then it is pushed to the blank array
            - the foor loop runs for as long as the array's length is less than the user's input
        - the blank string is then set to the return value of `.join()` on the array
        - this newly joined string is then set to the `.textContent` of the password element in HTML