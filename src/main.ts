import { fetchComments } from './api'
import './main.css'
import { Reply } from './reply'

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
        showComments(dialog, (e.currentTarget as HTMLInputElement).value)
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

async function showComments(dialog: HTMLDialogElement, input: string) {
  dialog.showModal()
  const videoId = extractVideoId(window.location.href)
  const allComments = await fetchComments(videoId)
  const comments = allComments.filter((comment) =>
    comment.content.message.includes(input)
  )

  const commentList = dialog.querySelector('ul')
  comments.forEach((comment) => {
    commentList?.appendChild(createCommentElement(comment))
  })
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
