// String
let str1 = "Hello there! I am Akshata."
console.log(str1);
let str2 = "I love LetsUpgrade."
console.log(str2);

// substring()	extracts the characters from a string, between two specified indices.
console.log(str1.substring(0,12));

// The slice() method extracts parts of a string and returns the extracted parts in a new string.
console.log(str1.slice(0,12));

// replace() method Searches a string for a specified value, or a regular expression, and returns a new string where the specified values are replaced
console.log(str1.replace('there','LetsUpgraders'));

// concat() method Joins two or more strings, and returns a new joined strings
console.log(str1.concat(str2));


// Array methods
let arr1 = ['A','B','C','D','E']
let arr2 = ['1','2','3','4','5']
 console.log(arr1);
 console.log(arr2);

//  splice() method removes elements without leaving holes in the array.The splice() method returns an array with the deleted items.
 console.log(arr2.splice(2,2));
 
// copyWithin() Copies array elements within the array, to and from specified positions
console.log(arr2.copyWithin(2,2,3));


