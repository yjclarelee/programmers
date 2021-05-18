function solution(s){
  let textArr = s.toLowerCase().split('');
  let pNum = textArr.filter(letter => letter === 'p').length;
  let yNum = textArr.filter(letter => letter === 'y').length;
  return pNum === yNum;
}