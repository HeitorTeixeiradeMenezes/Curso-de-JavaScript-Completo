const calcTRevealPattern = (function(){
    let n = 0

    function checkNumb(n){
        if(typeof n !== "number"){
            throw TypeError("nao e um numero")
        }
    }
    function somar(_n){
        checkNumb(_n)
        n += _n
        return this
    }
    function sub(_n){
        checkNumb(_n)
        n -= _n
        return this
    }
    function log(){
        console.log(n)
        return this
    }
    return {
        somar,
        sub,
        log
    }
})()

calcTRevealPattern.somar("12").log()