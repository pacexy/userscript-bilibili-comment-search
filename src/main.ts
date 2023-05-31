import './main.css'

function run() {
  const ul = document.querySelector('ul.nav-bar')

  if (ul) {
    const li = document.createElement('li')
    const input = document.createElement('input')
    const dialog = createDialog()

    li.style.marginLeft = 'auto'
    input.placeholder = '搜索评论'
    input.classList.add('comment-search-input')

    input.addEventListener('keydown', (e) => {
      if (e.code === 'Enter') {
        e.preventDefault()
        dialog.showModal()
      }
    })

    li.appendChild(dialog)
    li.appendChild(input)
    ul.appendChild(li)
  }
}

function createDialog() {
  const dialog = document.createElement('dialog')
  const closeButton = document.createElement('button')
  const commentList = document.createElement('ul')

  dialog.classList.add('comment-search-dialog')

  closeButton.textContent = 'Close'
  closeButton.addEventListener('click', () => {
    dialog.close()
  })

  dialog.appendChild(closeButton)
  dialog.appendChild(commentList)

  return dialog
}

window.addEventListener('load', run)
