//Length
let text = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
let length = text.length;
console.log(length);
//Slice()
let text2 = "Apple, Banana, Kiwi";
let part = text2.slice(7, 13);
console.log(part);
//Substring()
let part2 = text2.substring(7, 13);
console.log(part2);
//Substr()
let part3 = text2.substr(7, 2);
//substr() is similar to slice().
//The difference is that the second parameter specifies the length of the extracted part.
console.log(part3);