// Persistência dos gastos no localStorage (armazenamento do próprio navegador).
export const CHAVE_GASTOS = 'controle-gastos:gastos'

// Lê a lista salva. Qualquer problema (nada salvo, JSON inválido, storage bloqueado)
// devolve uma lista vazia para o app abrir normalmente.
export function carregarGastos() {
  try {
    const texto = localStorage.getItem(CHAVE_GASTOS)
    if (!texto) {
      return []
    }

    const dados = JSON.parse(texto)
    return Array.isArray(dados) ? dados : []
  } catch {
    return []
  }
}

// localStorage só guarda texto, por isso o JSON.stringify.
export function salvarGastos(gastos) {
  try {
    localStorage.setItem(CHAVE_GASTOS, JSON.stringify(gastos))
  } catch {
    // Modo anônimo ou cota cheia: o app continua funcionando, só não persiste.
  }
}
