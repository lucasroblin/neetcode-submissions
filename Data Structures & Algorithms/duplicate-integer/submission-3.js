class Solution {
    /**
     * @param {number[]} nums
     * @return {boolean}
     */
    hasDuplicate(nums) {
        const count = {}
        for(const number of nums){
            count[number] = count[number]+1 || 1
        }
       const values = Object.values(count)
        for(let i = 0; i<values.length;i++){
            if(values[i]!=1){
                return true
            }
        }
        return false
    }
}
