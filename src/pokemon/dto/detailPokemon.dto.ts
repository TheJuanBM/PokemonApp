import { DetailApiResponse, DetailPokemon } from '../interfaces/pokemon'

export function detailPokemonDto(pokemonResponse: DetailApiResponse): DetailPokemon {
  const types = pokemonResponse.types.map(({ type }) => type.name)

  const stats = pokemonResponse.stats.map(stat => ({
    value: stat.base_stat,
    label: stat.stat.name
  }))

  return {
    stats,
    types,
    id: String(pokemonResponse.id),
    weight: pokemonResponse.weight,
    height: pokemonResponse.height
  }
}
