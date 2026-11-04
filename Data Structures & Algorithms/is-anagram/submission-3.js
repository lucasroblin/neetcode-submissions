class Solution {
    
    isAnagram(s, t) {
        const splittedS = JSON.stringify(s.split("").filter((letter) => letter != " ").sort())
        const splittedT = JSON.stringify(t.split("").filter((letter) => letter != " ").sort())
        if(splittedS === splittedT){
            return true
        } else {
            return false
        }
    }
}
