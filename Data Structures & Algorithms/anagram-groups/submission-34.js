class Solution {
    /**
     * @param {string[]} strs
     * @return {string[][]}
     */
    groupAnagrams(strs) {
        let response = []
        if(strs.length <= 1){
            return [strs]
        }
        let processed = new Set()
        for(let word = 0; word<strs.length-1;word++){
            let currentWord = [strs[word]]
            console.log(currentWord)
            if(processed.has(word)){
                continue
            }
            for(let word2 = word+1; word2<strs.length;word2++){
                if(processed.has(word2)){
                continue
                }
                if(this.isAnagram(strs[word],strs[word2])){
                    currentWord.push(strs[word2])
                    processed.add(word).add(word2)
                }
            }
            console.log("pushing", currentWord)
            response.push(currentWord)
        }
        return response
    }

    isAnagram(word1,word2){
        if(word1.length !== word2.length){
            return false
        }
        const str1 = word1.split("").sort()
        const str2 = word2.split("").sort()
        for(let letter = 0; letter<str1.length; letter++){
            if(str1[letter] !== str2[letter]){
                return false
            }
        }
        return true
    }
}
