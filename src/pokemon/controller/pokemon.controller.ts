import { IMAGE_POKEMON_URL, POKEMON_URL } from '@env'

import { detailPokemonDto } from '../dto/detailPokemon.dto'
import { specieDto } from '../dto/specie.dto'
import { DetailApiResponse, PokemonSpecieResponse, ResponseApiPokemon } from '../interfaces/pokemon'
import PokemonService from '../service/pokemon.service'

export default class PokemonController {
  PokemonService = new PokemonService()

  public async getPokemons(endPoint: string) {
    const { data } = await this.PokemonService.getData<ResponseApiPokemon>(endPoint)

    const mapResultPokemons = data.results.map(async pokemon => {
      const pokemonId = pokemon.url.split('/')[6]

      const detail = await this.getPokemonDetailById(pokemonId)

      const specie = await this.getSpecieById(pokemonId)

      return {
        name: pokemon.name,
        image: `${IMAGE_POKEMON_URL}/${pokemonId}.png`,
        ...specie,
        ...detail
      }
    })

    const mappedData = await Promise.all(
      mapResultPokemons.map(async pokemon => {
        const response = await pokemon

        return response
      })
    )

    return {
      next: data.next,
      pokemonList: mappedData
    }
  }

  private async getPokemonDetailById(pokemonId: string) {
    const { data } = await this.PokemonService.getData<DetailApiResponse>(`${POKEMON_URL}/pokemon/${pokemonId}`)

    return detailPokemonDto(data)
  }

  private async getSpecieById(pokemonId: string) {
    const { data } = await this.PokemonService.getData<PokemonSpecieResponse>(
      `${POKEMON_URL}/pokemon-species/${pokemonId}`
    )

    return specieDto(data)
  }
}
