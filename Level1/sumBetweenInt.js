function allSum(num){
  return num*(num+1)/2;
}

function solution(a, b) {
 return b > a ? allSum(b) - allSum(a-1) : allSum(a) - allSum(b-1);
}