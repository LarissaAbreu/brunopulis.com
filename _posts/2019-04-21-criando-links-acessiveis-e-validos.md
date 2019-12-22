---
layout: post
title: "Criando links acessíveis e válidos"
date: 2019-04-21 10:20:00
image: "/assets/images/posts/cover/cover-links.jpg"
background: "/assets/images/posts/links.jpg"
alt: "Duas páginas da internet se conectando através de um link. Ilustração"
description: "Vamos aprender a escrever links válidos e acessíveis para todas as pessoas"
main-class:
color:
categories: tutorial
tags:
  - links
  - a11y
twitter_text: "Quer aprender a escrever um link válido e acessível? Confira neste artigo."
introduction: "Quer aprender a escrever um link válido e acessível? Confira neste artigo."
---

> [Post traduzido](https://a11yproject.com/posts/creating-valid-and-accessible-links/) por [Bruno Pulis](https://github.com/brunopulis) e escrito originalmente por [Emma Patricios](http://www.punkchip.com/). Publicado em 15 de Fevereiro, 2019

O elemento de âncora é frequentemente citado como o principal bloco de construção da World Wide Web. Ele é utilizado para criar um link para outras páginas, para âncoras na mesma página, para outros recursos (como um PDF) ou para um endereço de e-mail. Como podemos ter certeza que eles são acessíveis a todos?

## Comece com HTML válido

Para ser um link válido, deve ter:

<div class="grt alert">
- um **atributo `href`** - a localização da âncora, página ou recurso;
- **conteúdo do link** - texto descrevendo para onde o link está indo, pode ser um texto simples ou o `atributo alt` de uma imagem;
- abrindo e fechando tags.
</div>

## Escrever texto do link com sentido

Textos comuns de links inúteis são **"clique aqui"**, **"leia mais"** e **"link"**.

Estes são problemáticos porque quando uma pessoa usa um leitor de tela para navegar através de links, eles serão lidos fora do contexto. Onde você esperaria que esses três links fossem se você os ouvisse? É impossível saber.

Pense em reestruturar sua sentença para remover **clique aqui** ou **link** e, em seguida, coloque a parte significativa no link.

```html
<!-- ruim -->
Para verificar nossa documentação <a href="/README.md">clique aqui</a>.

<!-- melhor -->
Disponibilizamos nossa <a href="/README.md">documentação</a>.
```

**"Leia mais"** pode ser corrigido, incluindo o que vamos ler mais sobre:

```html
<!-- ruim -->
<a href="/full-article">Leia mais</a>.

<!-- melhor -->
<a href="/full-article">Leia mais - Pontos de referência acessíveis</a>
```

## E quanto ao atributo title

O atributo `title` não é exposto por todos os navegadores de uma forma acessível, isso significa que as pessoas que usam touch-devices e teclados provavelmente nunca verão essas informações.

> “Se você quiser ocultar conteúdo de usuários de dispositivos móveis e tablets, bem como usuários de tecnologia assistiva e usuários de teclado, use o atributo de title.” [Usando o atributo title HTML - The Paciello Group](https://developer.paciellogroup.com/blog/2010/11/using-the-html-title-attribute/)

Portanto, não é recomendado utilizar o atributo `title` em elementos `<a>`. Se você usá-lo, não use o mesmo nome do link, isso pode gerar leituras duplicadas desnecessárias para alguns leitores de tela.

## Foco e teclado

Alguns desenvolvedores/designers vêem o `outline` como um recurso feio e os removem. As pessoas que navegam usando o teclado precisam desse estado para saber onde estão.

A melhor prática é nunca remover o `outline`, mas existem soluções acessíveis para o estilo, que estão definidas na [Dica Rápida: Nunca remova outline do CSS. (em inglês)](https://a11yproject.com/posts/never-remove-css-outlines/)

Por padrão, um elemento `<a>` com um `href` pode ser ativado pela tecla Enter.

Lembre-se de não substituir essa funcionalidade se anexar outro script personalizado. Além disso, não é esperado que a tecla Space ative os links.

## Quando você deve usar button

Se você tiver um elemento `<a>` que tenha:

- um atributo **vazio** ou **sem href**
- script anexado via atributo onclick ou listerners.

## Leitura adicional

- [`<a>`: O elemento de âncora](https://developer.mozilla.org/pt-br/docs/Web/HTML/Element/a) - Documentação MDN
- [Links, Botões, Submits, e Divs, Oh Hell](http://adrianroselli.com/2016/01/links-buttons-submits-and-divs-oh-hell.html) - Adrian Roselli0
