class Solution {
    /**
     * @param {string} s
     * @param {string} t
     * @return {boolean}
     */
    isAnagram(s, t) {
        if(s.length != t.length){
            return false
        }
        let s2 = s.split("").sort()
        let t2 = t.split("").sort()
        for(let letter = 0; letter < s2.length; letter++){
            if(s2[letter] != t2[letter]){
                return false
            }
        }
        return true
    }
}
