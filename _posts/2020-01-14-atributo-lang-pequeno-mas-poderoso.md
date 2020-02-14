---
layout: single-blog
title: "Explorando o atributo lang"
date: 2020-01-14 01:11:52
image: '/assets/images/posts/cover/cover-languages.jpg'
featured: '/assets/images/posts/languages.jpg'
alt: Vários bilhetes com expressões de diversos idiomas escritos
description: Descubra o poder do atributo lang e como utilizar ele da forma correta
categories: Acessibilidade
tags: 
  - Semântica
  - Web Standards
twitter_text: Descubra o poder do atributo lang e como utilizar ele da forma correta
introduction: |-
  O atributo lang geralmente é ignorado e desconhecido pela maioria de nós desenvolvedores, porém, ele  influência diretamente no significado e sentido de nossos documentos HTML. Descubra o poder desse atributo.
---

Nesse post iremos explorar um dos atributos HTML que passam desapercebidos no dia a dia, o atributo `lang`.

O atributo`lang` ajuda a definir o idioma de um elemento: a língua em que elementos não-editáveis são escritos, ou a língua em que elementos editáveis devem ser escritos pelo usuário<sup>[1]</sup>.

## Cenário de exemplo

<span lang="en">John</span> é um jornalista cego, que trabalha para uma agência internacional de notícias. Ele faz correspondência dela no Brasil. Um dos maiores passatempos de John é ler resenhas de livros e breves sumários para realizar o seu sonho: montar uma grande biblioteca.

John estava procurando uma resenha sobre o livro [Peter Pan](https://pt.wikipedia.org/wiki/Peter_Pan), quando encontrou uma página escrita em inglês. Porém, o desenvolvedor, ao criar a página, utilizou a marcação da linguagem em `pt-br` ou seja, em português.

A experiência de John, foi mais ou menos a seguinte:

<iframe title="Vídeo demonstrando o uso do atributo lang" src="https://www.youtube.com/embed/IFmKQ5e17Jo" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

### Afinal, o que aconteceu?

Como vocês podem perceber, o título e os dois primeiros parágrafos soaram totalmente estranhos, parecido com o [Joel Santana](https://pt.wikipedia.org/wiki/Joel_Santana) tentando falar em inglês.

Porém, os dois últimos parágrafos estão totalmente compreensíveis.

O que aconteceu no vídeo é algo bem simples, mas se não prestarmos atenção o conteúdo pode ficar incompreensível. A marcação HTML desse trecho é: 

```html
<!DOCTYPE html>
<html>
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width">
  <title>Peter Pan Test Atrribute Lang</title>
</head>
<body>
  <h1 lang="pt-br">Peter Pan summary</h1>
  <p lang="pt-br">Every night Peter visits the Darling family house and listens to Mrs. Darling tell bedtime stories. He sits on the window listening. One evening, they see Peter trying to escape. As he tries to run away, he loses his shadow. He goes back to get his shadow. He wakes up the daughter of the house, Wendy Darling. Wendy helps him attach his shadow to his body again. Wendy tells him she knows a lot of bedtime stories too.</p>
  <p lang="pt-br">Peter invites Wendy to return to Neverland with him. He wants her to be the mother of the Lost Boys. Wendy agrees to the mission and asks for her brothers Michael and John to join them.</p>
  <p lang="en">They have a magical flight as they travel to Neverland and have many adventures along the way. Wendy is nearly killed and the boys build her a house in the trees to recover. After Wendy is okay, she takes the role of the mother.</p>
  <p lang="en">After all their adventures and fun, Wendy decides that her place is at home with their mother. Wendy helps all the Lost Boys return to London. But Peter doesn’t want her to go. Instead he tries to trick her. He tells her that their mother doesn’t want them anymore. However, he understands how sad their mother must be. In the end, he decides to let them go home.</p>
</body>
</html>
```

<hr/>

O documento HTML acima deve ser observado com cuidado, pois existem dois pontos importantes a serem observados.

* Por definição o documento HTML, **deve conter** uma linguagem definida para o escopo global. Quando isso não acontece, o browser seleciona automaticamente o idioma do browser;
* Tags HTML, podem receber o atributo `lang` para serem lidos de forma correta.

Já pensou ter que consumir conteúdo de páginas que possuem esse tipo de problema? O quão frustante isso pode ser? Essa experiência basicamente acontece todos os dias quando pessoas que possuem deficiência visual, auditiva e cognitiva tentam acessar páginas com idiomas com a definição de linguagem errada.

Uma possível solução para o problema seria: 

```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width">
  <title>Peter Pan Test Atrribute Lang</title>
</head>
<body>
  <h1>Peter Pan summary</h1>
  <p>Every night Peter visits the Darling family house and listens to Mrs. Darling tell bedtime stories. He sits on the window listening. One evening, they see Peter trying to escape. As he tries to run away, he loses his shadow. He goes back to get his shadow. He wakes up the daughter of the house, Wendy Darling. Wendy helps him attach his shadow to his body again. Wendy tells him she knows a lot of bedtime stories too.</p>
  <p>Peter invites Wendy to return to Neverland with him. He wants her to be the mother of the Lost Boys. Wendy agrees to the mission and asks for her brothers Michael and John to join them.</p>
  <p>They have a magical flight as they travel to Neverland and have many adventures along the way. Wendy is nearly killed and the boys build her a house in the trees to recover. After Wendy is okay, she takes the role of the mother.</p>
  <p>After all their adventures and fun, Wendy decides that her place is at home with their mother. Wendy helps all the Lost Boys return to London. But Peter doesn’t want her to go. Instead he tries to trick her. He tells her that their mother doesn’t want them anymore. However, he understands how sad their mother must be. In the end, he decides to let them go home.</p>
</body>
</html>
```

<hr/>

Ao incluirmos o escopo de global de linguagem, o documento usa essas configurações para toda a página. Assim, o leitor de tela irá carregar a entonação e sotaque daquela linguagem especificada.

Algo muito impressionante, não é mesmo?

Uma dica de ouro é:

> Usar as tags e atributos corretos para gerar uma boa experiência de uso.

## Curiosidades

A <abbr lang="en" title="Web Content Accessibility Guidelines">WCAG</abbr> um documento que contém as diretrizes de acessibilidade web, informa que ao não fazermos a definição da linguagem descumprimos a diretriz [3.1.1](https://www.wuhcag.com/language-of-page/)<sup>[2]</sup>.

O nível de impacto para os usuários é considerado **alto**.

O elemento do documento HTML deve conter um atributo lang válido ou deve corresponder a um código lang válido para usuários de leitores de tela multilíngues que podem preferir um idioma diferente do padrão. 

Em todo documento HTML é **obrigatório definir o idioma da página**.


## Conclusão

Percebemos que o atributo é extremamente importante para nossas páginas web e sua implementação é bastante simples. Existem casos em sites multilíngues que o atributo pode ser alterado dinamicamente via linguagens de programação. Meu conselho é: sempre que iniciar o desenvolvimento de uma página **defina a linguagem** e não tenha esse tipo de problema.

Gostou? Tem alguma dúvida ou sugestão? Escreva um comentário. 

## Referências 

* [1] Atributos globais > Lang. Mozilla Developer Network, 2019. Disponível em: [https://developer.mozilla.org/pt-BR/docs/Web/HTML/Global_attributes/lang](<https://developer.mozilla.org/pt-BR/docs/Web/HTML/Global_attributes/lang>). Acesso em: 14 de jan. de 2020.
* [2] 3.1.1 – Language of Page (Level A). WUHCAG, 2019. Disponível em [Language of Page](https://www.wuhcag.com/language-of-page/). Acesso em 14 de jan. de 2020.
