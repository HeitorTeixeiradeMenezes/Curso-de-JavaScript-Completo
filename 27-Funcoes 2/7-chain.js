const calc = {
    value: 0,
    som(n){
        this.value += n
        return this // possibilita o encadeamento de metodos
    },
    sub(n){
        this.value -= n
        return this
    },
    log(){
        console.log(this.value)
        return this
    }
}

calc.som(10).som(5).som(1).sub(4).sub(1).log().som(10).log()