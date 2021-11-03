//Declare a function named reverseString() that takes in a parameter into the function.
function reverseString(str) {
//Create a variable that will be passed into the function.
let rev = "";
//rev will contain an empty string.
//Now create a for loop that will be initiated based on the strings length.
for (let i = str.length - 1; i >= 0 ; i--){
    rev += str[i]
//i is initiated based on the strings length and the  
}
console.log(rev)
}
reverseString("hello")