var nj = require('./')
var array = require('./array.js');

/**
 * Create an array of the given shape and populate it with random samples 
 * from a uniform distribution over [0, 1).
 * 
 * @param  {...any} args d0, d1, d2, ..., dn
 * @returns {array} shape (d0, d1, ..., dn)
 */
function rand(...args){
    if(args == null){
        return Math.random();
    }

    var arg_length =  nj.array(args).shape.length;
    if(arg_length != 1){
        throw new Error("'array' object cannot be interpreted as an integer");
    }
    if(args.length == 1){
        var arr = [];
        for(var i=0; i<args[0]; i++){
            arr.push(Math.random());
        }
        return nj.array(arr);
    }
    else{
        var arr = [];
        for(var i=0; i<args[0]; i++){
            arr.push(rand(...args.slice(1)));
        }
        return nj.array(arr);
    }
}

console.log(rand(2, 3));
console.log(' ');
console.log(rand(2, 3));

function getRandomInt(low, high) {
    low = Math.ceil(low);
    high = Math.floor(high);
    return Math.floor(Math.random() * (high - low + 1)) + low;
}
function randint(low, high=null, size=null, dtype='int32'){
    // Args:
    //     low: int
    //     high: int or null
    //     size: tuple, int or null
    //     dtype: string
    // Returns:
    //     ndarray

    if(high == null){
        high = low;
        low = 0;
    }
    if(size == null){
        return Math.floor(Math.random() * (high - low) + low);
    }else{
        if(size.length == 1){
            var arr = [];
            for(var i=0; i<size[0]; i++){
                arr.push(Math.floor(Math.random() * (high - low) + low));
            }
            return (arr);
        }
        else{
            var arr = [];
            for(var i=0; i<size[0]; i++){
                arr.push(randint(low, high, size.slice(1)));
            }
            return (arr);
        }
    }
}

// console.log(randint(10, 20, [2,3,4]));
// // console.log(nj.random((10, 10)));