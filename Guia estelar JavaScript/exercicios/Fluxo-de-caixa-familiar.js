let Caixa = {
  Receita: [100],
  despesas: [123, 553, 533.7, 10],
};

function sum(array) {
  let total = 0;
  for (let value of array) {
    total += value;
  }

  return total;
}

//console.log(sum(Caixa.Receita));

function calculateBalende() {
  const SomaReceita = sum(Caixa.Receita);
  const SomaDespesas = sum(Caixa.despesas);

  var fatura = SomaReceita - SomaDespesas;
  
  const Saldo = fatura >= 0

  let balanceText = 'negativo'

  if(Saldo){
    balanceText = 'positivo'
  }





console.log(`Saldo de ${fatura.toFixed(2)}R$. Saldo ${balanceText}`);
  
}
calculateBalende()
  



