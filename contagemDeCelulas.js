let valor = parseInt(gets());

console.log(valor);

let notas0 = [100, 50, 20, 10, 5, 2, 1];
let notas1 = [0, 0, 0, 0, 0, 0, 0];

while (valor > 0) {
  nota = notas0.findIndex(value => value <= valor);
  notas1[nota] = Math.trunc(valor / notas0[nota]);
  valor = valor % notas0[nota];
}

console.log(notas1[0] + " nota(s) de R$ 100,00\n" + notas1[1] + " nota(s) de R$ 50,00\n" +
notas1[2] + " nota(s) de R$ 20,00\n" + notas1[3] + " nota(s) de R$ 10,00\n" + 
notas1[4] + " nota(s) de R$ 5,00\n" + notas1[5] + " nota(s) de R$ 2,00\n" + 
notas1[6] + " nota(s) de R$ 1,00");