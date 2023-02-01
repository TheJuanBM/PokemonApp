import { POKEMON_URL } from '@env'
import { useEffect, useRef, useState } from 'react'

import { getData } from '../adapter/axios'
import { pokemonConvert } from '../dto/pokemonConvert'
import { Pokemon, PokemonResponse } from '../interfaces/pokemonResponse'

export function usePokemonController() {
  const [isLoading, setIsLoading] = useState(true)
  const [pokemons, setPokemons] = useState<Pokemon[]>([])

  const urlPokemon = useRef(`${POKEMON_URL}?limit=40`)

  const getPokemons = async () => {
    setIsLoading(true)

    const { data } = await getData<PokemonResponse>(urlPokemon.current)

    urlPokemon.current = data.next

    setPokemons(previousPokemons => [...previousPokemons, ...pokemonConvert(data.results)])

    setIsLoading(false)
  }

  useEffect(() => {
    getPokemons()
  }, [])

  return {
    isLoading,
    data: pokemons,
    getData: getPokemons
  }
}
