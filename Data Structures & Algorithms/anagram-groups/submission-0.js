class Solution {
    /**
     * @param {string[]} strs
     * @return {string[][]}
     */
    isAnagram(a,b){
        if(a.length != b.length){
            return false
        }
        const aSplit = a.split("")
        const bSplit = b.split("")
        const aObject = {}
        const bObject = {}
        for(let i=0;i<a.length;i++){
            aObject[aSplit[i]] = aObject[aSplit[i]] +1 || 1
            bObject[bSplit[i]] = bObject[bSplit[i]] +1 || 1
        }
        for(let key of Object.keys(aObject)){
            if(aObject[key] === bObject[key]){
                continue
            } else {
                return false
            }
        }
        return true
    }

    groupAnagrams(strs) {
        const result = []
        for(let i = 0; i<strs.length;i++){
            const current = [strs[i]]
            if(i === strs.length-1){
                result.push(current)
                return result
            }
            for(let y=i+1;y<strs.length;y++){
                if(this.isAnagram(strs[i],strs[y])){
                    current.push(strs[y])
                    strs.splice(y,1)
                    y--
                }
            }
            result.push(current)
        }
        return result
    }

}
