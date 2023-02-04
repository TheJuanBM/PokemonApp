import { IMAGE_POKEMON_URL, POKEMON_URL } from '@env'

import { detailPokemonDto } from '../dto/detailPokemon.dto'
import { evolutionPokemonDto } from '../dto/evolutionPokemonDto'
import { specieDto } from '../dto/specie.dto'
import {
  DetailApiResponse,
  EvolutionPokemonResponse,
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

      const evolutionPokemon = await this.getEvolutionPokemon(pokemonId)

      return {
        evolutionPokemon,
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

  public filterPokemon({ pokemons, filters }: FilterPokemonParams) {
    const itemsToFilter: ItemsToFilter = {
      weight: search => pokemons.filter(({ weight }) => String(weight) === search),
      height: search => pokemons.filter(({ height }) => String(height) === search),
      eggGroups: search => pokemons.filter(({ eggGroups }) => eggGroups.includes(search)),
      name: search => pokemons.filter(({ name }) => name.toLocaleLowerCase().includes(search)),
      color: search => pokemons.filter(({ color }) => color.toLocaleLowerCase().includes(search)),
      habitat: search => pokemons.filter(({ habitat }) => habitat.toLocaleLowerCase().includes(search)),
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

  private async getEvolutionPokemon(pokemonId: string) {
    const { data } = await this.PokemonService.getData<EvolutionPokemonResponse>(
      `${POKEMON_URL}/evolution-chain/${pokemonId}`
    )

    return evolutionPokemonDto(data)
  }
}
