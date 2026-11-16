# Relatório · Controle de Gastos

Nome: Claudiana dos Santos 
Modelo usado: DeepSeek V4.1 Flash Free

## Passo 1 · AGENTS.md
1.1 O que o /init descobriu sozinho sobre o projeto?
Resposta: Vi que o meu AGENTS.md informou que controle-gastos era o único projeto que ele compreendia. Informa também que é um repositório Git próprio e as instruções do proojeto devem ser adicionadas nele. 
1.2 Qual regra você adicionou ao AGENTS.md e por quê?
Resposta: Eu adicioneu o modelo dado pelo professor e também a regra de não criar nem editar o RELATORIO.md.

## Passo 2 · Estrutura
2.1 Quais arquivos o plano criou ou alterou?
Resposta: Criou App.jsx, FormularioGasto.jsx, ListaGastos.jsx, TotalGastos.jsx, formatarMoeda.js, App.css, indez.css e index.html.
2.2 Qual regra do AGENTS.md você viu sendo aplicada?
Resposta: Ele aplicou resposta e comentários do código em português, não instalou novas bibliotecas, usou nomes de variáveis e componentes em português, mostrou valores em reais, com duas casas: R$ 12,50 e não criou outro e nem editou o RELATORIO.md existente.

## Missão 1 · Adicionar
M1.1 Como o app trata "12,50" com vírgula? Quem decidiu isso: você ou o agente?
Resposta: O agente aceitou os valores com vírgula já pensando no formato brasileiro de moeda.
M1.2 Quantas tool calls a missão usou?
Resposta: 91.5 tok/s

## Missão 2 · Total
M2.1 Quanto deu 0,10 + 0,20 no app?
Resposta: No app deu 0,30.
M2.2 Por que 0.1 + 0.2 não dá exatamente 0.3 no JavaScript?
Resposta: Porque o javascript não representa com exatidão numeros decimais, já que trabalha com binários. POr isso, acaba ocorrendo diferença no resultado final.

## Missão 3 · Remover
M3.1 O agente mudou algo que você não pediu? O quê?
Resposta: Percebi que ele informa com texto quando nenhum gasto foi cadastrado.
M3.2 Como o código sabe qual gasto remover?
Resposta: Ele passou a excluir os gastos considerando o id do gasto cadastrado. O botão de remover está vinculado ao id.

## Missão 4 · Filtrar
M4.1 Qual foi o seu prompt da tentativa B?
Resposta: Planeje um filtro por categorias. O total deve acompanhar o filtro. Mostre qual a categoria selecionada. Se todas, informe. Se não houver gastos da categoria, informe. Tem que ser possível filtrar e depois voltar para todas.
M4.2 Qual tentativa gerou o melhor plano, A ou B? Por quê?
Resposta: Eu acredito que o B, onde eu pude informar o que eu queria que o agente fizesse, e ele entendeu bem. 

## Bônus · Salvar
B.1 Onde o localStorage guarda os dados?
Resposta: o localStorage guarda os dados (apenas String) no próprio navegador. TRabalha de forma síncrona e não envia nada a um servidor. Os dados permanecem apenas naquele navegador.
B.2 Por que os gastos não aparecem em outro navegador?
Resposta: Não aparecem porque em outros navegadores, a lista aparece vazia. O Array passar por um json ao salvar e outro ao ler.

## Reflexão final
R.1 Sem olhar o código, explique como um dos seus componentes recebe e altera os gastos.
Resposta: a aplicação recebe na tela as informações inseridas pelo usuário no formulario (descrição, valor e categoria). eu adiono as infos atráves do botão e essas infos são vão para App.jsx onde tem uma função que cuida dos cadastro. Lá também tem uma função para remover esses gastos.
R.2 Em que momento você aceitou algo sem entender?
Resposta: Aceitei sem entender ele sugeriu fazer a soma dos gastos em centavos para evitar erros nos valores decimais. No começo, não entendi muito bem por que isso era necessário, mas depois compreendi melhor com a explicação do agente e ajuda do google.
R.3 Quais decisões foram suas e quais foram do agente?
Resposta: Eu decidi quais ações deveriam ser executadas. O agente fez as sugestões de como fazer. A partir disso, eu aceitei as sugestões e pedi que executasse os planos.
R.4 O que continuaria valendo se você trocasse o modelo?
Resposta: As instruções que eu coloquei o AGENTS.md valeriam, independente do agente. As decisões que aprovei também. 