let idade = 16;
let pais = true;
let ingresso = false;
const podeviajar = (idade >= 18 || pais == true) && ingresso == true  ;
console.log(`pode viajar: ${podeviajar}`);
if(podeviajar == true){
    console.log(`pode viajar de boa`)
}  else if(idade < 18 && pais == false) {
    console.log(`menor de idade parca e sem pai`)
    } else if(ingresso == false){
            console.log(`sem passagem nao vai doidao`)
        }
        
        
        

