# Vanilla JavaScript Password Generator

This is a simple password generator implemented in vanilla JavaScript. It allows users to customize the generated password by choosing the length and including different types of characters such as special characters, numeric characters, uppercase letters, and lowercase letters.

## Features

- Customizable password length (between 8 and 12 characters).
- Option to include special characters.
- Option to include numeric characters.
- Option to include uppercase letters.
- Option to include lowercase letters.

## How to Use

1. Open the **`index.html`** file in web browser.
2. Click the "Generate Password" button.
3. Follow the prompts to customize your password:

- Enter the desired password length (between 8 and 12 characters).
- Confirm if you want to include special characters.
- Confirm if you want to include numeric characters.
- Confirm if you want to include uppercase letters.
- Confirm if you want to include lowercase letters.

4. Once the prompts are completed, your generated password will be displayed in the text box.

## Functions

### **`getPasswordOptions()`**

This function prompts the user for password options, including length and character types. It returns an object containing the selected options.

### **`getRandom(arr)`**

This function takes an array as input and returns a random element from that array.

### **`generatePassword()`**

This function utilizes the selected options from getPasswordOptions to generate a random password. It ensures that at least one character from each selected type is included in the password.

### Event Listener

The "Generate Password" button has an event listener attached to it, so clicking the button triggers the password generation process and displays the result on the page.

## License

This project is licensed under the MIT License.

Feel free to use and modify the code as needed for your own projects. If you have any suggestions or improvements, please feel free to contribute!
