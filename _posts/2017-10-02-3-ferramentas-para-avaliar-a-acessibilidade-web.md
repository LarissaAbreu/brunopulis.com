---
layout: post
title: "3 ferramentas para avaliar a acessibilidade web"
date: 2017-10-02
image: "/assets/images/posts/cover/cover-tools.jpg"
featured: "/assets/images/posts/tools.jpg"
alt: "Um notebook ao centro da mesa com diversas ferramentas ao seu redor, representando sua utilidade"
description: "Conheça três ferramentas para avaliar a acessibilidade de nossos sites."
tags:
  - dicas
  - tools
  - a11y
categories: Acessibilidade

twitter_text: "Conheça três ferramentas para avaliar a acessibilidade de nossos sites."
introduction: "Conheça três ferramentas para avaliar a acessibilidade de nossos sites."
---

Neste post bem rapidinho vou mostrar alguns avaliadores automáticos para testar as recomendações da WCAG em suas app’s ou websites.

Os avaliadores de acessibilidade, tem como função, testar de forma automática a estrutura do seu código para checar se atende as conformidades dos webstandards propostos pela W3C. Estes validadores não testam a semântica, isto é, testam a síntaxe do seu código.

Vou mostrar três validadores que utilizo com maior frequencia, num próximo post eu ensino a como corrigir os erros apontados

## [WAVE](https://wave.webaim.org/)

Foi desenvolvido pela WebAIM em 2001, com o intuito de auxiliar nos testes de acessibilidade. Este vídeo demonstra o funcionamento dele e o tipo de relatório que ele gera.

<iframe width="560" height="315" src="https://www.youtube.com/embed/uNFwj0_78hE" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

## [Access Monitor](http://www.acessibilidade.gov.pt/accessmonitor/)

Desenvolvido em 2009 pela Fundação para a Ciência e a Tecnologia (FCP), atualmente é o que eu mais tenho utilizado, ele gera um relatório bastante simples e com tips para corrigir os bug’s. Permite testar com as duas versões da WCAG a 1.0 e 2.0, recomendo usar a mais atual 2.0 para realizar os testes. Além de dar uma pontuação para o site de 0 a 10 no quesito de acessibilidade.

## [Tota11y](http://khan.github.io/tota11y/)

O Tota11y é para mim um dos melhores se você quer algo rápido e não muito técnico. Ele é um bookmarklet para ser salvo na sua barra de favoritos.

Ele tem as seguintes opções para verificação:

- **Heading’s**: permite visualizar a estrutura dos heading’s da página demarcando as areas de forma visual;
- **Contraste**: exibe se os elementos possuem contraste e se estão com baixo contraste e ainda dá uma sugestão de um bom contraste;
- **Label’s**: exibe as label’s dos formulários e acusa aonde não existe as mesmas;
- **Images alt text**: exibe o alt das imagens;
- **Landmark’s**: mostra as landmark’s da WAI-ARIA.

Meu conselho:

> testem e testem essa ferramentas e deixe suas experiências nos comentários.
