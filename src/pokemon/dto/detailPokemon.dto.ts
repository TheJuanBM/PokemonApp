import { DetailApiResponse, DetailPokemon } from '../interfaces/pokemon'

export function detailPokemonDto(pokemonResponse: DetailApiResponse): DetailPokemon {
  const typeFormat = pokemonResponse.types.map(({ type }) => type.name)

  return {
    id: String(pokemonResponse.id),
    types: typeFormat,
    weight: pokemonResponse.weight,
    height: pokemonResponse.height
  }
}
