import { CATEGORIAS, TODAS } from '../utils/categorias.js'

// Filtro por categoria. O estado fica no App (categoria + onFiltrar).
function FiltroGastos({ categoria, onFiltrar }) {
  const filtrando = categoria !== TODAS

  return (
    <div className="filtro-gastos">
      <div className="filtro-gastos__campo">
        <label htmlFor="filtro-categoria">Filtrar por categoria</label>
        <select
          id="filtro-categoria"
          value={categoria}
          onChange={(evento) => onFiltrar(evento.target.value)}
        >
          <option value={TODAS}>Todas as categorias</option>
          {CATEGORIAS.map((nomeCategoria) => (
            <option key={nomeCategoria} value={nomeCategoria}>
              {nomeCategoria}
            </option>
          ))}
        </select>
      </div>

      {/* Texto sempre visível dizendo qual recorte está na tela. */}
      <p className="filtro-gastos__resumo" aria-live="polite">
        Filtrando por:{' '}
        <strong>{filtrando ? categoria : 'todas as categorias'}</strong>
      </p>
    </div>
  )
}

export default FiltroGastos
