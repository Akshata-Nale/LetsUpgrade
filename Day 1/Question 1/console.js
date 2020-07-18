console.time('Time taken');
console.group('Grouped these');
console.log("Hello! This is my first assignment.");
console.error("This method is used to show error.");
console.warn("This method is used to show warning.");
console.groupEnd('Grouped these');
var a ={Name:"Tony Stark", Avenger:"Iron Man"}
var b={Name:"Steve Rogers", Avenger:"Captain America"}
var c={Name:"Thor Odinson", Avenger:"Thor"}
var d={Name:"Bruce Banner", Avenger:"Hulk"}
console.table({a,b,c,d});
console.timeEnd('Time taken');
console.count('Name');
console.log('%c LetsUpgrade', 'color:red');

console.debug();

// console.log() =Mainly used to log(print) the output to the console. We can put any type inside the log(), be it a string, array, object, boolean etc.

//console.error() =Used to log error message to the console. Useful in testing of code. By default the error message will be highlighted with red color.

//console.warn() =Used to log warning message to the console. By default the warning message will be highlighted with yellow color.

//console.time() and console.timeEnd= Whenever we want to know the amount of time spend by a block or a function, we can make use of the time() and timeEnd() methods provided by the javascript console object. They take a label which must be same, and the code inside can be anything( function, object, simple console).

//console.group() and console.groupEnd()=group() and groupEnd() methods of the console object allows us to group contents in a separate block, which will be indented. Just like the time() and the timeEnd() they also accepts label, again of same value.

//console.table()=This method allows us to generate a table inside a console. The input must be an array or an object which will be shown as a table.

//console.count()=This method is used to count the number that the function hit by this counting method.

//custom console logs=User can add Styling to the console logs in order to make logs Custom . The Syntax for it is to add the css styling as a parameter to the logs which will replace %c in the logs as shown in the example below .




//console.clear() =Used to clear the console. The console will be cleared, in case of Chrome a simple overlayed text will be printed like : ‘Console was cleared’ while in firefox no message is returned.


