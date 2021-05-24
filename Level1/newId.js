function solution(new_id) {
  let answer = new_id.toLowerCase()
                      .replace(/([^a-z0-9-_.])/g, '')
                      .replace(/\.+/g, '.')
                      .replace(/^\.|\.$/g, '')
  if(!answer) answer = 'a';
  answer = answer.slice(0, 15).replace(/\.$/g, '');
  while(answer.length < 3){
      answer += answer[answer.length - 1];
  }
  return answer;
}