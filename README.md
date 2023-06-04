# Bilibili Comment Search

Add comment searching support in Bilibili.

[Install on Greasyfork](https://greasyfork.org/en/scripts/467863-bilibili-comment-search)

![screenshot](./screenshot.webp)

## How it works

When the user clicks the "comment search" button, a modal will open and fetch all comments. The user can then input a keyword to search for specific comments. Once the fetching process is complete, only the comments that include the keyword will be displayed in the modal.

## Limitation

To improve performance and avoid hitting rate limits, currently only 20 pages of comments will be loaded, which is equivalent to 20 * 49 comments, along with a maximum of 3 sub-comments per comment.

## License

MIT
