import { formatarMoeda } from '../utils/formatarMoeda.js'

// Total dos gastos. Quando há filtro ativo, o rótulo mostra a categoria.
function TotalGastos({ total = 0, filtro = null }) {
  const rotulo = filtro ? `Total · ${filtro}` : 'Total'

  return (
    <section className="total-gastos">
      <h2 className="total-gastos__rotulo">{rotulo}</h2>
      <p className="total-gastos__valor">{formatarMoeda(total)}</p>
    </section>
  )
}

export default TotalGastos
