'use strict'

import produtos from './produtos_atualizados.json' with {type: "json"}

function criarCard(produto) {
    const container = document.getElementById('container')

    const card = document.createElement('div')
    const imagem = document.createElement('img')
    const infoProduto = document.createElement('div')
    const nome = document.createElement('span')
    const preco = document.createElement('span')
    const classificacao = document.createElement('span')
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
    classificacao.textContent = classificacaoProduto(produto.classificacao)
    descricao.textContent = produto.descricao

    clickNaImagem(imagem, nome)

    card.appendChild(imagem)
    infoProduto.append(nome, preco, classificacao, descricao)
    card.appendChild(infoProduto)

    container.appendChild(card)
}

produtos.forEach(criarCard)

function clickNaImagem(imagem, nomeProduto) {
    imagem.addEventListener('click', () => {
        alert(`Você clicou no(a) ${nomeProduto.textContent}`)
    })
}

function classificacaoProduto(classificacao) {
    switch (classificacao) {
        case 0:
            return '☆☆☆☆☆'
            break
        case 1:
            return '★☆☆☆☆'
            break
        case 2:
            return '★★☆☆☆'
            break
        case 3:
            return '★★★☆☆'
            break
        case 4:
            return '★★★★☆'
            break
        case 5:
            return '★★★★★'
            break
        default:
            return 'Sem avaliação'
    }
}