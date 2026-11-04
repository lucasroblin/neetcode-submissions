class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number[]}
     */
    twoSum(nums, target) {
        for(let i =0;i<nums.length-1;i++){
            for(let y=i+1;y<nums.length;y++){
                console.log(i,y,target)
                if(nums[i] + nums[y] === target){
                    return [i,y]
                }
                continue
            }
        }
    }
}
