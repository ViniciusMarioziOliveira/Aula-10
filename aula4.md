# Aula 4 - 06/03/2026

## Tópicos abordados
1. JavaScript externo
2. Interagindo com campos de formulário
3. innerHTML e innerText
4. Exercícios práticos

## JavaScript Externo
- Para manter o código organizado, é recomendado colocar o JavaScript em um arquivo separado.
- Exemplo de como incluir um arquivo JavaScript externo:
```html<script src="script.js"></script>
```
- O arquivo `script.js` deve estar no mesmo diretório do arquivo HTML ou o caminho deve ser especificado corretamente.

## Interagindo com campos de formulário
- Para acessar e manipular campos de formulário, podemos usar o DOM (Document Object Model).
- Exemplo de acesso a um campo de texto:
```html<input type="text" id="meuCampo" />
<script>
  const campo = document.getElementById('meuCampo');
  campo.value = 'Texto inicial';
</script>
```
- Para obter o valor do campo, podemos usar `campo.value`.

## innerHTML e innerText
- `innerHTML` é usado para obter ou definir o conteúdo HTML de um elemento.
- `innerText` é usado para obter ou definir o texto visível de um elemento, ignorando as tags HTML.
- Exemplo:
```html<div id="meuDiv">Olá <strong>mundo</strong>!</div>
<script>
  const div = document.getElementById('meuDiv');
    console.log(div.innerHTML); // Saída: "Olá <strong>mundo</strong>!"
    console.log(div.innerText); // Saída: "Olá mundo!"
</script>
```

## Exercícios práticos
1. Crie um arquivo HTML com um campo de texto e um botão. Ao clicar no
botão, o texto do campo deve ser exibido em um parágrafo abaixo.
2. Crie um arquivo HTML com um div contendo algum texto. Use JavaScript para alterar o conteúdo do div para algo diferente quando um botão for clicado.
3. Crie um formulário com campos de nome e email. Ao enviar o formulário, exiba os valores dos campos em um alerta.
4. Crie um arquivo HTML com um parágrafo e um botão. Ao clicar no botão, altere o texto do parágrafo usando `innerText` e adicione uma tag HTML usando `innerHTML`.
5. Crie um arquivo HTML com uma lista de itens. Use JavaScript para adicionar um novo item à lista quando um botão for clicado.
6. Crie um arquivo HTML com um campo de texto e um botão. Ao clicar no botão, o valor do campo de texto deve ser adicionado a uma lista abaixo.
7. Crie um arquivo HTML com um div e um botão. Ao clicar no botão, altere o conteúdo do div para mostrar a data e hora atual usando `innerHTML`.
8. Crie um arquivo HTML com um formulário de login (campos de usuário e senha). Ao enviar o formulário, exiba uma mensagem de boas-vindas usando `innerText` com o nome do usuário.
9. Crie um arquivo HTML com um parágrafo e um botão. Ao clicar no botão, altere o texto do parágrafo para mostrar quantas vezes o botão foi clicado usando `innerText`.
10. Crie um arquivo HTML com uma lista de tarefas e um campo de texto para adicionar novas tarefas. Ao clicar em um botão, a tarefa digitada deve ser adicionada à lista usando `innerHTML`.