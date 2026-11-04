class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number[]}
     */
    twoSum(nums, target) {
        const result = []
        for(let i = 0; i < nums.length-1; i++){
            for(let y = i+1; y < nums.length; y++ ){
                if(nums[i] + nums[y] === target){
                    result.push(i)
                    result.push(y)
                    return result
                }
            }
        }



    }
}
