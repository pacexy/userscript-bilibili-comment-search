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
