/***********Question 2***************
Find the maximum consecutive 1's in an array of 0's and 1's.
Example:
a) 00110001001110 - Output :3 [Max num of consecutive 1's is 3]
b) 1000010001 - Output :1 [Max num of consecutive 1's is 1]
**************************************/

function maxOne(arr){
	let count = 0;
  let max = 0;
  for(let i=0;i<arr.length;i++){
  	if(arr[i]===1){
    	count++;
      if(count>max){
      	max=count;
      }
    }else{
      	count = 0;
      }
	}
  return max;
}
console.log(maxOne([0,0,1,1,0,0,0,1,0,0,1,1,1,0]));