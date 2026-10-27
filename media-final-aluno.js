// Desafios JavaScript na DIO têm funções "gets" e "print" acessíveis globalmente:
// - "gets" : lê UMA linha com dado(s) de entrada (inputs) do usuário;
// - "print": imprime um texto de saída (output), pulando linha.

// 1. Lê a média informada pelo usuário e armazena na variável 'media'
let media = gets();

// 2. Condição 1: Se a média for estritamente menor que 5
if (media < 5) {
  print('REP'); // Aluno Reprovado

// 3. Condição 2: Se for maior ou igual a 5 E (&&) menor que 7
} else if (media >= 5 && media < 7) {
  print('REC'); // Aluno de Recuperação

// 4. Caso contrário: Se não caiu em nenhuma das anteriores, a nota é >= 7
} else {
  print('APR'); // Aluno Aprovado
}
