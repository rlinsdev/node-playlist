// método de execução do módulo de contagem


const teste = function(inteiro1, inteiro2, inteiro3){
    console.log('entrou no teste');
    return 'este é o inteiro';
};

const counter = function(arr){
    console.log('entrou no counter');
    return `There are ${arr.length} elements in this array`;
};
// Qual é o método que quero exportar


module.exports.counter = counter;
module.exports.teste = teste;