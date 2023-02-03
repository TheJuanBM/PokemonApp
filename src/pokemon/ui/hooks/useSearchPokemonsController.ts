import { useState } from 'react'

import PokemonController from '../../controller/pokemon.controller'
import { FormSearchValues } from '../../interfaces/pokemon'
import Pokemon from '../../model/pokemon.model'

interface UseSearchPokemonsControllerProps {
  pokemons: Pokemon[]
  pokemonInstance: PokemonController
}

export function useSearchPokemonsController({ pokemons, pokemonInstance }: UseSearchPokemonsControllerProps) {
  const [isSearching, setIsSearching] = useState(false)
  const [pokemonsFiltereds, setPokemonsFiltereds] = useState<Pokemon[]>([])

  function searchPokemon(filters: FormSearchValues) {
    setIsSearching(true)
    const responseFilter = pokemonInstance.filterPokemon({ pokemons, filters })

    setPokemonsFiltereds(responseFilter)
  }

  function clearSearch() {
    setIsSearching(false)
    setPokemonsFiltereds([])
  }

  const result = isSearching ? pokemonsFiltereds : pokemons

  return { isSearching, clearSearch, searchPokemon, pokemons: result }
}
