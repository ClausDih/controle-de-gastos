// Formulário de cadastro de gasto: por enquanto só o layout, sem estado.
// A lógica (useState, validação e envio) entra na Missão 1.
function FormularioGasto() {
  return (
    <form
      className="formulario-gasto"
      // Evita que o botão recarregue a página enquanto não há lógica de envio.
      onSubmit={(evento) => evento.preventDefault()}
    >
      <h2 className="formulario-gasto__titulo">Novo gasto</h2>

      <div className="formulario-gasto__campo">
        <label htmlFor="descricao">Descrição</label>
        <input
          id="descricao"
          name="descricao"
          type="text"
          placeholder="Ex.: Almoço no restaurante"
          autoComplete="off"
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
        />
      </div>

      <div className="formulario-gasto__campo">
        <label htmlFor="categoria">Categoria</label>
        <select id="categoria" name="categoria" defaultValue="Alimentação">
          <option value="Alimentação">Alimentação</option>
          <option value="Transporte">Transporte</option>
          <option value="Lazer">Lazer</option>
          <option value="Outros">Outros</option>
        </select>
      </div>

      <button type="submit" className="formulario-gasto__botao">
        Adicionar
      </button>
    </form>
  )
}

export default FormularioGasto
