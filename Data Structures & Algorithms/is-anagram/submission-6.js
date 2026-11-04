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
        const sSplit = s.split("")
        const tSplit = t.split("")
        const sObject = {}
        const tObject = {}
        for(let i=0;i<s.length;i++){
            sObject[sSplit[i]] = sObject[sSplit[i]] +1 || 1
            tObject[tSplit[i]] = tObject[tSplit[i]] +1 || 1
        }
        for(let key of Object.keys(sObject)){
            console.log(sObject[key])
            console.log(tObject[key])
            if(sObject[key] === tObject[key]){
                continue
            } else {
                return false
            }
        }
        return true
        

    }
}
