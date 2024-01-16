import { api } from '@/utils/api'
import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

import Detail from '@/components/detailPage'

const type = 'cocktail'

export default function CocktailDetailPage() {
  const [data, setData] = useState({})
  const { id } = useParams()

  const cocktailData = async () => {
    const response = await api.get(`/cocktails/${id}`)
    const getData = response.data
    setData(getData)
  }

  useEffect(() => {
    cocktailData()
  }, [])

  return (
    <Detail data={data} type={type} />
  )
}