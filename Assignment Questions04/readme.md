# Q.1 Explain hoisting in JavaScript?

Ans: It might surprise you that this code outputs 'undefined' and doesn't fail or throw an error - even though 'foo' gets assigned after we 'console.log' it!

This is because the Javascript interpreter splits the declaration and assignment of functions and variables: It "hoists" your declarations to the top of their containing scope before execution.

This process is called hoisting, and it allows us to use "foo" before its declaration in our example above.

# Q.2 Explain Temporal Dead Zone?

Ans: A temporal dead zone is the block where a variable is inaccessible until the moment the computer initializes it with a value.

# Q.3 Difference between var & let?

Ans: Variables declared by let are only available inside the block where they're defined.
Variables declared by var and available throughout the function in which they're declared.

# Q.4 What are the major features introduced in ECMAScript 6

Ans:

1. let and const Keywords
2. Arrow Functions
3. Multi-Line Strings
4. Default Parameters
5. Template Literals
6. Destruction Assignment
7. Enhanced Object Literals
8. Promises

# Q.5 What is the difference between let and const ?

Ans: Var and let create variables that can be reassigned another value.
Const creates "constant" variables that cannot be reassigned another value.

# Q.6 What is template literals in ES6 and how do you use them?

Ans: Template literals are a new feature introduced in ECMAScript 2015/ES6, it provides an easy way to create multiline strings and perform strings interpolation.

# Q.7 What’s difference between map & forEach?

Ans: The forEach() method does not returns a new array based on the given array. The map() method returns an entirely new array.
The forEach() method returns the newly created according to the provided callback function.

# Q.8 How can you destructure objects and arrays in ES6?

Ans:

1. var arr = ["Hello", "World"]
2. // destructuring assignment.
3. var [first,second] = arr;
4. console.log(first); // Hello.
5. console.log(second); // World.

# Q.9 How can you define default parameter values in ES6 functions?

Ans: function getInfo (name, year = 2018, color = "blue"){//}

# Q.10 What is the purpose of the spread operator (...) in ES6?

Ans: The spread operator helps the iterable objects to expand into individual elements. Iterable objects are those on which we can to use a loop, for example, Array, Map, Set, etc. In other words, the spread operator allows us to copy all elements from the existing array or object into another array or object.
