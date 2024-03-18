function calcularidade(){
  var idade = parseFloat(prompt("Digite o seu ano de nascimento:"));
  if(idade<=2006){
    alert("Você pode votar!");
    calcularidade();
  }
  else if(idade>2006){
    alert("Você não pode votar!");
    calcularidade();
  }
  }
  calcularidade();