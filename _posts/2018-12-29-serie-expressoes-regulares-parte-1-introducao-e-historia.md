---
layout: post
title: "Expressões Regulares: Parte 1 - Introdução e História"
date: 2018-12-29 03:28:43
image: "/assets/images/posts/regexp/regex.png"
alt: "Abreviação em inglês de Expressões regulares. Ilustração"
description: "Nesta série, vamos estudar sobre a história e a introdução das expressões regulares e compreender os benefícios de sua utilização."
tags:
  - regex
  - metacaracteres
categories: série
twitter_text: "Nesta série, vamos estudar sobre expressões regulares e compreender os benefícios de sua utilização."
introduction: "Nesta série, vamos estudar sobre a história e a introdução das expressões regulares e compreender os benefícios de sua utilização."
---

## Introdução

Fala pessoal! Depois de muito tempo ~~offline~~, sem escrever absolutamente nada sobre desenvolvimento resolvi reativar meu blog para partilhar conhecimentos e me forçar a estudar também.

Nesta série de artigos, iremos estudar juntos sobre Expressões Regulares, sua história, conceitos e implementações dela, no mundo real.

Vamos, encarar esse monstro?

![Bambam tirando sua camisa no treino](https://img.buzzfeed.com/buzzfeed-static/static/2016-05/31/11/asset/buzzfeed-prod-web11/anigif_sub-buzz-31176-1464709031-4.gif)

---

Comecei a folhear o livro [Expressões Regulares: Uma Abordagem Divertida](https://novatec.com.br/livros/expressoes-regulares-5ed/) do Aurélio Jarbas, uma das grandes referências brasileiras no assunto.

O livro, está na sua quinta edição e você pode adquiri-lo no site da [NOVATEC](https://novatec.com.br/livros/expressoes-regulares-5ed/). Existe também a versão digital que é comercializada na [Amazon](https://www.amazon.com.br/dp/B01BPK1W46/).

O intuito dessa série de artigos e estudar as etapas que compreendem uma expressão regular. Servira como um guia de estudos e fonte de consulta posterior também.

Posteriormente irei fazer um review do livro.

## Uma breve história

As expressões regulares são uma forma concisa de identificar cadeias de caracteres, palavras ou padrões de texto. Por exemplo: buscar todos os telefones que contenham o DDD (31).

Elas são escritas em uma linguagem formal que pode ser interpretada por processadores de ER’s, um programa que serve um gerador de analisador sintático ou examina o texto e identifica as partes que casam com a especificação dada.

Alguns, desses programas são distribuídos livremente na internet, como:

- [RegExp101](https://regex101.com/)
- [RegExr](https://regexr.com/)
- [Regex Tester](https://www.regextester.com/)

O termo deriva do trabalho do matemático norte-americano [**Stephen Cole Kleene**](https://pt.wikipedia.org/wiki/Stephen_Kleene), que desenvolveu as expressões regulares como uma notação ao que ele chamava de **álgebra de conjuntos regulares** ou também conhecida como **álgebra de Kleene**.

Kleene foi notório em sua área de atuação, considerado e reconhecido juntamente com Alan Turing e Emil Post e outros como o fundador de uma ramificação da lógica matemática, chamada de **teoria da computabilidade**. Esse trabalho fundamentou o estudo que as funções são computáveis.

Vários conceitos matemáticos têm seu nome, como: **hierarquia de Kleene**, **álgebra de Kleene**, **fecho de Klenne** e **teorema da recursão de Klenne**.

## Legal, mas para que serve

As ER's servem para uma infinidade de propósitos, vai depender muito do contexto em que iremos utilizá-la. Em um editor de texto, como o <span lang="en">Word</span>, por exemplo, podemos utilizar uma ER para substituir determinado termo dentro de um texto.

Imagine a praticidade de fazer isso em um tcc ou dissertação de mestrado de forma assertiva e simples.

Outra abordagem seria na validação de um número de cartão de crédito, ou até mesmo validar um e-mail e telefone.

Abaixo, cito alguns exemplos que ela pode ser utilizada:

- corresponder a qualquer endereço de IP em um intervalo;
- corresponder a qualquer endereço de e-mail de um domínio específico;
- corresponder somente a frase exata;
- corresponder a palavra com grafias diferentes ou caracteres especiais;
- corresponder a um formato alfanumérico;
- corresponder a um número de telefone;

### Exemplo de expressão regular

Corresponde somente a frase exata:

```shell
(\W|^)tesouro\direto(\W|$)
```

CEP formatado com expressões regulares

```shell
\d{5}-\d{3}
```

---

## Curiosidades

As ER's estão em praticamente em todos os lugares, linguagens de programação, editores de texto, banco de dados, planilhas e muito mais, abaixo, listo alguns meios em que se pode usar:

| Planilhas   | Aplicativos  | Banco de dados | Linguagens    | Editores     |
| ----------- | ------------ | -------------- | ------------- | ------------ |
| Google Docs | Grep         | MySQL          | Awk           | Emacs        |
| OpenOffice  | Apache HTTPd | PostgreSQL     | Javascript    | VIM          |
|             | Nginx        | Oracle         | PHP           | Word         |
|             |              | SQLite         | Python        | OpenOffice   |
|             |              |                | Sed           | Notepad++    |
|             |              |                | Tcl           | VisualCode   |
|             |              |                | VBScript      | Sublime Text |
|             |              |                | C             |              |
|             |              |                | Java          |              |
|             |              |                | Ruby          |              |
|             |              |                | ActionScript  |              |
|             |              |                | PHP PCRE      |              |
|             |              |                | Shell Script  |              |
|             |              |                | HTML5         |              |
|             |              |                | Lua           |              |
|             |              |                | .NET (VB, C#) |              |
|             |              |                | Powershell    |              |

## Conclusão

As expressões regulares são um recurso extremamente poderoso, dominando elas podemos resolver problemas do cotidiano de forma simples. Tem conhecimento do seu funcionamento é de suma importância para ser um bom desenvolvedor.

Venha nessa jornada rumo as Expressões Regulares!
