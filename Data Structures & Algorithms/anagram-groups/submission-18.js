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
        for(let word = 0; word<strs.length-1;word++){
            let currentWord = [strs[word]]
            for(let word2 = 1; word2<strs.length;word2++){
                if(this.isAnagram(strs[word],strs[word2])){
                    currentWord.push(strs[word2])
                    console.log(currentWord)
                }
            response.push(currentWord)
            currentWord = []
            }

        }
        return [response]
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
