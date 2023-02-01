import { IMAGE_POKEMON_URL } from '@env'
import { Pokemon, Response as PokemonResponse } from '../interfaces/pokemonResponse'

export function pokemonConvert(pokemon: PokemonResponse[]): Pokemon[] {
  return pokemon.map(({ url, name }) => {
    const pokemonId = url.split('/')[6]

    return {
      name,
      id: pokemonId,
      image: `${IMAGE_POKEMON_URL}/${pokemonId}.png`
    }
  })
}
