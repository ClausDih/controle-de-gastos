import FormularioGasto from './components/FormularioGasto.jsx'
import ListaGastos from './components/ListaGastos.jsx'
import TotalGastos from './components/TotalGastos.jsx'
import './App.css'

// Dados de exemplo apenas para o layout ficar visível.
// Na Missão 1 esta constante vira o estado (useState) da lista de gastos.
const gastosExemplo = [
  { id: 1, descricao: 'Almoço no restaurante', valor: 32.5, categoria: 'Alimentação' },
  { id: 2, descricao: 'Passagem de ônibus', valor: 4.4, categoria: 'Transporte' },
  { id: 3, descricao: 'Cinema com amigos', valor: 25, categoria: 'Lazer' },
]

function App() {
  return (
    <main className="app">
      <header className="app__cabecalho">
        <h1 className="app__titulo">Controle de Gastos</h1>
        <p className="app__subtitulo">Anote seus gastos e acompanhe o total.</p>
      </header>

      <div className="app__conteudo">
        <FormularioGasto />

        <div className="app__painel">
          <ListaGastos gastos={gastosExemplo} />
          {/* Total fixo em zero: o cálculo com reduce entra na Missão 2. */}
          <TotalGastos total={0} />
        </div>
      </div>
    </main>
  )
}

export default App
