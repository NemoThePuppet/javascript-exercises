const fibonacci = function(n) {
    if (n == 0) return 0;
    if (n < 0) return "OOPS";
    // let arr = [1, 1];
    // for(let i = 2; i<=n-1; i++){
    //   arr.push(arr[i-1] + arr[i-2]);
    //   console.log(arr)
    // }
    // return arr[n-1]

    if(n>2){
        return fibonacci(n-1)+fibonacci(n-2)
    }
    return 1;
};

// Do not edit below this line
module.exports = fibonacci;
