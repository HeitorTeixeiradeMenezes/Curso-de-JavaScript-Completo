function media(){
    let total = 0;
    let qtdnumeros = arguments.length;
    for(i = 0; i < qtdnumeros; i++){
        total += arguments[i];
    }
    return total / qtdnumeros;
}

console.log(media(2, 6, 3, 4, 4))