// Vendo qual tipo de grau vai ser usado
function transformador(grau) {
  const GrauF = grau.toUpperCase().includes("F");
  const GrauC = grau.toUpperCase().includes("C");
  if (!GrauC && !GrauF) {
    throw new Error("Escala não informada");
  }

  //Leitor de escala
  if ((GrauF)) {
    //TRANSFORMA F -> C
    let Novograu = Number(grau.toUpperCase().replace("F", ""));
    let formula = (fahrenheit) => ((fahrenheit - 32) * 5) / 9;
    let ReferenciaC = "C";
    return formula(Novograu) + ReferenciaC;
  }
  //Leitor de escala
  else if ((GrauC)) {
    //TRANSFORMA C -> F
    let Novograu = Number(grau.toUpperCase().replace("C", ""));
    let formula = (celsius) => (celsius * 9) / 5 + 32;
    let ReferenciaC = "F";
    return formula(Novograu) + ReferenciaC;
  }
}

try {
  console.log(transformador("50c"));
  console.log(transformador("50c"));
  console.log(transformador("50h"));
  console.log(transformador("50f"))
  
} catch (error) {
  console.log(error.message);
}
;

