---
layout: single-blog
title: "Conhecendo o DeepCode"
date: 2019-12-31 14:01:04
image: '/assets/images/posts/cover/cover-ia.jpg'
featured: '/assets/images/posts/inteligencia-artificial.jpg'
alt:
description: Descubra como a inteligência artificial pode ajudar no processo de Code Review
categories: Dicas
tags:
  - Inteligência Artificial
  - Code Review
  - Automação
  - Machine Learning
twitter_text: Descubra como a inteligência artificial pode ajudar no processo de Code Review
introduction: Descubra como a inteligência artificial pode ajudar no processo de Code Review
---

Recentemente navegando pelo Youtube vi um vídeo do [Filipe Deschamps](https://www.youtube.com/channel/UCU5JicSrEM5A63jkJ2QvGYw), onde ele mostrou uma ferramenta para avaliar questões de segurança no <span lang="en">Code Review</span> chamada DeepCode.

<iframe src="https://www.youtube.com/embed/eeMWZPZGhVk" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

## DeepCode

O <span lang="en">DeepCode</span> é uma ferramenta que auxilia no processo de <span lang="en">Code Review</span>, ela nos ajuda a desenvolver um code base com qualidade e segurança.
A diferença e a grande promessa da ferramenta é a utilização de Inteligência Artificial para propor mudanças no code base.

A <abbr title="Inteligência Artificial">IA</abbr> aprende com outros códigos fontes e mapeia as vulnerabilidades criando assim uma base de dados gigantesca com esses achados.

Segundo [o site deles](https://deepcode.ai) foram analisados 100 mil commits e encontrados problemas relacionados a segurança e vulnerabilidades que nenhuma outra ferramenta encontrou.

O algoritmo de Machine Learning deles tem 90% de precisão e o mais interesse dessa ferramenta ela possuí **zero configuração**.

![Imagem ilustrativa do DeepCode](/assets/images/posts/deepcode.png)

## Linguagens suportadas

Atualmente eles suportam as linguagens: Javascript, Java, Python e Typescript. Caso a linguagem que você desenvolve não esteja na lista basta [fazer um pedido](https://www.deepcode.ai/feedback?select=1) que será analisado pela equipe deles.

## Extensão para o Visual Code

![Editor de texto Visual Code](/assets/images/posts/visualcode.png)

Outro recurso bastante interessante é a possibilidade de instalar uma extensão do DeepCode no próprio Visual Code, com ela podemos analisar o código antes mesmo de submeter o mesmo para <span lang="en">Code Review</span>.

Para instalar a extensão basta ir no [Visual Studio Marketplace](https://marketplace.visualstudio.com/items?itemName=DeepCode.deepcode) ou atráves do próprio <span lang="en">Visual Code</span> na aba de extensões e procurar o <span lang="en">DeepCode</span> e instalar.

## Considerações finais

O DeepCode é uma excelente ferramenta que surgiu para guiar um desenvolvimento seguro e de alta qualidade. O algoritmo de <span lang="en">Machine Learning</span> é incrível e detecta diversas issues, testei no meu próprio site e tenho obtido resultados bastante interessantes.

Se posso te dar um conselho, teste essa ferramenta e explore os recursos que ela pode oferecer para garantir um software com um alto índice de valor e entrega.

Em breve escreverei como configurar o DeepCode em um projeto open source para garantir qualidade e segurança.

Até mais.

E um bom ano novo.
