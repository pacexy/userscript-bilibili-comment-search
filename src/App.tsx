import { useRef, useState } from 'react'
import { fetchComments } from './api'
import { Reply } from './reply'
import { extractVideoId, formatDateTime } from './utils'

import './App.css'

let promise: Promise<Reply[]> | null = null

export default function App() {
  const dialogRef = useRef<HTMLDialogElement>(null)
  const [comments, setComments] = useState<Reply[]>()
  return (
    <div>
      <dialog ref={dialogRef}>
        <div className='header'>
          <button onClick={() => dialogRef.current?.close()}>X</button>
        </div>
        <input
          placeholder='搜索评论'
          onKeyDown={async (e) => {
            if (e.key === 'Enter') {
              e.preventDefault()
              // `e.currentTarget` will be null after `await`
              const keyword = e.currentTarget.value
              const allComments = await promise!
              const comments = searchComments(allComments, keyword)
              setComments(comments)
            }
          }}
        />
        <div className='comment-tree'>
          <CommentTree comments={comments} />
        </div>
      </dialog>
      <button
        onClick={() => {
          dialogRef.current?.showModal()
          const videoId = extractVideoId(window.location.href)
          promise = fetchComments(videoId)
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
      {comments?.map((comment) => (
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
            <span className='comment-item-message'>
              {comment.content.message}
            </span>
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

function searchComments(allComments: Reply[], keyword: string) {
  return allComments.filter((comment) => {
    return (
      comment.content.message.includes(keyword) ||
      comment.replies?.some((reply) => reply.content.message.includes(keyword))
    )
  })
}
