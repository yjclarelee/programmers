function getGCD(a, b){
  if(b === 0) return a;
  return getGCD(b, a%b);
}

function solution(n, m) {
  const gcd = getGCD(n, m);
  const lcm = n * m / gcd;
  return [gcd, lcm];
}
