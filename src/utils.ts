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
