/******************* Question 1****************
Define an array of numbers (use any random numbers). Write a program in Javascript to print only the even numbers of the array. Do not use any 
library functions, need to do via for loops only
*******************************************/
const arr = [1,4,7,6,8,11,10];

for(let i=0;i<arr.length;i++){
	if(arr[i]%2==0){
  		console.log(arr[i]);
  }
}