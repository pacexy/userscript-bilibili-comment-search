import { useRef, useState } from 'react'
import { fetchComments } from './api'
import { Reply } from './reply'
import { extractVideoId } from './utils'

import './App.css'

let promise: Promise<Reply[]> | null = null

export default function App() {
  const dialogRef = useRef<HTMLDialogElement>(null)
  const [comments, setComments] = useState<Reply[]>()
  return (
    <div>
      <dialog ref={dialogRef} className='comment-search-dialog'>
        <button onClick={() => dialogRef.current?.close()}>Close</button>
        <input
          className='comment-search-input'
          placeholder='搜索评论'
          onKeyDown={async (e) => {
            if (e.key === 'Enter') {
              e.preventDefault()
              // `e.currentTarget` will be null after `await`
              const keyword = e.currentTarget.value
              const allComments = await promise!
              const comments = allComments.filter((comment) =>
                comment.content.message.includes(keyword)
              )
              setComments(comments)
            }
          }}
        />
        <ul>
          {comments?.map((comment) => (
            <li key={comment.rpid} className='comment'>
              <img src={comment.member.avatar} className='comment-avatar' />
              <div className='comment-content'>
                <span className='comment-username'>{comment.member.uname}</span>
                <span className='comment-message'>
                  {comment.content.message}
                </span>
              </div>
            </li>
          ))}
        </ul>
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
