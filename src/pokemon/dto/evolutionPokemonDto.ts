import { EvolutionPokemonResponse } from '../interfaces/pokemon'

export function evolutionPokemonDto(evolutionPokemonResponse: EvolutionPokemonResponse): string {
  const evolvesTo = evolutionPokemonResponse.chain.evolves_to[0]

  if (!evolvesTo) return ''

  return evolvesTo.species.name
}
