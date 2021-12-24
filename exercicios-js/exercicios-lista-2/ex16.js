const checarAnoBissexto = ano => ano % 4 == 0 || ano % 400 == 0 ? true : false;

console.log(checarAnoBissexto(2020))
console.log(checarAnoBissexto(2103))