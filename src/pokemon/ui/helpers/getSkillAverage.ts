import Pokemon from '../../model/pokemon.model'

type SkillItems = 'hp' | 'speed' | 'attack' | 'defense' | 'special-attack' | 'special-defense'

type InitValue = {
  [key in SkillItems]: number
}

const initValue: InitValue = {
  hp: 0,
  speed: 0,
  attack: 0,
  defense: 0,
  'special-attack': 0,
  'special-defense': 0
}

export function getSkillAverage(pokemons: Pokemon[]) {
  function getSkill(pokemon: Pokemon, skill: SkillItems) {
    return pokemon.stats.find(({ label }) => label === skill)!.value
  }

  const pokemonsMaped = pokemons.map(pokemon => {
    return {
      hp: getSkill(pokemon, 'hp'),
      speed: getSkill(pokemon, 'speed'),
      attack: getSkill(pokemon, 'attack'),
      defense: getSkill(pokemon, 'defense'),
      'special-attack': getSkill(pokemon, 'special-attack'),
      'special-defense': getSkill(pokemon, 'special-defense')
    }
  })

  const sumSkills = pokemonsMaped.reduce((acc, curr) => {
    return {
      hp: acc.hp + curr.hp,
      speed: acc.speed + curr.speed,
      attack: acc.attack + curr.attack,
      defense: acc.defense + curr.defense,
      'special-attack': acc['special-attack'] + curr['special-attack'],
      'special-defense': acc['special-defense'] + curr['special-defense']
    }
  }, initValue)

  return sumSkills
}
