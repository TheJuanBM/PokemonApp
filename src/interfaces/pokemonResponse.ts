export interface Pokemon {
  id: string
  name: string
  image: string
  color?: string
}

export interface Response {
  url: string
  name: string
}

export interface PokemonResponse {
  next: string
  count: number
  previous: null
  results: Response[]
}
