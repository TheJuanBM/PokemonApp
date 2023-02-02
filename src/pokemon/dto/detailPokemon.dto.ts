import { DetailApiResponse, DetailPokemon } from '../interfaces/pokemon'

export function detailPokemonDto({ types, abilities, id }: DetailApiResponse): DetailPokemon {
  const typeFormat = types.map(({ type }) => type.name)

  const abilitiesFormat = abilities.map(({ ability }) => ability.name)

  return {
    id: String(id),
    types: typeFormat,
    abilities: abilitiesFormat
  }
}
