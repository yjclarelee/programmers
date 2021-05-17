function solution(array, commands) {
  let answer = [];
  commands.forEach((elem) => {
      const [i, j, k] = elem;
      let changedArr = [...array];
      changedArr.splice(j);
      changedArr.splice(0, i-1);
      changedArr.sort((a, b) => a - b);
      answer.push(changedArr[k-1]);
  })
  return answer;
}