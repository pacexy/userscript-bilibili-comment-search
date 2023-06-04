import { useRef, useState } from 'react'
import Highlighter from 'react-highlight-words'
import { PAGE_LIMIT, fetchComments } from './api'
import { Reply } from './types/reply'
import { extractVideoId, formatDateTime } from './utils'
import { version } from '../package.json'

import './App.css'

let keyword = ''

export default function App() {
  const dialogRef = useRef<HTMLDialogElement>(null)
  const inputRef = useRef<HTMLInputElement>(null)
  const [comments, setComments] = useState<Reply[]>()
  const promiseRef = useRef<Promise<Reply[]> | null>(null)

  return (
    <div>
      <dialog
        ref={dialogRef}
        onClick={(e) => {
          const rect = e.currentTarget.getBoundingClientRect()
          if (
            e.clientY < rect.top ||
            e.clientY > rect.bottom ||
            e.clientX < rect.left ||
            e.clientX > rect.right
          ) {
            e.currentTarget.close()
          }
        }}
      >
        <div className='header'>
          <h1>
            Bilibili Comment Search {''}
            <span>v{version}</span>
          </h1>
          <button onClick={() => dialogRef.current?.close()}>X</button>
        </div>
        <input
          ref={inputRef}
          placeholder='搜索评论'
          onKeyDown={(e) => {
            if (e.key === 'Enter' && promiseRef.current) {
              e.preventDefault()
              keyword = e.currentTarget.value
              promiseRef.current
                .then((allComments) => {
                  const comments = searchComments(allComments)
                  setComments(comments)
                })
                .catch((e) => {
                  console.error(e)
                })
            }
          }}
        />
        <div className='note'>
          Note: 由于性能和 Rate Limit 的原因，目前仅会加载 {PAGE_LIMIT}{' '}
          页评论，即 {PAGE_LIMIT} * 49 条评论，及其至多 3 条子评论。
        </div>
        <div className='comment-tree'>
          <CommentTree comments={comments} />
        </div>
      </dialog>
      <button
        onClick={() => {
          dialogRef.current?.showModal()
          inputRef.current?.focus()
          const videoId = extractVideoId(window.location.href)
          promiseRef.current = fetchComments(videoId)
        }}
      >
        搜索评论
      </button>
    </div>
  )
}

interface CommentProps {
  comments?: Reply[] | null
  sub?: boolean
}
const CommentTree: React.FC<CommentProps> = ({ comments, sub = false }) => {
  if (!comments) return null
  return (
    <ul>
      {comments
        .sort((c1, c2) => c1.ctime - c2.ctime)
        .map((comment) => (
          <li
            key={comment.rpid}
            className='comment-item'
            style={{
              marginTop: sub ? '10px' : '20px',
            }}
          >
            <img
              src={comment.member.avatar}
              className='comment-item-avatar'
              style={{
                width: sub ? '28px' : '40px',
                height: sub ? '28px' : '40px',
              }}
            />
            <div
              className='comment-item-content'
              style={{
                ...(!sub && {
                  display: 'flex',
                  flexDirection: 'column',
                }),
              }}
            >
              <span className='comment-item-username'>
                {comment.member.uname}
              </span>
              <Highlighter
                className='comment-item-message'
                highlightClassName='comment-item-highlight'
                searchWords={[keyword]}
                autoEscape={true}
                textToHighlight={comment.content.message}
              />
              <div className='comment-item-time'>
                {formatDateTime(comment.ctime)}
              </div>
              <CommentTree comments={comment.replies} sub />
            </div>
          </li>
        ))}
    </ul>
  )
}

function searchComments(allComments: Reply[]) {
  return allComments.filter((comment) => {
    return (
      comment.content.message.includes(keyword) ||
      comment.replies?.some((reply) => reply.content.message.includes(keyword))
    )
  })
}
