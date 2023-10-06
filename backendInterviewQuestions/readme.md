# 6-10-2023

# Friday

## 1. What is RDBMS? How is it different from DBMS?

- DMBS => Database Management System is a software that is used to define, create and maintin database and provides controlled access to the data
- RDMBS => Relational Database Management System => It deals with relations as well assz as various key contains

## 2. What is a Query?

- In standard English, a query means a request for information.
- In computer programming, it refers to the same thing, except the information is retrived from a database.
- However, writing a query required a set of pre-defined code to make the database understand the instruction.
- This concept is also known as the query language.

## 3. How do you handle error and exception handling in node/express application?

- Use the try-catch machanism to wrap asynchronous code in a try block and a catch block for any exceptions thrown
- Employ middleware to handle exceptions
- Create middleware to handle exceptions
- Handle errors with the default error handler provided error handling behavior.

## 4. What do you want meant by input validation and data sanitization in a backend application?

- validation checks whether an input complies with specific policies and constrains.
- If there is no validation nothing prevents an attacker from exploiting the form by entering expected inputs.
- To prevent such as a bad situation, developers must add a validation step where the data is inspected before proceeding.
- Sanitizing consists of removing any unsafe characters from user inputs, and validating will check to see if the data is in the expected format and type.
- Sanitizing modifies the input to ensure it's in a valid format for display, or before insertion in a database

## 5. How do you handle input validation and data sanitization in a backend application?

### Data Validation

- input filtering: Input filtering: We emplay strict input filtering to remove any potentially malicious characters code from user inputs. Input Filtering: We employ strict input filtering to remove any potentially malicious characters or code from user inputs.
- Data Type Checking : We validate the data against expected data types to ensure that the format is correct. For, example

- Escaping: Escaping involves modifying user input in a way that renders any special characters harmless. For example, we escape characters like like quotes or backslashes to prevent SQL injections or other injection attacks.
- Encoding converts special characters into thier respective HTML entitles, ensuring that they are displayed properly without causing any unintended behavior. This helps prevent script injection attacks and protects against XSS vunlerabilities
