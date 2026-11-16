import { TODAS } from '../utils/categorias.js'
import { formatarMoeda } from '../utils/formatarMoeda.js'

// Lista de gastos recebida por props. Sem estado: apenas desenha o que chega.
// O botão "Remover" só avisa o App qual gasto sair (onRemover).
function ListaGastos({ gastos, categoriaFiltro, onRemover }) {
  const filtrando = categoriaFiltro !== TODAS

  return (
    <section className="lista-gastos">
      <h2 className="lista-gastos__titulo">Gastos</h2>

      <div className="lista-gastos__conteudo" aria-live="polite">
        {gastos.length === 0 ? (
          <p className="lista-gastos__vazio">
            {filtrando
              ? `Nenhum gasto em ${categoriaFiltro}.`
              : 'Nenhum gasto cadastrado.'}
          </p>
        ) : (
          <ul className="lista-gastos__itens">
            {gastos.map((gasto) => (
              <li key={gasto.id} className="lista-gastos__item">
                <span className="lista-gastos__descricao">
                  {gasto.descricao}
                </span>
                <span className="lista-gastos__categoria">{gasto.categoria}</span>
                <span className="lista-gastos__valor">
                  {formatarMoeda(gasto.valor)}
                </span>
                {/* Remoção por id: continua correta mesmo se a lista mudar de ordem. */}
                <button
                  type="button"
                  className="lista-gastos__remover"
                  onClick={() => onRemover(gasto.id)}
                  aria-label={`Remover gasto ${gasto.descricao}`}
                >
                  Remover
                </button>
              </li>
            ))}
          </ul>
        )}
      </div>
    </section>
  )
}

export default ListaGastos
