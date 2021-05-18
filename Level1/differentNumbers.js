function solution(arr)
{
    let answer = [arr[0]];
    for(let num of arr){
        if(answer[answer.length - 1] !== num) answer.push(num);
    }  
    return answer;
}

function solution(arr){
  return arr.filter((num, idx) => num !== arr[idx+1])
}