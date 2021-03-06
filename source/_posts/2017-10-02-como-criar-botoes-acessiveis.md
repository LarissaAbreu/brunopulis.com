---
layout: single
title: "Como criar botões acessíveis"
date: 2017-10-02
header:
  image: /assets/images/posts/links.jpg
  image_description: "Botão azul escrito Clique aqui"
categories: Acessibilidade
tags:
  - dicas
  - a11y
excerpt: "Aprenda a criar botões acessíveis sem prejudicar a estética e/ou seu comportamento."
---

## O cenário

Estruturalmente botões são links estilizados via CSS e tem um valor muito importante para fazerem conversões de cliques, mas, a maioria deles são aplicados de forma incorreta. Nesse post vou mostrar a correção para esse problema.

Em diversos sites, nos deparamos com call to actions (como: ‘Clique aqui’; ‘Saiba mais’; ‘Continue lendo’ e etc). Estes botões geram algumas barreiras de acessibilidade quando não são feitos da forma correta.

Fiz esse exemplo para ilustrar quando são feitos incorretamente.

```html
<div class=”card-action”>
  <a href=”#”>Leia mais</a>
</div>
```

Da forma que foi feita a marcação, o usuário que utiliza leitor de tela, como o NVDA, JAWS por exemplo, ficaria perdido porque os botões de “Leia mais” não tem em seu contexto nenhuma informação. Os leitores de tela oferecem um recurso de navegar via links de forma rápida. No NVDA utiliza-se a tecla L para saltar todos os links da página.

Sendo assim, ao chegar no link de “Leia mais” o usuário não saberá porque ele deve clicar ali qual a finalidade daquele link.

## Solução

A correção para essa situação é bastante simples. Basta incluir uma tag span e colocar uma classe para ocultar a informação, sendo assim, ela ficará disponível somente para quem não pode enxergar.

O exemplo abaixo mostra de forma clara como fazer.

### Marcação HTML

```html
<div class="”card-action”">
  <a href="”#”" role="button">
    Leia mais
    <span class="”sr-only”">sobre Galo na libertadores</span>
  </a>
</div>

<button>
  Leia mais
  <span class="sr-only">sobre o Galo na libertadores</span>
</button>
```

### CSS

```css
.sr-only {
  position: absolute;
  width: 1px;
  height: 1px;
  padding: 0;
  margin: -1px;
  overflow: hidden;
  clip: rect(0,0,0,0);
  border: 0;
}
```

## Conclusão

Construir botões acessíveis é de suma importância para todas as pessoas terem acesso as informações e como vimos é uma técnica muito simples, então, a partir de hoje superamos mais uma barreira e poderemos fazer botões mais acessíveis para todos.
