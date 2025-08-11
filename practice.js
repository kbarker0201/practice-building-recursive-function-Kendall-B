function reverseString(string) {
    if (string.length === 1) { //Base case
        return string;
    }
    return string[string.length - 1] + reverseString(string.slice(0, -1)); //Recursive case
}

console.log(reverseString("Hello"));
console.log(reverseString("Kendall"));
console.log(reverseString("LaunchCode"));
console.log(reverseString("A"));