let protoArray1 = "3,6,9,12";
let protoArray2 = "A;C;M;E";
let protoArray3 = "space delimited string";
let protoArray4 = "Comma-spaces, might, require, typing, caution";

strings = [protoArray1, protoArray2, protoArray3, protoArray4];

//a) Use the 'includes' method to check to see if the words in each string are separated by commas (,), semicolons (;) or just spaces.

if(protoArray1.includes(',')){
console.log('Array 1 is seperated by commas');
} else if (protoArray1.includes(';')){
console.log('Array 1 is seperated by semicolons');
} else if(protoArray1.includes(' ')){
  console.log('Array 1 is seperated by spaces')
}

if(protoArray2.includes(',')){
console.log('Array 2 is seperated by commas');
} else if (protoArray2.includes(';')){
console.log('Array 2 is seperated by semicolons');
} else if(protoArray2.includes(' ')){
  console.log('Array 2 is seperated by spaces')
}

if(protoArray3.includes(',')){
console.log('Array 3 is seperated by commas');
} else if (protoArray3.includes(';')){
console.log('Array 3 is seperated by semicolons');
} else if(protoArray3.includes(' ')){
  console.log('Array 3 is seperated by spaces')
}

if(protoArray4.includes(',')){
console.log('Array 4 is seperated by commas');
} else if (protoArray4.includes(';')){
console.log('Array 4 is seperated by semicolons');
} else if(protoArray4.includes(' ')){
  console.log('Array 4 is seperated by spaces')
}


//b) If the string uses commas to separate the words, split it into an array, reverse the entries, and then join the array into a new comma separated string.

if(protoArray1.includes(',')){
let tempArray = protoArray1.split(',');
tempArray.reverse();
console.log(tempArray)
} 

if(protoArray2.includes(',')){
let tempArray = protoArray2.split(',');
tempArray.reverse();
console.log(tempArray)
}

if(protoArray3.includes(',')){
let tempArray = protoArray3.split(',');
tempArray.reverse();
console.log(tempArray);
} 


 if(protoArray4.includes(',')){
let tempArray = protoArray4.split(',');
tempArray.reverse();
console.log(tempArray)
}


//c) If the string uses semicolons to separate the words, split it into an array, alphabetize the entries, and then join the array into a new comma separated string.
if(protoArray1.includes(';')){
let tempArray = protoArray1.split(';');
tempArray.sort();
console.log(tempArray)
} 

if(protoArray2.includes(';')){
let tempArray = protoArray2.split(';');
tempArray.sort();
console.log(tempArray)
}

if(protoArray3.includes(';')){
let tempArray = protoArray3.split(';');
tempArray.sort();
console.log(tempArray);
} 


 if(protoArray4.includes(';')){
let tempArray = protoArray4.split(';');
tempArray.sort();
console.log(tempArray)
}


//d) If the string uses spaces to separate the words, split it into an array, reverse alphabetize the entries, and then join the array into a new space separated string.
if(protoArray1.includes(' ')){
let tempArray = protoArray1.split(' ');
tempArray.sort();
tempArray.reverse();
console.log(tempArray)
} 

if(protoArray2.includes(' ')){
let tempArray = protoArray2.split(' ');
tempArray.sort();
tempArray.reverse();
console.log(tempArray)
}

if(protoArray3.includes(' ')){
let tempArray = protoArray3.split(' ');
tempArray.sort();
tempArray.reverse();
console.log(tempArray);
} 


 if(protoArray4.includes(' ')){
let tempArray = protoArray4.split(' ');
tempArray.sort();
tempArray.reverse();
console.log(tempArray)
}



//e) If the string uses ‘comma spaces’ to separate the list, modify your code to produce the same result as part “b”, making sure that the extra spaces are NOT part of the final string.

if(protoArray1.includes(',')){
let tempArray = protoArray1.split(',');
tempArray.reverse();
console.log(tempArray)
} 

if(protoArray2.includes(',')){
let tempArray = protoArray2.split(',');
tempArray.reverse();
console.log(tempArray)
}

if(protoArray3.includes(',')){
let tempArray = protoArray3.split(',');
tempArray.reverse();
console.log(tempArray);
} 


 if(protoArray4.includes(',')){
let tempArray = protoArray4.split(',');
tempArray.reverse();
console.log(tempArray)
}