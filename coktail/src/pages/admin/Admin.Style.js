import styled from 'styled-components'

//전체 컨테이너
export const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 90%;
  margin: auto;
  height: 100vh;

  //검색
  .searchContainer {
    display: flex;
    justify-content: center;
  }

  //등록 버튼
  .registerBtn {
    display: flex;
    justify-content: flex-end;
    margin-bottom: 1rem;
  }
`

//드롭다운 메뉴
export const StyledSelect = styled.select`
  border-radius: 0.5rem;
  padding: 0.7rem;
  margin: 0.6rem 0;
  width: 150px;
  background: #fff;
  cursor: pointer;
`
//상품등록, 수정 컨테이너
export const ProductContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  height: 100vh;

  //Base
  .ImageBaseContainer {
    height: 45vh;
    width: 400px;
  }

  .InputBaseContainer {
    margin-top: 10px;
    display: flex;
    justify-content: center;
  }

  input {
    border-radius: 5px;
    border: solid 1px black;
    width: 20rem;
    height: 3rem;
    padding: 1rem;
  }
`

//바등록, 상품등록에 버튼
export const ButtonGroup = styled.div`
  display: flex;
  padding-top: 2rem;
  gap: 10px;
  width: 55%;
  justify-content: center;
  .btn {
    border: none;
    border-radius: 10rem;
    cursor: pointer;
    width: 10rem;
    height: 2.5rem;
  }
  .cancelBtn {
    background-color: #d9d9d9;
  }
  .submitBtn {
    background-color: #ffc5c5;
  }
`
/* UserAdminPage.jsx */
export const ToggleTd = styled.td`
  display: flex;
  justify-content: center;
  padding: 0.5rem 0;
`

/* Bar */
export const ContentContainer = styled.div`
  display: flex;
  width: 100%;
  justify-content: center;

  .ImageContainer {
    display: flex;
    width: 25rem;
    height: 26rem;
  }

  .InputContainer {
    display: flex;
    flex-direction: column;
    justify-content: center;
    padding-left: 1rem;
    gap: 10px;
  }

  .coordinateBtn {
    background-color: #ffc5c5;
    border-radius: 5px;
    padding: 1rem;
  }
`

//admin 페이지
export const Content = styled.h1`
  font-size: 2rem;
  color: #545454;
  font-weight: bolder;
  line-height: 5rem;
`
export const Banner = styled.div`
  position: relative;
  width: 100%;
  background-color: #f8d2cd;

  img {
    width: 100%;
    position: absolute;
  }

  .mainBannerRight {
    animation: cheersRight 1s linear;
    @keyframes cheersRight {
      0% {
        opacity: 0;
        transform: translatex(40%);
      }
      50% {
        opacity: 1;
        transform: translatex(-3%);
      }
      100% {
        opacity: 1;
        transform: translatex(0%);
      }
    }
  }

  .mainBannerLeft {
    animation: cheersLeft 1s linear;
    @keyframes cheersLeft {
      0% {
        opacity: 0;
        transform: translatex(-40%);
      }
      50% {
        opacity: 1;
        transform: translatex(2%);
      }
      100% {
        opacity: 1;
        transform: translatex(0%);
      }
    }
  }
`

export const TypingContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  margin: auto;
`
