let a = 3

global.b = 123

this.c = 456
this.d = false
this.e = 'teste'

console.log(a)
console.log(global.b)
console.log(this.b)
console.log(module.exports.c)
console.log(module.exports === this)
console.log(module.exports)

//criando uma variável maluca sem usar var, let ou const!
abc = 3 //NÃO FAÇA ISSO EM CASA!!!
console.log(global.abc)

//module.exports = { c: 456, d: false, e: 'teste' }