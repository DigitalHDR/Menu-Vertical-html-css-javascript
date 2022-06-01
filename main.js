let list = document.querySelectorAll('.navigation li')

function ativaLinkHover() {
  list.forEach(item => {
      item.classList.remove('ativo')
    })
    this.classList.add('ativo')
}

list.forEach(item => item.addEventListener('mouseover', ativaLinkHover))
