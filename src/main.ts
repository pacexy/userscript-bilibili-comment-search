import { fetchComments } from './api'
import './main.css'
import { Reply } from './reply'

let promise: Promise<Reply[]> | null = null

function run() {
  const ul = document.querySelector('ul.nav-bar')

  if (ul) {
    const li = document.createElement('li')
    const button = document.createElement('button')
    const dialog = createDialog()

    li.style.marginLeft = 'auto'
    button.textContent = '搜索评论'

    button.addEventListener('click', (e) => {
      e.preventDefault()
      dialog.showModal()
      const videoId = extractVideoId(window.location.href)
      promise = fetchComments(videoId)
    })

    li.appendChild(dialog)
    li.appendChild(button)
    ul.appendChild(li)
  }
}

function createDialog() {
  const dialog = document.createElement('dialog')
  const closeButton = document.createElement('button')
  const commentList = document.createElement('ul')

  const input = document.createElement('input')
  input.placeholder = '搜索评论'
  input.classList.add('comment-search-input')
  input.addEventListener('keydown', (e) => {
    if (e.key === 'Enter') {
      e.preventDefault()
      showComments(dialog, (e.target as HTMLInputElement).value)
    }
  })

  dialog.classList.add('comment-search-dialog')

  closeButton.textContent = 'Close'
  closeButton.addEventListener('click', () => {
    dialog.close()
  })

  dialog.appendChild(closeButton)
  dialog.appendChild(input)
  dialog.appendChild(commentList)

  return dialog
}

async function showComments(dialog: HTMLDialogElement, input: string) {
  const allComments = await promise!
  const comments = allComments.filter((comment) =>
    comment.content.message.includes(input)
  )

  const commentList = dialog.querySelector('ul')
  const fragment = document.createDocumentFragment()

  comments.forEach((comment) => {
    fragment.appendChild(createCommentElement(comment))
  })

  commentList?.replaceChildren(fragment)
}

function createCommentElement(comment: Reply) {
  const li = document.createElement('li')

  const avatar = document.createElement('img')
  avatar.src = comment.member.avatar
  avatar.classList.add('comment-avatar')

  const username = document.createElement('span')
  username.textContent = comment.member.uname
  username.classList.add('comment-username')

  const message = document.createElement('span')
  message.textContent = comment.content.message
  message.classList.add('comment-message')

  const content = document.createElement('div')
  content.appendChild(username)
  content.appendChild(message)
  content.classList.add('comment-content')

  li.appendChild(avatar)
  li.appendChild(content)
  li.classList.add('comment')
  return li
}

function extractVideoId(url: string) {
  const match = url.match(/\/video\/(BV\w+)\//)
  if (!match) {
    throw new Error(`Failed to extract video id from url: ${url}`)
  }
  return match[1]
}

window.addEventListener('load', run)
