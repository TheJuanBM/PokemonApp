import React from 'react'
import { Text, View } from 'react-native'

import Pokemon from '../../../model/pokemon.model'
import { getSkillAverage } from '../../helpers'
import { styles } from './styles'

interface SummarySkillsProps {
  pokemons: Pokemon[]
}

export function SummarySkills({ pokemons }: SummarySkillsProps) {
  const skillSum = getSkillAverage(pokemons)

  return (
    <View style={styles.SummaryContainer}>
      <Text style={styles.SummaryTitle}>Summary of team statistics</Text>
      <Text style={styles.SummaryItem}>{`Hp: ${skillSum.hp}`}</Text>
      <Text style={styles.SummaryItem}>{`Speed: ${skillSum.speed}`}</Text>
      <Text style={styles.SummaryItem}>{`Attack: ${skillSum.attack}`}</Text>
      <Text style={styles.SummaryItem}>{`Defense: ${skillSum.defense}`}</Text>
      <Text style={styles.SummaryItem}>{`Special attack: ${skillSum['special-attack']}`}</Text>
      <Text style={styles.SummaryItem}>{`Special defense: ${skillSum['special-defense']}`}</Text>
    </View>
  )
}
