function solution(arr) {
  if(arr.length < 2) return [-1];
  arr.splice(arr.indexOf(Math.min(...arr)), 1);
  return arr;
}