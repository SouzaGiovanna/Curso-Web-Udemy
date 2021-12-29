const segundoMaior = lista => {
    lista.sort(function (a, b){
        if(a < b) return -1;
        if(a > b) return 1;
        return 0;
    });

    console.log(lista)
    return lista[lista.length - 2];
}

console.log(segundoMaior([12, 16, 1, 5]))
console.log(segundoMaior([8, 4, 5, 6]))