class Solution {
    /**
     * @param {number[]} nums
     * @return {boolean}
     */
    hasDuplicate(nums) {
        let result = false
        const value = {}
        nums.forEach((num)=>{
            value[num] = value[num]+1 || 1
        })
        Object.keys(value).forEach((key)=>{
            if(value[key] > 1){
                result = true
            }
        })
        return result
    }
}
