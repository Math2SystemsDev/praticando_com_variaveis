// exercício 01
//entrada de dados
const valorLitroGasolina = 6.80;
var valorDaCompra = prompt('Quanto deseja comprar de gasolina ? ');
//processamento
valorDaCompra = valorDaCompra / valorLitroGasolina;
//saída
alert('O Cliente abasteceu: ' + valorDaCompra + ' Litros');

// --------------------------------------------------------------------

// exercício 02
var temperaturaGC = parseInt(prompt('digite a temperatura: '));

var Fahrenheit = ((9 * temperaturaGC) + 160) / 5;

alert('O valor '+ temperaturaGC +' em Fahrenheit é '+ Fahrenheit);

// --------------------------------------------------------------------

//exercício 03
var temperaturaFH = parseInt(prompt('Digite a temperatura: '));

var grauCelsius = ((temperaturaFH - 32) * 5) / 9;

alert('O valor '+ temperaturaFH + ' em Celsius é: '+ grauCelsius);

// --------------------------------------------------------------------

//exercício 04
var comprimento = parseInt(prompt('Digite o comprimento: ')),
largura = parseInt(prompt('Digite a largura: ')), 
altura = parseInt(prompt('Digite a altura'));

var volume = comprimento * largura * altura;

alert('A área da caixa é: ' + volume );

// --------------------------------------------------------------------

//exercício 05
var numeroInteiro = parseInt(prompt('Digite um numero inteiro: '));

var aoQuadrado = Math.pow(numeroInteiro, 2);

alert('O numero: ' + numeroInteiro + ' ao quadrado é: '+ aoQuadrado);

// --------------------------------------------------------------------

//exercício 06
var z = parseInt(prompt('Digite o 1° número: '));
var x = parseInt(prompt('Digite o 2° número: '));
var c = parseInt(prompt('Digite o 3° número: '));
var a = parseInt(prompt('Digite o 4° número: '));
var b = parseInt(prompt('Digite o 5° número: '));

var soma = a + b + c + z + x;
var media = (a + b + c + z + x) / 5;

alert('A soma dos valores informados é: ' + soma + ' e a média das notas é: ' + media);

// --------------------------------------------------------------------

//exercício 07
var n1 = parseInt(prompt('Digite o primeiro número: '));
var n2 = parseInt(prompt('Digite o segundo número: '));

var restoDaDivisão = n1 % n2;

alert('O resto da divisão de '+n1+' Por '+n2+' é '+ restoDaDivisão);

// --------------------------------------------------------------------

//exercício 08 
var palavraOuFrase = prompt('Digite uma palavra ou frase: ');

alert('Essa texto contém '+palavraOuFrase.length+' caractéres');

// --------------------------------------------------------------------

//exercício 09
var palavraOuFrase2 = prompt('Digite uma palavra ou frase: ');

alert('A primeira letra deste texto é: '+ palavraOuFrase2[0].toUpperCase() +
' e a ultima letra é : '+ palavraOuFrase2.slice(-1));

// --------------------------------------------------------------------

//exercício 10
var nome = prompt('Digite o nome: ');
var sobreNome = prompt('Digite o sobrenome: ');
var idade = prompt('Digite a idade: ');
var setor = prompt('Digite o setor: ');


alert('Nome: '+nome[0].toUpperCase()+nome.substring(1)+' '+
sobreNome[0].toUpperCase()+sobreNome.substring(1)+
' - idade: '+idade+' - setor: '+setor[0].toUpperCase()+setor.substring(1));

