function solution(s) {
  let strLen = s.length;
  return strLen % 2 ? s[Math.floor(strLen/2)] : s[strLen/2-1] + s[strLen/2]
}