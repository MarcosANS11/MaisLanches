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
