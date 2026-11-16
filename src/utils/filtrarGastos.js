import { TODAS } from './categorias.js'

// Devolve os gastos da categoria informada.
// TODAS devolve a lista inteira, ou seja, sem filtro.
export function filtrarGastos(gastos, categoria) {
  if (categoria === TODAS) {
    return gastos
  }

  return gastos.filter((gasto) => gasto.categoria === categoria)
}
