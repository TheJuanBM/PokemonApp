import { PokemonSpecieResponse } from '../interfaces/pokemon'

interface SpeciePokemon {
  color: string
  habitat: string
  generation: string
  eggGroups: string[]
}

export function specieDto(specie: PokemonSpecieResponse): SpeciePokemon {
  return {
    color: specie.color.name,
    habitat: specie.habitat.name,
    generation: specie.generation.name,
    eggGroups: specie.egg_groups.map(({ name }) => name)
  }
}
