import { IMAGE_POKEMON_URL, POKEMON_URL } from '@env'

import { detailPokemonDto } from '../dto/detailPokemon.dto'
import { specieDto } from '../dto/specie.dto'
import {
  DetailApiResponse,
  FilterPokemonParams,
  ItemsToFilter,
  PokemonSpecieResponse,
  ResponseApiPokemon
} from '../interfaces/pokemon'
import Pokemon from '../model/pokemon.model'
import PokemonService from '../service/pokemon.service'

export default class PokemonController {
  private readonly PokemonService = new PokemonService()

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

  public filterPokemon({ pokemons, filters }: FilterPokemonParams) {
    const itemsToFilter: ItemsToFilter = {
      name: search => pokemons.filter(({ name }) => name.includes(search)),
      color: search => pokemons.filter(({ color }) => color.includes(search)),
      weight: search => pokemons.filter(({ weight }) => String(weight) === search),
      height: search => pokemons.filter(({ height }) => String(height) === search),
      habitat: search => pokemons.filter(({ habitat }) => habitat.includes(search)),
      eggGroups: search => pokemons.filter(({ eggGroups }) => eggGroups.includes(search)),
      types: search => {
        return pokemons
          .map(pokemon => {
            const pokemonFiltered = pokemon.types.filter(type => type.includes(search))

            if (!pokemonFiltered.length) return null

            return pokemon
          })
          .filter(item => item) as Pokemon[]
      }
    }

    return itemsToFilter[filters.type](filters.search.toLocaleLowerCase())
  }
}
