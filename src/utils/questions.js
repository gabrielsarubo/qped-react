/* eslint-disable */
/**
 * @description 
 * Banco de questões
 * 
 * @author rivolli
 * @author tashima42
 * @author gabrielsarubo
 * 
 * @date 23-06-2021
 */

export const questions = {
  // ! Subject: Sorting
  ordenacao: [
    {
      id: 'ordenacao-1',
      title: 'Ordenação #1',
      text: `
Utilizando o método de ordenação **{metodo}**, quantas trocas são necessárias para que a sequência abaixo:
\`\`\`
{sequencia=1:10:5}
\`\`\`
Seja ordenada de modo **{opcoes}**?
<metodo>
  <sort value="bubble">Bolha</sort>
  <sort value="selection">Seleção</sort>
  <sort value="insertion">Inserção</sort>
</metodo>
<opcoes>
  <item value="ascending">crescente</item>
  <item value="descending">decrescente</item>
</opcoes>
      `,
      answer: function (values, blocks) {
        console.log(values, blocks)//values = Array(), blocks = undefined
        return [Math.random().toFixed(1)*10]//simular uma resposta
      },
      subject: 'Ordenacao',
      level: 2,
      tags: ['ordenação']
    }
  ],
  // ! Subject: Search
  busca: [
    {
      id: 'busca-1',
      title: 'Busca sequencial #1',
      text: `
Suponha que você está realizando uma busca sequencial no vetor: \`[{vet=3:13:+{6:11}}]\`

Quantas comparações serão realizadas se o valor buscado for **{valor=3:13}**?
      }`,
      answer: function (values) {
        const { vet, valor } = values
        let answer = []// resposta a ser retornada

        for (let i = 0; i < vet.length; i++) {
          if (vet[i] == valor) {
            answer.push(i + 1)
            return answer
          }
        }

        answer.push(vet.length + 1)
        return answer
      },
      subject: 'Busca',
      level: 1,
      tags: ['busca sequencial', 'busca']
    },
    {
      id: 'busca-2',
      title: 'Busca sequencial #2',
      text: `Considere o método de busca sequencial em um vetor contendo os elementos: \`[{vet=2:23:+{5:10}}]\` 
      
Qual deve ser o retorno da busca quando o usuário pesquisar pelo item **{valor=2:23}**?
      `,
      // Retorna o index do primeiro valor encontrado e retorna -1 se não for encontrado. 
      answer: function (values) {
        const { vet, valor } = values
        let answer = []

        for (let i = 0; i < vet.length; i++) {
          if (vet[i] == valor) {
            answer.push(i)
            return answer
          }
        }

        answer.push(-1)
        return answer
      },
      subject: 'Busca',
      level: 1,
      tags: ['busca sequencial', 'busca']
    },
    {
      id: 'busca-3',
      title: 'Busca sequencial otimizada',
      text: `
Suponha que seja feita uma busca sequencial otimizada no vetor a seguir, o qual deve ser ordenado antes da busca. 
\`\`\`
[{vet=1:10:{5:10}}]
\`\`\` 
Quantas comparações serão realizadas se o valor a ser buscado for **{valor=1:10}**?
    `,
      answer: function (values) {
        const { vet, valor } = values
        const answer = []

        const BubbleSort = originalArray => {
          // Make a copy of the original array
          let arr = [...originalArray]

          let swapped;
          do {
            swapped = false;
            for (let i = 0; i < arr.length; i++) {
              if (arr[i] > arr[i + 1]) {
                let tmp = arr[i];
                arr[i] = arr[i + 1];
                arr[i + 1] = tmp;
                swapped = true;
              }
            }
          } while (swapped);
          return arr;
        }

        // Ordenar vetor usando Bubble Sort
        let sortedArray = BubbleSort(vet)

        // Realizar busca sequencial no vetor ordenado
        for (let i = 0; i < sortedArray.length; i++) {
          if (sortedArray[i] == valor) {
            answer.push(i + 1)
            return answer
          }
        }

        answer.push(sortedArray.length)
        return answer
      },
      subject: 'Busca',
      level: 1,
      tags: ['busca', 'busca otimizada', 'busca sequencial']
    }
  ],
  // ! Subject: Stack
  pilha: [
    {
      id: 'pilha-1',
      title: 'Simulaçao com Pilhas',
      text: `
Considerando a função a seguir que recebe um número como argumento e utiliza a pilha S para processá-lo.

O que será impresso quando **fun({n=5:10})** for chamado?
\`\`\`
void fun(int n) {
  stack S; 
  while (n > 1) {
    push(&S, n%2);
    n = n/2;
  \\}
  while (!isEmpty(&S))
    printf("%d ", pop(&S));
\\}
\`\`\`
`,
      answer: function (values) {
        let { n } = values
        let stack = []
        // Armazenar o retorno de cada item removido da pilha que será usado para a resposta final da questão
        let poppedItems = []

        while (n > 1) {
          stack.push(n % 2)
          n = n / 2
        }

        while (stack.length) {
          poppedItems.push(stack.pop())
        }

        return poppedItems
      },
      subject: 'Pilha',
      level: 1,
      tags: ['pilha', 'simulação']
    }
  ],
  // ! Subject: Queue
  fila: [
    {
      id: 'fila-1',
      title: 'Ordem de remoção em uma fila',
      text: `Se os elementos abaixo são adicionados a uma fila e são depois removidos da fila, em qual ordem eles serão removidos? \`[{vet=1:10:{3:6}}]\``,
      answer: function (values) {
        const { vet } = values
        let inputArr = [...vet]// copiar o vetor
        let answer = []// resposta a ser retornada
        while (inputArr.length) {
          answer.push(inputArr.shift())
        }
        return answer
      },
      subject: 'Fila',
      level: 1,
      tags: ['ordem de remoção', 'fila']
    },
  ],
  // ! Subject: LinkedList
  lista: [
    {
      id: 'lista-1',
      title: 'Lista duplamente encadeada',
      text: `
A lista duplamente encadeada **l** possui os seguintes elementos:
\`\`\`
{lista=1:10:5}
\`\`\`
Sabendo que a função **addNode** cria e insere um novo nó entre os nós **ant** e **prox** que são recebidos por parâmetro.
\`\`\`
node *addNode(node *ant, int valor, node *prox) {
  ...
\\}
\`\`\`
Qual a nova sequência da lista, após a execução das seguintes instruções?
\`\`\`    
addNode(l→first, {a=1:10}, l→first→prox);
addNode(addNode(l->last->ant, {b=1:10}, l->last), {c=1:10}, l->last);
\`\`\`    
      `,
      answer: function (values) {
        let { lista, a, b, c } = values
        let _lista = [...lista] 
        
        // Simulate a Doubly Linked List behaviour using an Array

        // Simulate first instruction => addNode(l→first, "a", l→first→prox);
        _lista.splice(1, 0, a)

        // Simulate second instruction => addNode(addNode(l->last->ant, "b", l->last), "c", l->last);
        _lista.splice(_lista.length-1, 0, b)
        _lista.splice(_lista.length-1, 0, c)

        return _lista
      },
      subject: 'Lista',
      level: 2,
      tags: ['lista', 'lista duplamente encadeada']
    }
  ]
}
