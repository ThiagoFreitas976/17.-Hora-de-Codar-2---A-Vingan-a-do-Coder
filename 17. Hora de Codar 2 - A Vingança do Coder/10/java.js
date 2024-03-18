var sexo = prompt("Digite o seu sexo com (m) para masculino e (f) para feminino:");

if(sexo==="m"){
  var alturam = parseFloat(prompt("Digite sua altura:"));
  alert("Seu peso ideal é " + ((72.7*alturam)-58));
}


else if(sexo==="f"){
 var alturaf = parseFloat(prompt("Digite sua altura:"));
 alert("Seu peso ideal é " + ((62.1*alturaf)-44.7));
}
