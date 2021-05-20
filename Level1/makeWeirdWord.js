function solution(s) {
  return s.split(" ").map(word => {
      return word.split('').map((letter, idx) => idx % 2 ? letter.toLowerCase() : letter.toUpperCase()).join('');
  }).join(' ');
}