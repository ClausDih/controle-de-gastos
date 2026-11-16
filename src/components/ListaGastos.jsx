import { formatarMoeda } from '../utils/formatarMoeda.js'

// Lista de gastos recebida por props. Sem estado: apenas desenha o que chega.
function ListaGastos({ gastos }) {
  return (
    <section className="lista-gastos">
      <h2 className="lista-gastos__titulo">Gastos</h2>

      {gastos.length === 0 ? (
        <p className="lista-gastos__vazio">Nenhum gasto cadastrado.</p>
      ) : (
        <ul className="lista-gastos__itens">
          {gastos.map((gasto) => (
            <li key={gasto.id} className="lista-gastos__item">
              <span className="lista-gastos__descricao">{gasto.descricao}</span>
              <span className="lista-gastos__categoria">{gasto.categoria}</span>
              <span className="lista-gastos__valor">
                {formatarMoeda(gasto.valor)}
              </span>
            </li>
          ))}
        </ul>
      )}
    </section>
  )
}

export default ListaGastos
