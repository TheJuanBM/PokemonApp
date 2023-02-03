import { useState } from 'react'

import { FormSearchProps } from '..'
import { FilterSearch, FormSearchValues } from '../../../../interfaces/pokemon'

export function useForm({ onSearch, clearSearch, isSearching }: FormSearchProps) {
  const [values, setSearch] = useState<FormSearchValues>({ search: '', type: 'name' })

  function handleChangeText(search: string) {
    setSearch(prevSearch => ({ ...prevSearch, search }))
  }

  function handleChangeType(type: FilterSearch) {
    setSearch(prevSearch => ({ ...prevSearch, type }))

    onSearch({ search: values.search, type })
  }

  function onSubmit() {
    if (isSearching) {
      return onClear()
    }

    onSearch(values)
  }

  function onClear() {
    clearSearch()
    setSearch(prevStatus => ({ ...prevStatus, search: '' }))
  }

  const isText = !values.search.length

  return { values, onSubmit, isText, handleChangeType, handleChangeText }
}
