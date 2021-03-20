# Password-generator

## Description

The password generator works by providing a prompt to the user to collect the number of characters they would like to have in their password.

At this point, if the password is between 8 and 128 characters, the functions continue to run. If this is not the case, an alert is sent to the user to remind them how many characters they are permitted to choose.

A series of confirms are invoked that ask the user what character types they would like in their password.

A function called optionsArray is then run to create an array full of the character types the user has chosen.

This optionsArray then gets passed into another function to choose the order in which the characters are selected.

Another function runs, once this random choice index has been returned, which randomly selects characters from this randomChoiceArray.

This randomChoiceArray is passed through another function that selects random characters from this array.

This function gets defined in the variable passwordArray, which is then joined together and returned.
The user is able to see their randomly generated password.

## Screenshots

Here are some screenshots showing the functionality of the password generator, with no errors in the console.

## Link to repository

https://github.com/SyreetaC/Password-generator

## Deployed link to application

https://syreetac.github.io/Password-generator/
