function solution(arr, divisor) {
  const answer = arr.filter(elem => !(elem % divisor));
  return answer.length ? answer.sort((a, b) => a - b) : [-1];
}