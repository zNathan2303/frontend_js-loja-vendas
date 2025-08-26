'use strict'

import produtos from './produtos_atualizados.json' with {type: "json"}

function criarCard(produto) {
    const container = document.getElementById('container')

    const card = document.createElement('div')
    const imagem = document.createElement('img')
    const infoProduto = document.createElement('div')
    const nome = document.createElement('span')
    const preco = document.createElement('span')
    const descricao = document.createElement('span')

    card.className = 'card'
    imagem.className = 'imagem-produto'
    infoProduto.className = 'info-produto'
    nome.className = 'nome-produto'
    preco.className = 'preco-produto'
    descricao.className = 'descricao-produto'

    imagem.src = './img/' + produto.imagem
    nome.textContent = produto.nome
    preco.textContent = 'R$ ' + produto.preco
    descricao.textContent = produto.descricao

    card.appendChild(imagem)
    infoProduto.appendChild(nome)
    infoProduto.appendChild(preco)
    infoProduto.appendChild(descricao)
    card.appendChild(infoProduto)

    container.appendChild(card)
}

produtos.forEach(criarCard)