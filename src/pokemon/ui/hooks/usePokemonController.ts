import { POKEMON_URL } from '@env'
import { useEffect, useRef, useState } from 'react'

import PokemonController from '../../controller/pokemon.controller'
import Pokemon from '../../model/pokemon.model'
import { useCatchPokemonController } from './useCatchPokemonController'
import { useSearchPokemonsController } from './useSearchPokemonsController'

const pokemonInstance = new PokemonController()

export function usePokemonController() {
  const [isLoading, setIsLoading] = useState(true)
  const [pokemons, setPokemons] = useState<Pokemon[]>([])

  const urlPokemon = useRef(`${POKEMON_URL}/pokemon?limit=50`)

  const catchPokemonController = useCatchPokemonController()
  const searchPokemonsController = useSearchPokemonsController({ pokemons, pokemonInstance })

  async function getPokemons() {
    setIsLoading(true)

    const data = await pokemonInstance.getPokemons(`${urlPokemon.current}`)

    urlPokemon.current = data.next

    setPokemons([...pokemons, ...data.pokemonList])

    setIsLoading(false)
  }

  useEffect(() => {
    getPokemons()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  return {
    isLoading,
    getPokemons,
    catchPokemonController,
    ...searchPokemonsController
  }
}
