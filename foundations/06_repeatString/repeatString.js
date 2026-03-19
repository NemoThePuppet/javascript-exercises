const repeatString = function(str, num) {
    let repeatString = "";
    if(num<0){
        return "ERROR"
    }
    for(let i=0;i < num; i++){
        repeatString += str;
    }
    return repeatString;
};

// Do not edit below this line
module.exports = repeatString;