// Converte o valor digitado pelo usuário em número.
// Aceita "12,50", "12.50", "1.234,56" e "R$ 12,50".
// Retorna NaN para texto vazio ou inválido ("abc", "12,5,0").
export function converterValor(texto) {
  const limpo = texto.replace(/r\$/i, '').replace(/\s/g, '')

  // Se tem vírgula, ela é o separador decimal e o ponto é de milhar.
  const normalizado = limpo.includes(',')
    ? limpo.replace(/\./g, '').replace(',', '.')
    : limpo

  return normalizado === '' ? NaN : Number(normalizado)
}
