import { FilterSearch } from '../../interfaces/pokemon'

type ItemsBySearch = {
  label: string
  key: FilterSearch
}

export const itemsBySearch: ItemsBySearch[] = [
  { label: 'Name', key: 'name' },
  { label: 'Types', key: 'types' },
  { label: 'Color', key: 'color' },
  { label: 'Weight', key: 'weight' },
  { label: 'Height', key: 'height' },
  { label: 'Habitat', key: 'habitat' },
  { label: 'Egg Groups', key: 'eggGroups' }
]
