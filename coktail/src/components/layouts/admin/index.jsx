import Sidebar from './Sidebar'
import { Outlet, useLocation } from 'react-router-dom'
import * as Styled from './Main.style'
import LoginCheck from '@/utils/LoginCheck'

export default function Layout() {
  const { pathname } = useLocation()
  LoginCheck(pathname)
  return (
    <Styled.MainContainer>
      <Sidebar />
      <div className="main">
        <Outlet />
      </div>
    </Styled.MainContainer>
  )
}
