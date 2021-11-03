function getUniqueCharacter(s) {
  // Write your code here
    let result = {}

    for (let i = 0; i < s.length; i++) {
        !result[s[i]] ? result[s[i]] = 1 : result[s[i]]++;
    }
    for (let key of Object.keys(result)) {
        if (result[key] === 1) {
            return s.indexOf(key) + 1;
        }
    }
    return -1;
}


console.log(getUniqueCharacter("hackthegame"));