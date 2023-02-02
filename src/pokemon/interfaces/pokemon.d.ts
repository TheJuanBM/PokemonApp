interface Name {
  name: string
}

export interface ResponseApiPokemon {
  next: string
  results: Result[]
}

interface Result extends Name {
  url: string
}

export interface PokemonInit extends Name {
  id: string
  image: string
}

export interface DetailPokemon {
  id: string
  weight: number
  height: number
  types: string[]
  abilities: string[]
  // generation: string
}

export interface DetailApiResponse {
  id: number
  weight: number
  height: number
  types: {
    type: Name
  }[]
  abilities: {
    ability: Name
  }[]
}

export interface JoinPokemonDataParams {
  pokemonList: PokemonInit[]
  pokemonDetail: DetailPokemon[]
}

export interface PokemonSpecieResponse {
  color: Name
  generation: Name
  egg_groups: Name[]
}
