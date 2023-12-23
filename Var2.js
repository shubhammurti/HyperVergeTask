function varExample() {
    if (true) {
        var varVariable = 'Hello';
        console.log(varVariable); // Output: Hello
        return varVariable; // Return the variable's value
    }
    // If needed, handle cases where the variable may not be defined
    return null;
}

// Assign the returned value to a variable to use it outside the function
const result = varExample();
console.log(result); // Output: Hello


