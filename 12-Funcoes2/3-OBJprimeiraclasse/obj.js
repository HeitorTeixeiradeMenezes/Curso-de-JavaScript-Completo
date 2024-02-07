function fn(gozei){
    console.log("executou fn")
    console.log(typeof gozei)
    typeof gozei === "function" && gozei()
}

function bumbum(){
    console.log("bumbum executada")
}

let cu = {
  bumbum
}

fn(bumbum)
cu.bumbum()