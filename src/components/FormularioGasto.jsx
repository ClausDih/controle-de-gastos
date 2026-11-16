import { useState } from 'react'
import { CATEGORIAS } from '../utils/categorias.js'
import { converterValor } from '../utils/converterValor.js'

const CATEGORIA_PADRAO = CATEGORIAS[0]

// Formulário de cadastro de gasto.
// Os campos são controlados aqui; a lista de gastos fica no App (onAdicionar).
function FormularioGasto({ onAdicionar }) {
  const [descricao, setDescricao] = useState('')
  const [valor, setValor] = useState('')
  const [categoria, setCategoria] = useState(CATEGORIA_PADRAO)
  // erro guarda o campo problemático e a mensagem exibida na página.
  const [erro, setErro] = useState(null)

  function lidarComEnvio(evento) {
    evento.preventDefault()

    const descricaoLimpa = descricao.trim()
    if (descricaoLimpa === '') {
      setErro({ campo: 'descricao', mensagem: 'Informe uma descrição.' })
      return
    }

    const valorNumerico = converterValor(valor)
    if (!Number.isFinite(valorNumerico) || valorNumerico <= 0) {
      setErro({ campo: 'valor', mensagem: 'Informe um valor maior que zero.' })
      return
    }

    onAdicionar({
      id: crypto.randomUUID(),
      descricao: descricaoLimpa,
      // Arredonda em 2 casas para não guardar 12.500000000000002.
      valor: Math.round(valorNumerico * 100) / 100,
      categoria,
    })

    // Envio bem-sucedido: limpa o formulário e a mensagem de erro.
    setDescricao('')
    setValor('')
    setCategoria(CATEGORIA_PADRAO)
    setErro(null)
  }

  return (
    <form className="formulario-gasto" onSubmit={lidarComEnvio} noValidate>
      <h2 className="formulario-gasto__titulo">Novo gasto</h2>

      <div className="formulario-gasto__campo">
        <label htmlFor="descricao">Descrição</label>
        <input
          id="descricao"
          name="descricao"
          type="text"
          placeholder="Ex.: Almoço no restaurante"
          autoComplete="off"
          value={descricao}
          onChange={(evento) => setDescricao(evento.target.value)}
          aria-invalid={erro?.campo === 'descricao'}
        />
      </div>

      <div className="formulario-gasto__campo">
        <label htmlFor="valor">Valor</label>
        {/* type="text" + inputMode="decimal": type="number" recusaria a vírgula (12,50). */}
        <input
          id="valor"
          name="valor"
          type="text"
          inputMode="decimal"
          placeholder="0,00"
          value={valor}
          onChange={(evento) => setValor(evento.target.value)}
          aria-invalid={erro?.campo === 'valor'}
        />
      </div>

      <div className="formulario-gasto__campo">
        <label htmlFor="categoria">Categoria</label>
        <select
          id="categoria"
          name="categoria"
          value={categoria}
          onChange={(evento) => setCategoria(evento.target.value)}
        >
          {CATEGORIAS.map((nomeCategoria) => (
            <option key={nomeCategoria} value={nomeCategoria}>
              {nomeCategoria}
            </option>
          ))}
        </select>
      </div>

      {erro && (
        <p className="formulario-gasto__erro" role="alert">
          {erro.mensagem}
        </p>
      )}

      <button type="submit" className="formulario-gasto__botao">
        Adicionar
      </button>
    </form>
  )
}

export default FormularioGasto
