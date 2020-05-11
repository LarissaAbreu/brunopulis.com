---
layout: post
title: "Criando alias para otimizar seu trabalho"
date: 2020-05-11 18:20:08
thumb: '/assets/images/posts/photo-thumb-linux.jpg'
featured: '/assets/images/posts/terminal.jpg'
alt: Terminal de um computador com vários comando digitados na tela
legend: 
link_text: Foto por Arget em Unsplash
link_image: https://unsplash.com/photos/zvHhKiVuR9M
description:
categories: dicas
tags: alias, linux
description:  |-
  No dia a dia de um desenvolvedor é muito comum repetirmos diversos comandos, fazendo assim, o trabalho um pouco repetitivo. Pensando nisso os alias foram criados como uma forma de encurtar alguns comandos. Nesse post eu te mostro como criar dois alias de forma rápida e prática.
twitter_text: |-
  No dia a dia de um desenvolvedor é muito comum repetirmos diversos comandos, fazendo assim, o trabalho um pouco repetitivo. Pensando nisso os alias foram criados como uma forma de encurtar alguns comandos. Nesse post eu te mostro como criar dois alias de forma rápida e prática.
introduction: |-
  No dia a dia de um desenvolvedor é muito comum repetirmos diversos comandos, fazendo assim, o trabalho um pouco repetitivo. Pensando nisso os alias foram criados como uma forma de encurtar alguns comandos. Nesse post eu te mostro como criar dois alias de forma rápida e prática.
---

Em nosso cotidiano, digitamos uma infinidade de comandos, seja no código fonte ou no terminal.

A grande maioria desses comandos, são tarefas repetitivas que podem ser otimizados com a criação de alguns `alias`, que assim, tornam nosso dia mais produtivo. 

Esse artigo visa demonstrar a criação de `alias` no terminal para encurtar e otimizar alguns comandos.

## Exemplo prático

Como analista de teste, utilizo o **git** como versionador de códigos juntamente com o meu time. Dentre algumas tarefas que faço todos os dias e atualizar minha base de código e enviar algumas alterações relacionados aos testes que possuímos.

Além disso, abro alguns <span lang="en">pull requests</span> para a melhoria contínua da aplicação. 

Para atualizar nosso código usamos o comando <code lang="en">git push</code> que envia as modificações para o servidor. Todos os dias faço o uso dele, como descrito logo abaixo:

<pre>
  <code class="git">
    git push origin master
  </code>
</pre>

Todos os dias também, tenho que usar o docker para subir a aplicação e preciso digitar dois comandos que sempre esqueço. 😂

Os dois comandos estão descrito abaixo

<pre>
  <code class="bash">
    # Inicializa o docker
    docker-compose up -d nginx mysql redis workspace

    # Executa o container
    docker-compose exec workspace bash
  </code>
</pre>

Pensando nisso decidi criar um `alias` para otimizar esse comando e encurtar ele. Pessoalmente eu detesto ter que ficar digitando uma infinidade de comandos no terminal, sou fã de coisas simples, como iniciar um banco de dados com apenas uma única linha. 

Com os alias isso é possível, desde que, passamos os paramêtros corretos para o alias. A estrutura do alias consiste em:

<pre>
  <code class="bash">
    alias comando_encurtado='comando real' 

    # exemplo de um comando alias
    alias ..="cd .."
  </code>
</pre>

Ao digitar no terminal `..` ele irá entender que o `..` é um atalho para o `cd ..`. Isso é fantástico, eu posso customizar comandos do sistema operacional e também de aplicações, como por exemplo, iniciar o Visual Code com uma única linha de comando.

Para utilizarmos precisamos configurar os alias em nosso terminal. O arquivo de configuração padrão no Ubuntu é o `.bash_profile`, no meu caso estou usando o `zsh` que é uma outra versão do bash. O ZSH possuí o arquivo de configuração `.zshrc`.

Caso esses arquivos não existem eles devem ser criados com o comando:

<pre>
  <code class="bash">
    # Bash padrão
    touch .bashrc

    # ZSH
    touch .zshrc
  </code>
</pre>


**Importante**, a primeira coisa que iremos fazer e verificar se existe o arquivo de configuração. Caso não exista, devo criar o arquivo conforme acima.

<pre>
  <code class="bash">
    # vai para o diretório raiz
    cd ~/

    # listo os diretórios
    ls -lha
  </code>
</pre>

Se a minha resposta for parecida com essa, então meu arquivo de configuração está criado:

<pre>
  <code class="bash">
    -rw-r--r--  1 pulis 4,5K mai  6 11:49  .zshrc
  </code>
</pre>

Com o arquivo criado, iremos abri-lo digitando no terminal: `gedit .zshrc` e vou incluir os alias que quero para o docker.

<pre>
  <code class="bash">
    alias init='docker-compose up -d nginx mysql redis workspace'
    alias run='docker-compose exec workspace bash'

    # reiniciando o terminal para aplicar as modificações
    source .zshrc
  </code>
</pre>

Após o terminal reiniciado ele reconhecerá os comandos. Assim digitaria:  

<pre>
  <code class="bash">
    # inicializando
    init

    # executando
    run
  </code>
</pre>

## Conclusão

Os comandos alias são poderosos e podem te ajudar bastante no dia a dia. No meu github eu tenho uma [coleção de alias](https://github.com/brunopulis/dotfiles/blob/master/.bash_profile).