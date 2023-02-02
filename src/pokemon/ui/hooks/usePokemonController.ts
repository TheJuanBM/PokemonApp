import { POKEMON_URL } from '@env'
import { useEffect, useRef, useState } from 'react'

import PokemonController from '../../controller/pokemon.controller'
import Pokemon from '../../model/pokemon.model'

const pokemonInstance = new PokemonController()

export function usePokemonController() {
  const [isLoading, setIsLoading] = useState(true)
  const [pokemons, setPokemons] = useState<Pokemon[]>([])

  const urlPokemon = useRef(`${POKEMON_URL}/pokemon?limit=10`)

  const getPokemons = async () => {
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

  return { pokemons, isLoading, getPokemons }
}
