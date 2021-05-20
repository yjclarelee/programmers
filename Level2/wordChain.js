function solution(n, words) {
  var answer = [];
  // 끝말이 안 맞을 때
  let i;
  for(i = 0; i < words.length - 1; i++){
      if(words[i][words[i].length - 1] != words[i+1][0]){
          answer = [(i+1) % n + 1, Math.floor((i+1)/n)+1];
          break;
      }
  }
  // 같은 단어를 말했을 때
  let wordMap = new Map();
  for(let j = 0; j < words.length; j++){
      if(!wordMap.has(words[j])) wordMap.set(words[j], 1)
      else{
          if(j <= i || !answer.length){
              return answer = [j % n + 1, Math.floor(j/n)+1];
          }
      }
  }
  return answer.length ? answer : [0, 0];
}