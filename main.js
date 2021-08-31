//=============ABRIR E FECHAR O MENU===============//
const nav = document.querySelector('#header nav')
const toggle = document.querySelectorAll('nav .toggle')

for (const element of toggle) {
  element.addEventListener('click', function () {
    nav.classList.toggle('show')
  })
}

const list = document.querySelectorAll('nav li')
for (const element of list) {
  element.addEventListener('click', function () {
    nav.classList.remove('show')
  })
}

//===============PEDIDO===================//
function order() {
  var nome = document.getElementById('nome').value
  var pedido = document.getElementById('pedido').value
  var numero = document.getElementById('numero').value
  var address = document.getElementById('address').value
  if ((nome == '') | (pedido == '') | (numero == '') | (address == '')) {
    alert('Preencha todos os espaços do pedido')
    document.getElementById('botao-pedido').target = ''
    document.getElementById('botao-pedido').href = '#cardapio-order'
  } else {
    document.getElementById('botao-pedido').target = '_blank'
    document.getElementById('botao-pedido').href =
      'https://api.whatsapp.com/send?phone=5582981571008&text=Nome: ' +
      nome +
      ' Contato: ' +
      numero +
      ' Endereço: ' +
      address +
      ' Pedido: ' +
      pedido
  }
}
