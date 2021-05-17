function solution(array, commands) {
  let answer = [];
  for(let command of commands){
      const [i, j, k] = command;
      const tempArr = array.slice(i-1, j);
      tempArr.sort((a, b) => a - b);
      answer.push(tempArr[k-1]);
  }
  return answer;
}