const verificarAnoBissextos = function (ano) {
    if(ano % 400 == 0){
        return true
    }
    else if(ano % 100 == 0){
        return false
    }
    else if(ano % 4 == 0){
        return true
    }
    else{
        return false
    }
}

console.log(`O referido ano é bissexto: ${verificarAnoBissextos(2018)}`)
console.log(`O referido ano é bissexto: ${verificarAnoBissextos(2016)}`)
console.log(`O referido ano é bissexto: ${verificarAnoBissextos(2000)}`)
console.log(`O referido ano é bissexto: ${verificarAnoBissextos(1000)}`)