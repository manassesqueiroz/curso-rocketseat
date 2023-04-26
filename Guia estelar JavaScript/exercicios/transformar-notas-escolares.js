function notas(nota) {
  if (nota >= 90 && nota <= 100) {
    console.log("A-parabens");
  } else if (nota <= 89 && nota >= 80) {
    console.log("B- muito bom continue");
  } else if (nota <= 79 && nota >= 70) {
    console.log("C- tem que melhorar ai viu");
  } else if (nota <= 69 && nota >= 60) {
    console.log("D- Você tem que participar das aulas de reforsos");
  } else if (nota <= 59 && nota >= 0) {
    console.log("F- Preciso falar com seus responsaveis.");
  } else {
    console.log("Nota Invalida");
  }

  return nota;
}

notas(0);
notas(-1);
notas(23);
notas(1000);
notas(10302302);
notas(3232);
notas(03232);
notas(03212);
notas(033);
notas(0221);
notas(19);
nota = 120;

/*if (nota >= 90 && nota <=100) {
  console.log("A-parabens");
} else if (nota <= 89 && nota >= 80) {
  console.log("B- muito bom continue");
} else if (nota <= 79 && nota >= 70) {
  console.log("C- tem que melhorar ai viu");
} else if (nota <= 69 && nota >= 60) {
  console.log("D- Você tem que participar das aulas de reforsos");
} else if (nota <= 59 && nota >= 0) {
  console.log("F- Preciso falar com seus responsaveis.");
} else {
  console.log("Nota Invalida");
}*/
