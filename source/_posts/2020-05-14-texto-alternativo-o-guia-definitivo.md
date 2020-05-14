---
layout: post
title: "Texto alternativo o guia definitivo"
date: 2020-05-14 17:18:16
thumb: '/assets/images/posts/cover'
featured: '/assets/images/posts/cute-cat.jpeg'
alt: Gato de cor marrom brincando
legend:
link_text: Foto por Daniel Göransson
link_image: https://axesslab.com/alt-texts
categories: acessibilidade
tags:
description:  |-
  Esse artigo contém tudo o que você precisa saber sobre texto alternativo! Quando usá-los e como desenhá-los perfeitamente.
twitter_text: |-
  Esse artigo contém tudo o que você precisa saber sobre texto alternativo! Quando usá-los e como desenhá-los perfeitamente.
introduction: |-
  Esse artigo contém tudo o que você precisa saber sobre texto alternativo! Quando usá-los e como desenhá-los perfeitamente.
---

<div class="alert alert-warning">
Texto postado originalmente no <a href="https://axesslab.com/alt-texts" rel="noopener noreferrer" target="_blank">blog da Axesslab</a> escrito por <a href="https://twitter.com/danielgoransson" rel="noopener noreferrer" target="_blank">Daniel Göransson</a>, adaptado e traduzido por mim.
</div>

Esta publicação contém tudo o que você precisa saber sobre texto alternativo!

Quando usá-los e como desenhá-los perfeitamente. Por mim, Daniel, um desenvolvedor web com deficiência visual que usa um leitor de tela no meu dia-a-dia.

## Minhas experiências com imagens na web

Eu uso uma combinação de ampliação e leitores de tela ao navegar na web. Como princípio básico, uso ampliação em telas maiores e leitores de tela em dispositivos menores.

Eu, como qualquer um, encontro várias imagens surfando na web. Se eu estiver usando um leitor de tela e depender de obter uma descrição da imagem  o texto alternativo  mostra essas informações.

Muitas vezes o texto alternativo não ajuda, sendo um desperdício do meu tempo porque não transmite qualquer significado.
Deixe-me ilustrar isso na página inicial do [The Verge](https://www.theverge.com/). Isto é o que exibe para pessoas com visão:

<img src="/assets/images/posts/the-verge.png" class="img-fluid" alt="Pagina incial do The Verge />

Abaixo é o que eu vejo. Eu substituí as imagens com o que meu leitor de tela lê:

<img src="/assets/images/posts/the-verge-alt.png" class="img-fluid" alt="" />

**Não ajuda muito, não é?**

Aqui estão algumas falhas comuns de texto alternativo que encontro:

* **"cropped_img32_900px.png"** ou **"1521591232.jpg" **  o nome dos arquivos, provalvelmente porque a imagem não tem o atributo alt definido;

* <code><Article title></code>  -  em todas as imagens do artigo, provavelmente para melhorar o ranking de busca (SEO);

* "Fotografa: Emma Lee" - provalvelmente porque o editor da redação não sabe para que serve um texto alternativo

Os textos alternativos nem sempre são tão ruins, mas geralmente há muito a melhorar. Então, se você é um iniciante ou quer levar o "jogo" para o próximo nível, aqui está o nosso guia final para textos alternativos!

## O que é um texto alternativo

Um texto alternativo é uma descrição de uma imagem que mostra para pessoas que por alguma razão não conseguem ver a imagem. Entre outros, textos alternativos auxiliam:

* pessoas com baixa visao ou cegas";
* pessoa que desabilitaram imagem para economizar dados;
* motores de busca (ex: Google, Bing);

O primeiro grupo  —  pessoa com baixa visa ou cegas  —  são o grupo de mais se beneficia com os textos alternativos. Eles utilizam algo chamado leitores de tela para navegar na web. Um leitor de tela transforma uma informação visual em fala ou braile. Para fazer isso com precisão, as imagens do seu site precisam ter textos alternativos.

Textos alternativos são super importantes! Tão importantes que o <abbr title="Web Content Accessibility Guidelines" lang="en">WCAG</abbr> tem textos alternativos como sua primeira guideline a ser seguida:

> Todo o conteúdo não textual que é apresentado ao usuário tem uma alternativa de texto que serve o propósito equivalente.
> – WCAG guideline 1.1.1

## Como adicionar um texto alternativo?

No HTML, um texto alternativo é um atributo em um elemento de imagem:

<pre>
  <code class="html">
    &lt;img src="cachorro.png" alt="Cachorro brincando no prado." /&gt;
  </code>
</pre>

A maioria dos gerenciadores de conteúdo, como WordPress, permite você criar um texto alternativo quando subir a imagem.
Esse campo geralmente é chamado de **Texto Alternativo** mas em algumas interfaces é chamado de **"descrição da imagem"** ou algo similar.

<div class="text-center">
  <img src="/assets/images/posts/alt-text.png" class="img-fluid" alt="Interface do Wordpress para inserir texto alternativo" />
</div>

## Vamos criar o texto alternativo perfeito

Aqui estão os passos para criar textos alternativos fabulosos!

### Descreva a imagem

Pode parecer óbvio, mas um texto alternativo deve descrever uma imagem. Por exemplo:

* **"Grupo de pessoas em uma estação de trem."**;
* **"Bebê feliz brincando numa caixa de areia."**;
* **"Cinco pessoas na fila do supermercado."**;

**Coisas que não pertencem a um texto alternativo são:**

* O nome do fotografo. Isso é bem comum, mas não faz sentido;
* Palavras chave para SEO. Não preencha o texto alternativo com palavras irrelevantes que você espera classificar no page rank do Google. Não é por isso que são suficientes textos e isso irá confundir seus usuários.

### Conteúdo do texto alternativo depende do seu contexto

Como você descreve a imagem depende do seu contexto. Deixe-me dar-lhe um exemplo:

<div class="text-center">
  <img src="/assets/images/posts/image-alt.jpeg" class="img-fluid" alt="Close, fotografia em escala de cinza do homem de fora, face em foco, fundo não focado." />
</div>
<hr />

Se essa imagem fosse exibida em um artigo sobre fotografia, o texto alternativo poderia ser algo ao longo das linhas de:

* "Close, fotografia em escala de cinza do homem de fora, face em foco, fundo não focado".

Se a imagem estiver em um site sobre uma série de TV, um texto alternativo apropriado pode ser completamente diferente:

* "Estrela do show, Adam Lee, olhando estridente na chuva".

Então, escreva um texto alternativo que seja o mais significativo possível para o usuário no contexto em que eles estão.

#### Mantenha-o conciso

Lendo a sessão anterior, você pode estar pensando consigo: *"Eu como um usuário vidente, posso perceber vários detalhes das imagens, como quem é, como é fotografado, tipo de jaqueta, idade aproximada do cara e muito mais.
Por que não escrever um texto alternativo detalhado e longo para que um usuário com deficiência visual obtenha tanta informação quanto eu?"*

Fico contente por ter perguntado!

Bem francamente, você pode inserir a informação necessária. Você também pode obter as informações necessárias da imagem, e é isso que estamos tentando alcançar para usuários com leitores de tela também. Dê as informações necessárias no texto alternativo, mas torne-o o mais curto e conciso possível.

Uma das poucas vezes que você deve escrever textos alternativos longos é quando você está descrevendo uma imagem contendo texto importante. Idealmente, você não deve ter imagens de texto, mas às vezes você precisa. Como em algumas capturas de tela ou fotos.

**Mas a regra geral é manter isso conciso e evitar uma experiência detalhada.**

### Não diga isso é uma imagem

Não inicie um texto alternativo com "Imagem de", "Foto de" ou similar. O leitor de tela adiciona isso por padrão. Então se você escrever "Imagem de" no texto alternativo, o leitor de tela dirá "Imagem Imagem de…" e bom isso não muito agradável.

Uma dica que você pode incluir no texto alternativo e no final dela descrever o tipo da imagem, como uma Ilustração.

<cite>"Cão pulando através de um aro. Ilustração."</cite>

### Fim com um período.

Termine um texto alternativo com um período. Isso tornará os leitores de tela em pausa um pouco após a última palavra no texto alternativo, o que cria uma experiência de leitura mais agradável para o usuário.

### Não use o atributo title

Muitas interfaces têm um campo para adicionar textos no title a imagens próximas de onde você pode adicionar um texto alternativo. Ignore o texto no atributo title! Ninguém os usa - eles não trabalham em telas sensíveis ao toque e na área de trabalho eles exigem que o usuário paira por um tempo sobre uma imagem, o que ninguém faz.

Além disso, adicionar um atributo title faz com que alguns leitores de tela leiam o title e o texto alternativo, que se torna redundante. Então, não adicione um atributo title.

### Quando não usar um texto alternativo

Na maioria dos casos você deve usar um texto alternativo para imagens, mas existem algumas execeções onde você deve deixar o atributo alt em branco.

<div class="alert alert-danger">
Nota importante: nunca remova o atributo alt, pois irá quebra o padrão do HTML.
</div>

Mas você é permitido inserir uma string vazia, desta forma: `alt=""`.

#### Faça isso nos seguinte casos

#### Imagens repetidas em feeds

Imagine que você está percorrendo seu feed do Twitter. Toda vez que quiser ler um novo tweet, primeiro você deve ouvir 

"Foto de perfil do usuário `<nome de usuário da pessoa que postou>`".

Na minha opinião, isso seria super irritante!
Outros exemplos de feeds são:

* Uma lista de links para artigos. Como o da página Artigos;
* Chat ou feed de mensagens;
* Feeds de comentários.

Portanto, para uma experiência de usuário ideal, deixe o texto alternativo em branco para imagens que são usadas repetidamente em feeds.

#### Ícones com labels

Você sempre deve ter labels ao lado de ícones. Supondo que você faça, o ícone não deve ter um texto alternativo. Deixe-me explicar o porquê!

Vamos dar um exemplo de mídia social como exemplo:

<img src="/assets/images/posts/icones-alt.png" class="img-fluid" alt="Icones do Facebook e Twitter" />

Se você escrevesse um texto alternativo para o ícone do Facebook, um leitor de tela diria algo ao longo da linha: "Facebook Facebook". Muito redundante!

OK, isso não é tecnicamente sobre textos alternativos, mas ainda é importante: **certifique-se de que tanto o ícone quanto o texto do link estão no mesmo atributo de link, para obter uma experiência fluída**. Como isso:

<pre>
  <code class="html">
    &lt;a href="..."&gt;
      &lt;img src="fb_icon.png" alt="" /&gt;
      Facebook
    &lt;/a&gt;
  </code>
</pre>

Outro erro comum está nos botões de menus:

<div class="text-center">
  <img src="/assets/images/posts/menu-hamburger.png" class="img-fluid" alt="Menu" />
</div>

Se o botão de menu não tiver um label visual — o que, de maneira direta, é realmente ruim para a experiência do usuário, ele precisa de um texto alternativo (ou outra maneira de descrever sua função no código, como `aria-label`).

Explique a função do ícone, como "Menu". Não escreva "Três linhas horizontais" ou "Hambúrguer principal", que infelizmente são exemplos reais em que eu tropecei.

Se o ícone do menu tiver um label, você deve deixar o texto alternativo em branco. Muitas vezes eu encontro botões de menu que são lidos como "Menu Menu". Quando cheguei no menu de menu Hamburger. Um pouco confuso, não diria?

#### Imagens em links

Geralmente uma imagem com um link é acompanhado com um texto. Como o exemplo abaixo:

<div class="text-center">
  <img src="/assets/images/posts/mourinho.png" class="img-fluid" alt="" />
</div>

Nesse caso, a imagem e o link devem estar na mesma tag de link no html. Você pode simplesmente deixar o texto alternativo em branco. O importante para o usuário é ouvir o texto do link.

Um texto alternativo da imagem só distrai, adicionando informações que o usuário não achará necessário. A imagem provavelmente é encontrada na página que está vinculada, e então você pode dar uma boa explicação sobre ela no atributo `alt`.

Se você realmente, precisar ter uma imagem em um link sem um texto de acompanhamento, então **o texto alternativo deve descrever o destino do link, e não a imagem**.

#### Imagens decorativas

De preferência, as imagens decorativas que não transmitem qualquer significado ao usuário devem ser colocadas como imagens de fundo em css. Provavelmente não é verdade, mas isso significa que você não precisa de textos alternativos sobre eles.

Eu classificaria a maioria das imagens nas quais você coloca o texto como decorativo. Você não precisa de um texto alternativo neles.

Um exemplo é a imagem de fundo na página inicial do Netflix:

<div class="text-center">
  <img src="/assets/images/posts/netflix.png" class="img-fluid" alt="" />
</div>

### Casos especiais

#### Logos no banner

Logos no banner quase sempre ligam para a página inicial do site. As opiniões variam um pouco sobre o tema de textos alternativos para logotipos.

Alguns dizem que deve incluir o nome da empresa, o fato de ser um logotipo e o destino do link. Como tal:
`"Axess Lab, logotipo, ir para página inicial."`

Na minha opinião, isso é um pouco detalhado. Muito barulho! Como meu leitor de tela já me diz que é uma imagem e um link, só sinto que preciso ouvir o nome da empresa.

Pelo fato de ser uma imagem, suponho que seja um logotipo e, pelo fato de ser um link, suponho que siga as convenções e os links para a página de início.

#### SVG

Gráficos vetoriais escaláveis (SVG) é um formato de imagem que está se tornando cada vez mais popular na web. E eu amo eles!

Eles mantêm sua nitidez enquanto fazem zoom e ocupam menos espaço para que os sites carregem mais rápido.
Existem dois caminhos principais para adicionar um SVG a uma página HTML.

Dentro de um elemento `img`. Nesse caso, basta adicionar um texto alternativo como de costume:

<pre>
  <code class="html">
    &lt;img src="dog.svg" alt="Cachorro brincando na grama." /&gt;
  </code>
</pre>

Usando uma tag `svg`. Se você usar esse método, não pode adicionar um atributo `alt` porque não há suporte para isso. No entanto, você pode contornar isso adicionando dois atributos wai-aria: `role="img"` e `aria-label="texto alternativo"`.

Na verdade, para o segundo caso, é suposto poder adicionar seu texto alternativo como título-elemento no `svg`, mas não há suporte suficiente para isso de navegadores e tecnologias de assistivas no momento.

O computador não pode fazer isso por mim?

Embora a machine learning e a inteligência artificial melhorem rapidamente e possam descrever algumas imagens com bastante precisão, elas não são suficientemente boas para entender o contexto relevante no momento.

Além disso, as máquinas não são suficientemente boas para decidir o que é "conciso", e muitas vezes descreverão muito ou muito pouco da imagem.

Facebook atualmente incluiu uma feature que descreve imagens automaticamente. Mas eu percebo que as descrições são muito genéricas. Uma imagem no meu feedback agora é descrita como: "Gatos dentro de casa". A foto atual exibe um gato caçando um rato de brinquedo.

**Então me desculpe, você ainda deve escrever textos alternativos!**

## Obrigado por criar uma web melhor!

Estou feliz por você ter lido até aqui! Isso quer dizer que você se importa em desenvolver uma web um lugar melhor para todos os usuários.

Compartilhe o conhecimento e continue sendo incrível!