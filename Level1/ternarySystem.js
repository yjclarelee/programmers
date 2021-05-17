function solution(n) {
  let answer = 0;
  let numIn3 = '';
  while(n >= 3){
      numIn3 = n % 3 + numIn3;
      n = Math.floor(n/3);
  }
  numIn3 = n + numIn3;
  
  let flippedNum = numIn3.split('').reverse();

  for(let i = 0; i < flippedNum.length; i++){
     answer += +flippedNum[i] * Math.pow(3, flippedNum.length - 1 - i)
  }
  return answer;
}

function solution2(n) {
  console.log(...n.toString(3));
  return parseInt([...n.toString(3)].reverse().join(''), 3);
}

solution2(7);