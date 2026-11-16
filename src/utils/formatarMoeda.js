// Formata um número como moeda brasileira: 12.5 -> "R$ 12,50"
export function formatarMoeda(valor) {
  return new Intl.NumberFormat('pt-BR', {
    style: 'currency',
    currency: 'BRL',
  }).format(valor)
}
