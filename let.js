// Example with let
function letExample() {
    let x = 10;
    if (x > 5) {
        let y = 20;
        console.log(x); // Output: 10
        console.log(y); // Output: 20
    }
    console.log(y); // This line will throw an error as y is not accessible here
}
 letExample();


//  let: Variables declared with let have block scope 
// (limited to the block they are declared in, like inside a loop or an if statement). They can be reassigned but not re-declared.