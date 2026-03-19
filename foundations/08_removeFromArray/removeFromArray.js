const removeFromArray = function(...theArgs) {
    let filteredArr = theArgs[0];
    for(let i = 1; i <= theArgs.length;i++){
        filteredArr = filteredArr.filter((item) => item!==theArgs[i])
    }
    console.log(filteredArr)
    return filteredArr
};

// Do not edit below this line
module.exports = removeFromArray;
