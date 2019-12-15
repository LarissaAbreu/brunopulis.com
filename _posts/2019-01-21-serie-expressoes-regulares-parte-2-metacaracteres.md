---
layout: post
title: "Expressões Regulares: Parte 2 - Metacaracteres"
date: 2019-01-21 23:38:51
image: "/assets/images/posts/regexp/regex.png"
alt: "Abreviação em inglês de Expressões regulares. Ilustração"
description: "Vamos entender os metacaracteres que são essenciais para criar expressões regulares e como utilizá-los"
tags:
  - regex
  - metacaracteres
categories: série
twitter_text: "Vamos entender os metacaracteres que são essenciais para criar expressões regulares e como utilizá-los"
introduction: "Vamos entender os metacaracteres que são essenciais para criar expressões regulares e como utilizá-los"
---

## Introdução

Fala pessoal! Continuando nossa jornada no mundo das expressões regulares iremos aprender sobre os **metacaracteres** que são essenciais para construirmos nossas regexps.

![Homem dizendo vamos começar](/img/posts/metacaracteres/shall-we-begin.gif)

---

## Metacaracteres: a essência das regexp

Para escrevemos as expressões regulares, aprendemos no [post inicial da série](https://brunopulis.com/dev/serie-expressoes-regulares-parte-1-introducao-e-historia/) que necessitamos de alguns padrões de escrita para acontecer o "casamento" daquilo que procuramos.

Esse casamento é gerado através dos **metacaracteres** que são:

> uma sequência de caracteres ou um caracter com significado especial. Os metacaracteres podem ser categorizados conforme seu uso.

Podemos utilizá-los, para casarmos tudo dentro de uma sequência de caracteres, ou buscarmos somente uma palavra dentro de um texto, por exemplo.

Na tabela abaixo está listado os metacaracteres que as regexp utilizam.

| Metacaractere | Nome         |
| ------------- | ------------ |
| **.**         | Ponto        |
| **[ ]**       | Lista        |
| **[^ ]**      | Lista Negada |
| **?**         | Opcional     |
| **\***        | Asterico     |
| **+**         | Mais         |
| **{ }**       | Chaves       |
| **^**         | Circunflexo  |
| **\$**        | Cifrão       |
| **\\b**       | Borda        |
| **\\**        | Escape       |
| **\|**        | Ou           |
| **( )**       | Grupo        |
| **\\1**       | Retrovisor   |

Após conhercemos cada metacaractere, devemos compreender que eles estão subdividos em grupos de acordo com suas características, que são:

## Grupos de metacaracteres

### Representantes

São metacaracteres que sua principal função é representar um ou mais caracteres. Todos os metacaracteres desse tipo casam a posição de **um único caractere**, e não mais que um.

| Metacaractere | Nome         | Função                         |
| ------------- | ------------ | ------------------------------ |
| **.**         | Ponto        | Um caractere qualquer          |
| **[...]**     | Lista        | Lista de caracteres permitidos |
| **[^...]**    | Lista Negada | Lista de caracteres proibidos  |

### Quantificadores

São metacaracteres que nos dizem a quantidade de repetições que o caractere ou metacaractere anterior pode realizar.

| Metacaractere | Nome     | Função             |
| ------------- | -------- | ------------------ |
| **?**         | Opcional | Zero ou um         |
| **\***        | Asterico | Zero, um ou mais   |
| **+**         | Mais     | Um ou mais         |
| **{n, m}**    | Chaves   | De **n** até **m** |

### Âncoras

Diferentemente dos anteriores, os do tipo âncora marcam uma posição específica na linha que está sendo examinada.

| Metacaractere | Nome        | Função                   |
| ------------- | ----------- | ------------------------ |
| **^**         | Circunflexo | início da linha          |
| **\$**        | Cifrão      | final da linha           |
| **\\b**       | Borda       | início ou fim de palavra |

### Outros

São metacaracteres que possuem funções específicas mas não se relacionam entre si.

| Metacaractere | Nome       | Função                      |
| ------------- | ---------- | --------------------------- |
| **\\c**       | Escape     | torna literal o caractere c |
| **\|**        | Ou         | Ou um ou outro              |
| **(...)**     | Grupo      | delimita um grupo           |
| **\\1...\\9** | Retrovisor | casa nos grupos 1 até 9     |

## Conclusão

Nos próximos artigos, iremos aprofundar em cada grupo de metacaracteres e começar a colocar a mão na massa.
