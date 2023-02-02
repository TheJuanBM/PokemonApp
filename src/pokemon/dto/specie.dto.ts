import { PokemonSpecieResponse } from '../interfaces/pokemon'

interface SpeciePokemon {
  color: string
  generation: string
  eggGroups: string[]
}

export function specieDto(specie: PokemonSpecieResponse): SpeciePokemon {
  return {
    color: specie.color.name,
    generation: specie.generation.name,
    eggGroups: specie.egg_groups.map(({ name }) => name)
  }
}
