// count the number of words

console.log("--- 1st Answer ---");

let str="I am learning javascript";
console.log("Total no fo words in the string are:"+str.split(' ').length);

// Remove duplicate characters from string

console.log("--- 2nd Answer ---")

// Assignment3: 
// Problem: 
// Capitalize the first letter of a string. 

console.log("--- 3rd Answer ---");

let str1="javascript";
let res=''
for(let i=0;i<=str1.length-1;i++){
    if(i===0){
        res=res+str1[i].toUpperCase();
    }
    else{
        res=res+str1[i]
    }
}
console.log(res);

// Assignment4: 
// Problem: 
// Remove all spaces from a string. 
// Input: “Welcome to learn playwright” 
// Output:”Welcometolearnplaywright” 

console.log("--- 4th Answer ---")

let str2= " Welcome to learn playwright ";
console.log(str2);
console.log(str2.trim());

// Assignment5: 
// Problem: 
// Find the number of characters in a string with and without using length.

console.log("--- 5th Answer ---")

let str3="Venkatesh";
console.log(str3.length);
let count=0;
for (let char of str3){
    count++
}
console.log(count);

// Assignment6: 
// Problem: 
// Count the number of vowels in a string. 
// Input:”Javascript” 
// Output: 3

console.log("--- 6th Answer ---");

let str4="Javascript";
let str4_final=str4.toLowerCase();
let count_vowel=0;
for(let char of str4_final){
    if(char==='a' || char==='e' || char==='i'|| char==='o' || char==='u'){
        count_vowel++
    }
}
console.log(count_vowel)

// Assignment7: 
// Problem: 
// Reverse a string with & without using the built-in reverse() method.
// Hint: Through array you can apply reverse()

console.log("--- 7th Answer ---");

let str5="Venkatesh";
let rev='';
for (let i=str5.length-1;i>=0;i--){
    rev=rev+str5.charAt(i);
}
console.log(rev);

let str6='Manikandan'
let arr=str6.split('')
let reverse= arr.reverse().join('')
console.log(reverse);