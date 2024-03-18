function calcularMedia(nota1, nota2, nota3, nota4) {
  return (nota1 + nota2 + nota3 + nota4) / 4;
  }
 
function solicita(){
var nota1 = parseFloat(prompt("Digite a primeira nota do aluno:"));
var nota2 = parseFloat(prompt("Digite a segunda nota do aluno:"));  
var nota3 = parseFloat(prompt("Digite a terceira nota do aluno:"));
var nota4 = parseFloat(prompt("Digite a quarta nota do aluno:"));

var media = calcularMedia(nota1, nota2, nota3, nota4);

if(nota1  || nota2  || nota3  || nota4<0){
alert("Este valor não é permitido. Por favor, insira outro valor.");
solicita();
}      
if(nota1 && nota2 && nota3 && nota4>10){
  alert("Este valor não é permitido. Por favor, insira outro valor.");
  solicita();
  }           
else if(media>5){
  alert("Você passou no teste");
}
else if(media<=5){
  alert("tente novamente"); 
}

}

solicita();