import { name } from '../package.json'

export function assertEl<T extends Element>(el: T | null) {
  if (!el) {
    throw new Error('Element not found')
  }
  return el
}

export function debug(message: any) {
  if (import.meta.env.DEV) {
    console.log(`[${name}] ${message}`)
  }
}

export function extractVideoId(url: string) {
  const match = url.match(/\/video\/(BV\w+)\//)
  if (!match) {
    throw new Error(`Failed to extract video id from url: ${url}`)
  }
  return match[1]
}

export function formatDateTime(ts: number) {
  const date = new Date(ts * 1000)
  return date.toLocaleString('zh-CN', {
    year: 'numeric',
    month: '2-digit',
    day: '2-digit',
    hour: '2-digit',
    minute: '2-digit',
    hour12: false,
  })
}
