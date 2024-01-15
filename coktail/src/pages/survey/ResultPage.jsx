import { createSearchParams, useNavigate } from 'react-router-dom'
import { api } from '@/utils/api'

//styled component
import * as Styled from './Survey.style'

function TasteLevel(selectedTaste, targetTaste) {
  return selectedTaste === targetTaste ? 3 : null
}

function ResultPage({ selections = {} }) {
  const navigate = useNavigate()
  const { base, abv, taste } = selections

  const sweet = TasteLevel(taste, 'sweet')
  const sour = TasteLevel(taste, 'sour')
  const bitter = TasteLevel(taste, 'bitter')

  // 커스텀 put API 설정
  const putCustomCocktail = async () => {
    const data = {
      base: base,
      abv: abv,
      taste: taste,
      level: 3,
    }
    await api.put('/users/custom', data)
  }

  const handleRecommendation = () => {
    putCustomCocktail()
    const params = [
      ['base', base],
      ['abv', abv],
      ['sweet', sweet],
      ['sour', sour],
      ['bitter', bitter],
    ].filter((data) => data[1] !== null)
    navigate({
      pathname: '/cocktails',
      search: `?${createSearchParams(params)}`,
    })
  }

  return (
    <Styled.ContainerResult>
      <button className="btn" onClick={handleRecommendation}>
        칵테일 추천받으러 가기
      </button>
    </Styled.ContainerResult>
  )
}

export default ResultPage
