export interface ResponseApiPokemon {
  next: string
  count: number
  previous: null
  results: Result[]
}

interface Result {
  url: string
  name: string
}

export interface PokemonInit {
  id: string
  name: string
  image: string
}

export interface DetailPokemon {
  id: string
  types: string[]
  abilities: string[]
}

export interface DetailApiResponse {
  id: number
  types: Array<{ type: Species }>
  abilities: { ability: Species }[]
}

interface Species {
  name: string
}

export interface JoinPokemonDataParams {
  pokemonList: PokemonInit[]
  pokemonDetail: DetailPokemon[]
}
