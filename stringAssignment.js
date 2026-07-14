let string = 'hello world'

string1= string.split(' ')  // to split the string to array
console.log(string1);
splitLength=(string1.length -1); //to find last word index
splitLast = string1[splitLength]  // to find length of last word

console.log(`last word is ${splitLast}`);

console.log(`length of last word is ${splitLast.length}`);


