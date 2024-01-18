import styled from 'styled-components'

//사이드바 전체 컨테이너
export const SidebarContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: 23%;
  color: rgba(84, 84, 84, 1);
  background-color: #ffeded;
  height: 100vh;
  transition: transform 0.2s ease;

  //sidebar 로고컨테이너
  .logoBox {
    display: flex;
    justify-content: center;
    padding: 1.5rem;
    cursor: pointer;
    height: auto;
  }

  //sidebar 글씨
  .sideText {
    margin-left: 0.5rem;
    font-size: 19px;
  }

  //sidebar 로그아웃, 나가기 메뉴
  .bottomMenuItem {
    display: flex;
    justify-content: center;
  }
`
//메뉴 아이템
export const MenuItem = styled.div`
  display: flex;
  justify-content: center;
  padding: 1.2rem;
  cursor: pointer;

  background-color: ${(props) => (props.$isActive ? 'white' : 'transparent')};

  &:hover {
    background-color: white;
  }
`
