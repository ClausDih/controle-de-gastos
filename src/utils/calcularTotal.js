// Soma os gastos em centavos (inteiros) para evitar o erro de ponto flutuante.
// Em JavaScript, 0.1 + 0.2 === 0.30000000000000004.
export function calcularTotal(gastos) {
  const centavos = gastos.reduce(
    (soma, gasto) => soma + Math.round(gasto.valor * 100),
    0,
  )

  return centavos / 100
}
