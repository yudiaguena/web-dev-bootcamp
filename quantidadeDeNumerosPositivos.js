let i = 1;
let positivo = 0;

while(i <= 6){
  var linha = parseFloat(gets());
  i++
  if(linha > 0) {
    positivo = positivo + 1;
  }
}

console.log(positivo + " valores positivos");