import { api } from '@/utils/api'
import { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'

import Detail from '@/components/detailPage'

const type = 'recipe'

export default function DIYRecipeDetailPage() {
  const [data, setData] = useState({})
  const { id } = useParams()

  const recipeData = async () => {
      const response = await api.get(`/diy-recipes/${id}`)
      const getData = response.data
      setData(getData)
  }

  useEffect(() => {
    recipeData()
  }, [])

  return (
    <Detail type={type} data={data} />
  )
}