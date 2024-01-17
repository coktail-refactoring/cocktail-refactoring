import * as Styled from './Main.style'
import styled from 'styled-components'
import NextArrowIcon from '@components/icons/NextArrowIcon'
import PreArrowIcon from '@components/icons/PreArrowIcon'

const Pagination = ({ page, setPage, totalPost, pageRange, btnRange }) => {
  const totalPage = Math.ceil(totalPost / pageRange)
  const currentSet = Math.ceil(page / btnRange)
  const startPage = (currentSet - 1) * btnRange + 1
  const endPage = Math.min(startPage + btnRange - 1, totalPage)

  const createPageButtons = () => {
    const buttons = []
    for (let i = startPage; i <= endPage; i++) {
      buttons.push(
        <Styled.PaginationBtn
          key={i}
          onClick={() => setPage(i)}
          $isActive={page === i}
        >
          {i}
        </Styled.PaginationBtn>,
      )
    }
    return buttons
  }

  const canGoBack = page > 1
  const canGoForward = page < totalPage

  return (
    <Styled.PaginationContainer>
      <Styled.PaginationBtn
        onClick={() => setPage(page - 1)}
        disabled={canGoBack ? '' : 'disabled'}
      >
        <PreArrowIcon />
      </Styled.PaginationBtn>
      {createPageButtons()}
      <Styled.PaginationBtn
        onClick={() => setPage(page + 1)}
        disabled={canGoForward ? '' : 'disabled'}
      >
        <NextArrowIcon />
      </Styled.PaginationBtn>
    </Styled.PaginationContainer>
  )
}

export default Pagination
