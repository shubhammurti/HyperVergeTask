// Example with var
function varExample() {
    if (true) {
        let varVariable = 'Hello';
        console.log(varVariable); // Output: Hello
    }
    console.log(varVariable); // Output: Hello
}
varExample();
    console.log(varVariable); // Output: ReferenceError: varVariable is not defined



    // var: Variables declared with var have function scope or global scope. 
    // They can be re-declared and updated within their scope.