import { formatarMoeda } from '../utils/formatarMoeda.js'

// Total dos gastos. O cálculo real entra na Missão 2; aqui só o layout.
function TotalGastos({ total = 0 }) {
  return (
    <section className="total-gastos">
      <h2 className="total-gastos__rotulo">Total</h2>
      <p className="total-gastos__valor">{formatarMoeda(total)}</p>
    </section>
  )
}

export default TotalGastos
