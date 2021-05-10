function solution(nums) { 
  const kinds = new Set([...nums]);
  const half = nums.length / 2;
  return kinds.size > half ? half : kinds.size;
}