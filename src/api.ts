import { CommentDetailsResponse, CommentSort, CommentType } from './types/api'
import { Reply } from './types/reply'
import { debug } from './utils'

// for performance and rate limit, we only fetch the first 20 pages
export const PAGE_LIMIT = 20
const replies: Reply[] = []

export async function fetchComments(videoId: string) {
  if (replies.length > 0) {
    return replies
  }

  const pageSize = 20
  let page = 1

  while (true) {
    const params = new URLSearchParams({
      type: CommentType.VIDEO.toString(),
      oid: videoId,
      sort: CommentSort.TIME.toString(),
      pn: page.toString(),
      ps: pageSize.toString(),
    })

    debug(`fetch comments: page ${page}`)
    const response = await fetch(
      `https://api.bilibili.com/x/v2/reply?${params}`
    )

    const data: CommentDetailsResponse = await response.json()

    if (data.code !== 0) {
      throw new Error(`Failed to fetch comments: ${data.message}`)
    }

    if (!data.data) {
      throw new Error(`Failed to fetch comments: ${data.message}`)
    }

    replies.push(...(data.data.replies ?? []))

    if (
      page * pageSize >=
      Math.min(PAGE_LIMIT * pageSize, data.data.page.count)
    ) {
      break
    }

    page++
  }

  return replies
}
