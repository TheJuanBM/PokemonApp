import { useState } from 'react'

import Pokemon from '../../model/pokemon.model'

export interface CatchPokemonController {
  capturedPokemons: Pokemon[]
  existPokemonByType(pokemon: Pokemon): boolean
  existPokemonById: (pokemon: string) => boolean
  handlePokemonsState: (pokemon: Pokemon) => void
  existPokemonByEvolutionAndId(pokemon: Pokemon): boolean
}

export function useCatchPokemonController(): CatchPokemonController {
  const [capturedPokemons, setCapturedPokemons] = useState<Pokemon[]>([])

  function existPokemonByType(pokemon: Pokemon) {
    const existByType = capturedPokemons
      .map(({ types }) => pokemon.types.some(item => types.includes(item)))
      .some(item => item)

    return existPokemonById(pokemon.id) || existByType
  }

  function existPokemonById(pokemonId: string) {
    return capturedPokemons.some(somePokemon => somePokemon.id === pokemonId)
  }

  function handlePokemonsState(pokemon: Pokemon) {
    if (existPokemonById(pokemon.id)) {
      return handleRemovePokemon(pokemon.id)
    }

    if (!existPokemonByType(pokemon)) {
      return handleCapturePokemon(pokemon)
    }
  }

  function existPokemonByEvolutionAndId(pokemon: Pokemon) {
    return capturedPokemons.some(
      somePokemon =>
        somePokemon.id === pokemon.id ||
        somePokemon.evolutionPokemon === pokemon.name ||
        somePokemon.name === pokemon.evolutionPokemon
    )
  }

  function handleCapturePokemon(pokemon: Pokemon) {
    setCapturedPokemons(prev => [...prev, pokemon])
  }

  function handleRemovePokemon(pokemonId: string) {
    const removeItem = capturedPokemons.filter(({ id }) => id !== pokemonId)

    setCapturedPokemons(removeItem)
  }

  return {
    capturedPokemons,
    existPokemonById,
    existPokemonByType,
    handlePokemonsState,
    existPokemonByEvolutionAndId
  }
}
