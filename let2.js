function letExample() {
    let x = 10;
    let y; // Declare y in the function scope

    if (x > 5) {
        y = 20; // Assign the value in the block
        console.log(x); // Output: 10
        console.log(y); // Output: 20
    }

    console.log(y); // Now, y is accessible here with its updated value
}

letExample();
