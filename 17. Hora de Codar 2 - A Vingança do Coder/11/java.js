var n1 = parseFloat(prompt("Digite o primeiro número:"));
var n2 = parseFloat(prompt("Digite o segundo número:"));

var operacao = (prompt("Qual operação deseja realizar? (1) para adição, (2) para subtração, (3) para divisão e (4) para multiplicação:"));


if(operacao==="1"){
  alert("Sua operação resulta em " + (n1+n2));
}

else if(operacao==="2"){
 alert("Sua operação resulta em " + (n1-n2));
}

else if(operacao==="3"){
  alert("Sua operação resulta em " + (n1/n2));
 }

 else if(operacao==="4"){
  alert("Sua operação resulta em " + (n1*n2));
 }
 