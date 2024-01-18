import styled from 'styled-components'

//index.jsx
export const MainContainer = styled.div`
  display: flex;
  flex-grow: 1;

  .main {
    width: 100%;
    height: 100vh;
  }
`

//Title.jsx
export const TitleStyled = styled.h1`
  font-size: 2rem;
  color: #545454;
  font-weight: bold;
  padding: 3rem 0 5rem 0;
`

/* Search.jsx */
export const SearchWrapper = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  width: 45%;
  padding-bottom: 4rem;

  .searchBox {
    width: 100%;
    height: 7vh;
    border: 3px solid #545454;
    border-radius: 0.8rem;
    display: flex;
    padding: 1rem;
  }

  .IconWrapper {
    position: absolute;
    right: 3%;
    cursor: pointer;
  }
`

//Button.jsx
export const ButtonStyled = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 10%;
  height: 45px;
  background-color: #ffc5c5;
  border-radius: 10px;
  font-weight: bold;
  cursor: pointer;
`

//Table.jsx
export const Table = styled.table`
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
`

export const Th = styled.th`
  padding: 15px;
  border-bottom: 2px solid #e1e1e1;
  font-weight: bold;
`

export const Tbody = styled.tbody`
  text-align: center;

  .tdToggle {
    display: flex;
    justify-content: center;
  }
`
/* DeleteBtn.jsx, EditBtn.jsx */
export const Btn = styled.button`
  padding: 5px;
  cursor: pointer;
`

/* ToggleButton.jsx */
export const ToggleContainer = styled.div`
  width: 5rem;
  height: 2rem;
  background-color: ${({ $isToggled }) => ($isToggled ? 'grey' : '#ffc5c5')};
  border-radius: 1rem;
  display: flex;
  padding: 0.25rem;
  justify-content: ${({ $isToggled }) =>
    $isToggled ? 'flex-end' : 'flex-start'};
  cursor: pointer;
  transition: background-color 0.1s;
  position: relative;

  .toggleCircle {
    width: 1.6rem;
    height: 1.5rem;
    background-color: #fff;
    border-radius: 50%;
    z-index: 1;
    transition: background-color 0.1s;
  }
`

export const ToggleLabel = styled.span`
  position: absolute;
  font-size: 0.75rem;
  top: 50%;
  transform: translateY(-50%);
`

export const OnLabel = styled(ToggleLabel)`
  left: 0.5rem;
  color: #ffffff;
`

export const OffLabel = styled(ToggleLabel)`
  right: 0.5rem;
  color: #ffffff;
`

//Pagination.jsx
export const PaginationContainer = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 1.5rem;
`
export const PaginationBtn = styled.button`
  margin: 0 1.5rem;
  padding: 5px 12px;
  background-color: ${({ $isActive }) =>
    $isActive ? '#545454' : 'transparent'};
  color: ${({ $isActive }) => ($isActive ? '#fff' : '#000')};
  border-radius: 50%;
  font-size: 1rem;

  &:hover {
    background-color: #545454;
    color: white;
    cursor: pointer;
  }

  &:disabled {
    opacity: 0.5;
    cursor: not-allowed;
  }
`
