import { useState } from 'react'
import FormularioGasto from './components/FormularioGasto.jsx'
import ListaGastos from './components/ListaGastos.jsx'
import TotalGastos from './components/TotalGastos.jsx'
import './App.css'

function App() {
  // O App é o dono da lista; o formulário só avisa quando há um gasto novo.
  const [gastos, setGastos] = useState([])

  function adicionarGasto(novoGasto) {
    // Forma funcional: não depende do valor atual de "gastos".
    setGastos((gastosAnteriores) => [...gastosAnteriores, novoGasto])
  }

  return (
    <main className="app">
      <header className="app__cabecalho">
        <h1 className="app__titulo">Controle de Gastos</h1>
        <p className="app__subtitulo">Anote seus gastos e acompanhe o total.</p>
      </header>

      <div className="app__conteudo">
        <FormularioGasto onAdicionar={adicionarGasto} />

        <div className="app__painel">
          <ListaGastos gastos={gastos} />
          {/* Total fixo em zero: o cálculo com reduce entra na Missão 2. */}
          <TotalGastos total={0} />
        </div>
      </div>
    </main>
  )
}

export default App
