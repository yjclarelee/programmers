function solution(nums) { 
  let set = new Set([...nums]);
  if(set.size >= Math.floor(nums.length/2)) return Math.floor(nums.length/2);
  else return set.size;
}

function solution(nums){
  let set = new Set(nums);
  let setSize = set.size;
  let numsHalf = Math.floor(nums.length/2);
  return setSize >= numsHalf ? numsHalf : setSize;
}