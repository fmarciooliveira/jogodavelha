var jogador = 'X'
var jogadorSelecionado = document.getElementById('jogador-selecionado')
var vencedorSelecionado = document.getElementById('vencedor-selecionado')

function escolherQuadrado(id) {
  var quadrado = document.getElementById(id)

  if (quadrado.innerHTML !== '-') {
    return
  }

  quadrado.innerHTML = jogador
  quadrado.style.color = '#000'

  if (jogador === 'X') {
    jogador = 'O'
  } else {
    jogador = 'X'
  }

  mudarJogador(jogador)
  if (checaVencedor() === 'X' || checaVencedor === 'O') {
    vencedorSelecionado.innerHTML = checaVencedor()
  }
}

function mudarJogador(valor) {
  jogador = valor
  jogadorSelecionado.innerHTML = jogador
}

function checaVencedor() {
  if (checaLinha(1, 2, 3)) {
    return document.getElementById(1).innerHTML
  }
  if (checaLinha(4, 5, 6)) {
    return document.getElementById(4).innerHTML
  }
  if (checaLinha(7, 8, 9)) {
    return document.getElementById(7).innerHTML
  }
  if (checaLinha(1, 4, 7)) {
    return document.getElementById(1).innerHTML
  }
  if (checaLinha(2, 5, 8)) {
    return document.getElementById(2).innerHTML
  }
  if (checaLinha(3, 6, 9)) {
    return document.getElementById(3).innerHTML
  }
  if (checaLinha(1, 5, 9)) {
    return document.getElementById(1).innerHTML
  }
  if (checaLinha(3, 5, 7)) {
    return document.getElementById(3).innerHTML
  }
  return false
}

function checaLinha(a, b, c) {
  a = document.getElementById(a).innerHTML
  b = document.getElementById(b).innerHTML
  c = document.getElementById(c).innerHTML

  if (a !== '-' && a !== '-' && a !== '-') {
    if (a === b && b === c) {
      return true
    }
  }

  return false
}
