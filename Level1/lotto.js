function getRanking(num){
  return 7 - num < 6 ? 7 - num : 6 ;
}

function solution(lottos, win_nums) {
  var answer = [];
  // lotto 번호 중 win_nums에 있는 개수 세기
  let matchingNumber = 0;
  let numOfZeros = 0;
  for(let i = 0; i < lottos.length; i++){
      if(lottos.includes(win_nums[i])) matchingNumber++;
      if(!lottos[i]) numOfZeros++;
  }
  answer.push(getRanking(matchingNumber+numOfZeros));
  answer.push(getRanking(matchingNumber));
  
  return answer;
}

function solution(lottos, win_nums) {
  let win = [6, 6, 5, 4, 3, 2, 1];
  let matches = lottos.filter(lotto => win_nums.includes(lotto)).length;
  let blanks = lottos.filter(lotto => !lotto).length;
  return [win[matches+blanks], win[matches]];
}