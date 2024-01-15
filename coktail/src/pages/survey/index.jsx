import { useState } from 'react'
import { useNavigate } from 'react-router-dom'

//styled component
import * as Styled from './Survey.style'

//components
import StartPage from './StartPage'
import QuestionPage from './QuestionPage'
import ResultPage from './ResultPage'

//dummyData
import questions from './surveyData'

//Icon
import LogoIcon from '@components/icons/LogoIcon'
import CloseIcon from '@components/icons/CloseIcon'

export default function SurveyPage() {
  const navigate = useNavigate()
  const [currentPage, setCurrentPage] = useState(0)
  const [userSelections, setUserSelections] = useState({
    base: '',
    abv: 0,
    taste: '',
  })

  const handleStart = () => {
    setCurrentPage(1)
  }

  const handleAnswerSelected = (answer) => {
    const mappingPage = {
      1: { base: answer },
      2: { abv: { '낮은 도수': 1, '중간 도수': 2, '높은 도수': 3 }[answer] },
      3: {
        taste: { 달달하게: 'sweet', 새콤하게: 'sour', 씁슬하게: 'bitter' }[
          answer
        ],
      },
    }

    setUserSelections({ ...userSelections, ...mappingPage[currentPage] })
    setCurrentPage(currentPage + 1)
  }

  const handleRestart = () => {
    setCurrentPage(0)
    setUserSelections({
      base: '',
      abv: 0,
      taste: '',
    })
  }

  let backgroundImage =
    currentPage === 0
      ? questions[0]?.backgroundImage
      : currentPage >= 1 && currentPage <= questions.length
        ? questions[currentPage].backgroundImage
        : questions[questions.length]?.backgroundImage

  const containerStyle = {
    backgroundImage: backgroundImage ? `url(${backgroundImage})` : '',
    backgroundSize: 'cover',
  }

  function GoToHome() {
    navigate('/')
  }

  function BackToPage() {
    navigate(-1)
  }

  return (
    <Styled.ContainerSurvey style={containerStyle}>
      <Styled.ContainerHeader>
        <div onClick={GoToHome}>
          <LogoIcon width={100} height={80} fill={'#545454'} />
        </div>
        <div onClick={BackToPage}>
          <CloseIcon width={20} height={70} fill={'#545454'} />
        </div>
      </Styled.ContainerHeader>

      <Styled.ContentDiv>
        {currentPage === 0 && <StartPage onStart={handleStart} />}
        {currentPage >= 1 && currentPage <= 3 && (
          <QuestionPage
            question={questions[currentPage]}
            answers={questions[currentPage].answers}
            onAnswerSelected={handleAnswerSelected}
          />
        )}
        {currentPage === 4 && (
          <ResultPage selections={userSelections} onRestart={handleRestart} />
        )}
      </Styled.ContentDiv>
    </Styled.ContainerSurvey>
  )
}
