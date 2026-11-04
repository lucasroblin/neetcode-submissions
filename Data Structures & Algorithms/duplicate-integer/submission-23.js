class Solution {
    /**
     * @param {number[]} nums
     * @return {boolean}
     */
    hasDuplicate(nums) {
        let final = {}
        for(let num=0; num < nums.length; num++){
            final[nums[num]] = (final[nums[num]] ?? 0) + 1;
            if (final[nums[num]]>1){
                return true
            }
        }
        return false

    }
}
