export type Platform = {
  id: number
  slug: string
  name: string
}

export type Genre = {
  id: number
  name: string
  image_background: string
}

export type Ordering = {
  id: number
  name: string
  slug: string
}

export type GameQuery = {
  genre: Genre | null
  platform: Platform | null
  ordering: Ordering | null
  search: string
}
