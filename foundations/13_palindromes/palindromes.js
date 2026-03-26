const palindromes = function (word) {
    word = word.toLowerCase().trim().replace(/[\.,?!\s]/g, "");
    let reversedWord = "";
    for(let i=word.length-1; i>=0;i--){
        reversedWord += word[i];
    }
    if (word === reversedWord) {
        return true;
    }
    return false;
};

// Do not edit below this line
module.exports = palindromes;
