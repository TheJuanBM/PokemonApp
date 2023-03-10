import Pokemon from '../model/pokemon.model'

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
  stats: {
    label: string
    value: number
  }[]
}

export interface DetailApiResponse {
  id: number
  weight: number
  height: number
  stats: {
    stat: Name
    base_stat: number
  }[]
  types: {
    type: Name
  }[]
}

export interface JoinPokemonDataParams {
  pokemonList: PokemonInit[]
  pokemonDetail: DetailPokemon[]
}

export interface PokemonSpecieResponse {
  color: Name
  habitat: Name
  generation: Name
  egg_groups: Name[]
}

type EvolvesTo = {
  species: Name
}

export interface EvolutionPokemonResponse {
  chain: {
    evolves_to: EvolvesTo[]
  }
}

export type FilterSearch = 'name' | 'types' | 'color' | 'habitat' | 'weight' | 'height' | 'eggGroups'

export interface FormSearchValues {
  search: string
  type: FilterSearch
}

export interface FilterPokemonParams {
  pokemons: Pokemon[]
  filters: FormSearchValues
}

export type ItemsToFilter = {
  [key in FilterSearch]: (search: string) => Pokemon[]
}
