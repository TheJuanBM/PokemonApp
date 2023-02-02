import { IMAGE_POKEMON_URL, POKEMON_URL } from '@env'

import { detailPokemonDto } from '../dto/detailPokemon.dto'
import { DetailApiResponse, DetailPokemon, JoinPokemonDataParams, ResponseApiPokemon } from '../interfaces/pokemon'

import Pokemon from '../model/pokemon.model'
import PokemonService from '../service/pokemon.service'

export default class PokemonController {
  PokemonService = new PokemonService()

  public async getPokemons(endPoint: string) {
    const { data } = await this.PokemonService.getData<ResponseApiPokemon>(endPoint)

    const mapResultPokemons = data.results.map(async pokemon => {
      const pokemonId = pokemon.url.split('/')[6]

      const detail = await this.getDetailPokemon(pokemonId)

      return {
        name: pokemon.name,
        image: `${IMAGE_POKEMON_URL}/${pokemonId}.png`,
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

  public async getDetailPokemon(pokemonId: string) {
    const { data } = await this.PokemonService.getData<DetailApiResponse>(`${POKEMON_URL}/${pokemonId}`)

    return detailPokemonDto(data)
  }

  public joinPokemonData({ pokemonList, pokemonDetail }: JoinPokemonDataParams): Pokemon[] {
    const pokemonWhitDetail = pokemonList.map(pokemon => {
      const findPokemonDetail = pokemonDetail.find(({ id }) => id === pokemon.id) as DetailPokemon

      return {
        ...pokemon,
        ...findPokemonDetail
      }
    })

    return pokemonWhitDetail
  }
}
