import { useEffect, useState } from 'react'
import FiltroGastos from './components/FiltroGastos.jsx'
import FormularioGasto from './components/FormularioGasto.jsx'
import ListaGastos from './components/ListaGastos.jsx'
import TotalGastos from './components/TotalGastos.jsx'
import { carregarGastos, salvarGastos } from './utils/armazenamento.js'
import { calcularTotal } from './utils/calcularTotal.js'
import { TODAS } from './utils/categorias.js'
import { filtrarGastos } from './utils/filtrarGastos.js'
import './App.css'

function App() {
  // O App é o dono da lista; o formulário só avisa quando há um gasto novo.
  // O inicializador preguiçoso lê o localStorage antes da primeira renderização,
  // então a lista já aparece preenchida depois de recarregar a página.
  const [gastos, setGastos] = useState(() => carregarGastos())
  // Categoria do filtro: TODAS significa "sem filtro" (não é persistida).
  const [categoriaFiltro, setCategoriaFiltro] = useState(TODAS)

  // Sempre que a lista muda, salva no localStorage.
  useEffect(() => {
    salvarGastos(gastos)
  }, [gastos])

  function adicionarGasto(novoGasto) {
    // Forma funcional: não depende do valor atual de "gastos".
    setGastos((gastosAnteriores) => [...gastosAnteriores, novoGasto])
  }

  function removerGasto(id) {
    // Filtra pelo id para não remover o item errado se a ordem mudar.
    // A remoção age na lista completa, mesmo com filtro ativo.
    setGastos((gastosAnteriores) =>
      gastosAnteriores.filter((gasto) => gasto.id !== id),
    )
  }

  const gastosFiltrados = filtrarGastos(gastos, categoriaFiltro)
  const filtrando = categoriaFiltro !== TODAS

  // Lista e total usam o mesmo recorte, então o total acompanha o filtro.
  const total = calcularTotal(gastosFiltrados)

  return (
    <main className="app">
      <header className="app__cabecalho">
        <h1 className="app__titulo">Controle de Gastos</h1>
        <p className="app__subtitulo">Anote seus gastos e acompanhe o total.</p>
      </header>

      <div className="app__conteudo">
        <FormularioGasto onAdicionar={adicionarGasto} />

        <div className="app__painel">
          <FiltroGastos
            categoria={categoriaFiltro}
            onFiltrar={setCategoriaFiltro}
          />
          <ListaGastos
            gastos={gastosFiltrados}
            categoriaFiltro={categoriaFiltro}
            onRemover={removerGasto}
          />
          <TotalGastos total={total} filtro={filtrando ? categoriaFiltro : null} />
        </div>
      </div>
    </main>
  )
}

export default App
