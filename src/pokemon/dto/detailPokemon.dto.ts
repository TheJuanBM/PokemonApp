import { DetailApiResponse, DetailPokemon } from '../interfaces/pokemon'

export function detailPokemonDto(pokemonResponse: DetailApiResponse): DetailPokemon {
  const typeFormat = pokemonResponse.types.map(({ type }) => type.name)

  const abilitiesFormat = pokemonResponse.abilities.map(({ ability }) => ability.name)

  return {
    id: String(pokemonResponse.id),
    types: typeFormat,
    abilities: abilitiesFormat,
    weight: pokemonResponse.weight,
    height: pokemonResponse.height
  }
}
