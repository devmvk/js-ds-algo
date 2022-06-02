/*
Reverse words in a given string
https://practice.geeksforgeeks.org/problems/reverse-words-in-a-given-string5459/1#

Given a String S, reverse the string without reversing its individual words. Words are separated by dots.

*/

function reverseStringWords(value){
    return value.split(".").reverse().join('.')   
}

console.log(reverseStringWords("madupu"))