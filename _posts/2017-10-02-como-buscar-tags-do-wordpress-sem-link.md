---
layout: post
title: "Como buscar tags do wordpress sem link"
date: 2017-10-02 00:43:26
image: "/assets/images/posts/cover/cover-wp.jpg"
alt: "Nuvem de tags com palavras relacionadas ao Wordpress"
description: "Aprenda como retornar o nome das tags do Wordpress sem o link padrão"
tags:
  - wordpress
  - seo
categories: wordpress
twitter_text: "Aprenda como retornar o nome das tags do Wordpress sem o link padrão"
introduction: "Aprenda como retornar o nome das tags do Wordpress sem o link padrão"
---

Esse artigo visa mostrar de forma clara como é possível retornar o nome das tags do Wordpress sem o link padrão. É uma técnica relativamente simples uma consulta na documentação e resolvemos nosso problema, vamos lá!

## O cenário

Estou desenvolvendo um site com meu amigo Jhonny Costa, onde temos uma determinada página que irá retornar a tag de um determinado post.

Após algumas conversas, entramos em um impasse onde não exisitiria a necessidade das tags virem com seus respectivos links.

Então eu recorri a documentação do Wordpress para consultar a função que gera as tags a <code>the_tags()</code>, a documentação mostra que ela recebe três paramêtros por padrão: <code>$before</code>, <code>$sep</code>, <code>\$after</code>.

## <code>\$before</code>

Paramêtro do tipo String, onde retornará um texto antes das tags serem exibidas. Seu padrão é a palavra “Tags”.

## <code>\$sep</code>

Paramêtro do tipo String, onde retornará um texto ou caractere que serão exibidos entre cada tag link, O padrão dele é (,) entre cada tag.

## <code>\$after</code>

Paramêtro do tipo String, onde retornará um texto após a última tag. Seu padrão não é exibir nada.

A função <code>the_tags()</code> não possui retorno.

### Exemplo

Imagine o caso, o cliente me pediu que o texto que deve ser mostrado seria **“Tags Sociais”** e separados pelo sinal maior **(>)**:

<code>the_tags( ‘Tags Sociais: ‘,’ > ‘ );</code>

Para exibir somente as tags sem o link devemos escrever o seguinte código:

```php
foreach(( get_the_tags() ) as $tag):
  echo $tag->name;
endforeach;
```

Você deve colocar esse trecho de código no lugar apropriado do seu tema para retornar as tags sem os seus links.

## Conclusão

Com esse trecho de código resolvi meu problema para retornar as tags, espero que possa ser útil para alguém que tenha a mesma dúvida ou similar.

Caso tenha alguma dúvida escreva um comentário.
