export type OnePostType = {
  readonly title: string,
  readonly postMessage: string
}

export type StatePostType = {
  posts: Array<OnePostType>
}

export type ActionsPostType = {
  readonly type:  "SET_POST_TITLE",
  readonly title: string,
  readonly postMessage: string
}

export type StatePageType = {
  page: number
}
