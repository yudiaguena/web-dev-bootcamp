let i = 0;
let par = 0;
let impar = 0;
let positivos = 0;
let negativos = 0;

while(i <= 5){
  var valor = parseFloat(gets());
  i++
  
  if (valor % 2 == 0) {
    par  = par + 1;
  }
  if (valor % 2 != 0) {
    if (!isNaN(valor)){
      impar = impar + 1;
    }
  }
  if (valor > 0) {
    positivos = positivos + 1;
  } 
  if (valor < 0) {
    negativos = negativos + 1;
  }
}
console.log(par + " valor(es) par(es)\n" + impar + " valor(es) impar(es)");
console.log(positivos + " valor(es) positivo(s) \n" + negativos + " valor(es) negativo(s)");