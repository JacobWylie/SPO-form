# SPO recruitment task for junior front-end developers

## Make a registration form

Please show your knowledge and experience of creating a form. Please choose ReactJS as a library/framework which will help you to get the work done.
Please demonstrate your ability to work with React and use the best practices of developing applications using React.


### Technical requirements

1. When the application is started the user sees a registration form.

2. Input data validation should be done for each field once the user finishes his/her input and once again for all data just when the submit button will be clicked by the user. In case of validation errors the messages should be displayed below the invalid field.


3. After the user files only **valid data** and clicks on the submit button the alert box will pop up with the input data.

### Validation rules

* All fields are mandatory

1. **First Name** - should contain only small and capital letters, no numbers, special characters, etc.
1. **Last Name** - same as the **First Name**
1. **Username** - should contain only small letters. May contain also numbers, the "." and "\_" characters
1. **Password** - should contain anything and should be more than 8 characters in length
1. **Email** - must be a valid email address


# My solution

#### Live Demo: [https://jacobwylie.github.io/SPO-form/](https://jacobwylie.github.io/SPO-form/)

#### Form Repo: [https://github.com/JacobWylie/SPO-form](https://github.com/JacobWylie/SPO-form)

#### API Repo: [https://github.com/JacobWylie/SPO-form-api](https://github.com/JacobWylie/SPO-form-api)

#### API Entry: [https://jacobwylie.com/api/accounts](https://jacobwylie.com/api/accounts)


## Install and run locally

#### Clone repo

```

git clone https://github.com/JacobWylie/SPO-form.git
cd SPO-form

```

#### Install modules

```

npm install
npm start

```

#### Navigate to http://localhost:8085/ in your browser


## Features

* User registration form with required fields

* Form validation in accordance with mandatory rules

* Red text and input border informing user of error or invalid entry parameters

* Submit button disabled and then enabled once all form fields are valid

* Backend API built with node, express, and mongoDB to handle data for this exercise

* On submit, user is taken to component with list of all accounts created

* User can go to show component for individual accounts

* User can delete accounts

* Navigation between components


** API Routes

| Endpoint                                  | Method          | Description                              | 
| ---------------------------------------   |:---------------:| ----------------------------------------:|
| https://jacobwylie.com/api/accounts       | GET             | Return JSON data of all accounts         |
|                                           |                 |                                          |
| https://jacobwylie.com/api/accounts       | POST            | Create new account. Returns account data |
|                                           |                 |                                          |
| https://jacobwylie.com/api/accounts/:id   | GET             | Fetches single account from :id          |
|                                           |                 |                                          |
| https://jacobwylie.com/api/accounts/:id   | DELETE          | Delete single account from :id           |
|                                           |                 |                                          |



































