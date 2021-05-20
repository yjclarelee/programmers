function solution(s) {
  let numArr = s.split(" ").map(char => +char).sort((a, b) => a - b)
  return numArr[0] + " " + numArr[numArr.length - 1];
}