function isPrimeNumber(num){
  for(let i = 2; i < num; i++){
      if(!(num % i)) return false;
  }
  return true;
}

function solution(nums) {
  let answer = 0;
  for(let i = 0; i < nums.length; i++){
      for(let j = i+1; j < nums.length; j++){
          for(let k = j+1; k < nums.length; k++){
              if(isPrimeNumber(nums[i]+nums[j]+nums[k])) {
                  answer++;
              }
          }
      }
  }  
  return answer;
}