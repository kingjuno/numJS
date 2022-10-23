class ndarray{

    getDim = function getDim(arr){
        return arr.length ? [...[arr.length], ...getDim(arr[0])] : [];
    }

    jagged = function jagged(arr){
        function _simplify_array(arr){
            if(arr instanceof Array){
                var arr_ = []
                for(let i = 0; i < arr.length; i++){
                    arr_.push(_simplify_array(arr[i]))
                }
                return arr_;
            }
            else{
                return null;
            }
        }
        return [...new Set(
            _simplify_array(arr).map(
                o => JSON.stringify(o)
            ))].map(s => JSON.parse(s)
        ).length > 1;
    }

    constructor(data, dtype='float32'){
        if(data === undefined){
            throw new Error('data is undefined');
        }
        this.data = data;
        this.dtype = dtype;
        if(this.jagged(this.data)){
            throw new Error("jagged array is not supported");
        }
        this.shape = this.size();
    }

    get(index){
        return this.data[index];
    }

    size(){
        return this.getDim(this.data);
    }

    toString(){
        return this.data;
    }

    
}

function array(data, dtype='float32'){
    return new ndarray(data, dtype);
}

module.exports = array;
