function solution(num) {
  let answer = 0;
  while(answer < 500){
      if(num === 1) return answer;
      num % 2 ? num = num*3 + 1 : num /= 2;
      answer++;
  }
  return -1;
}