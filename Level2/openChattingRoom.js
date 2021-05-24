function solution(record) {
  var answer = [];
  let idMap = new Map();
  for(let log of record){
      const [command, uid, nickname] = log.split(" ");
      if(command === 'Enter' || command === 'Change'){
          idMap.set(uid, nickname);
      }
  }
  for(let log of record){
      const [command, uid, nickname] = log.split(" ");
      if(command === 'Enter') answer.push(`${idMap.get(uid)}님이 들어왔습니다.`);
      else if(command === 'Leave') answer.push(`${idMap.get(uid)}님이 나갔습니다.`)
  }
  return answer;
}