import { useState, useEffect } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { isUserStore } from '@/store/isTokenStore'
import { api } from '@/utils/api'

//styled component
import * as Styled from './Sidebar.style'

//icons
import PersonIcon from '@components/icons/PersonIcon'
import CocktailIcon from '@components/icons/CocktailIcon'
import ReviewIcon from '@components/icons/ReviewIcon'
import RecipeIcon from '@components/icons/RecipeIcon'
import BarIcon from '@components/icons/BarIcon'
import LogoutIcon from '@components/icons/LogoutIcon'
import AdminIcon from '@components/icons/AdminIcon'
import BaseIcon from '@components/icons/BaseIcon'

const menuItems = [
  {
    icon: <PersonIcon width={25} height={25} fill={'#545454'} />,
    text: '유저 관리',
    link: '/admin/users',
  },
  {
    icon: <ReviewIcon width={25} height={25} fill={'#545454'} />,
    text: '리뷰 관리',
    link: '/admin/reviews',
  },
  {
    icon: <BaseIcon />,
    text: 'Base 관리',
    link: '/admin/bases',
  },
  {
    icon: <CocktailIcon width={25} height={25} fill={'#545454'} />,
    text: '칵테일 관리',
    link: '/admin/cocktails',
  },
  {
    icon: <RecipeIcon width={29} height={29} fill={'#545454'} />,
    text: 'DIY 레시피 관리',
    link: '/admin/recipes',
  },
  {
    icon: <BarIcon width={25} height={25} fill={'#545454'} />,
    text: 'Bar 관리',
    link: '/admin/bars',
  },
]

export default function Sidebar() {
  const navigate = useNavigate()
  const [activeItem, setActiveItem] = useState(null)
  const { setUser, setIsLogin } = isUserStore((state) => state)
  const [scrollY, setScrollY] = useState(0)

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY)
    }

    window.addEventListener('scroll', handleScroll)

    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [])

  const sidebarTransform = `translateY(${scrollY}px)`

  const handleItemClick = (index) => {
    setActiveItem(index)
  }

  //어드민 메인페이지 이동
  function GotoAdminMainPage() {
    navigate('/admin')
  }

  //로그아웃 -> 메인 페이지 이동
  const kakaoLogout = async () => {
    try {
      const logout = await api.delete('/users/logout')

      if (logout.status === 204) {
        setUser({})
        setIsLogin(false)
        navigate('/')
      }
    } catch (error) {
      console.error(error)
    }
  }

  //메인페이지로 이동
  function GotoHome() {
    navigate('/')
  }

  return (
    <Styled.SidebarContainer style={{ transform: sidebarTransform }}>
      <div>
        <div onClick={GotoAdminMainPage} className="logoBox">
          <AdminIcon className="logo" />
        </div>
        {menuItems.map((item, index) => (
          <Link to={item.link} key={index}>
            <Styled.MenuItem
              $isActive={index === activeItem}
              onClick={() => handleItemClick(index)}
            >
              <span>{item.icon}</span>
              <span className="sideText">{item.text}</span>
            </Styled.MenuItem>
          </Link>
        ))}
      </div>
      <div className="bottomMenuItem">
        <Styled.MenuItem onClick={GotoHome}>
          <LogoutIcon />
          <span className="sideText">나가기</span>
        </Styled.MenuItem>
        <Styled.MenuItem onClick={() => kakaoLogout()}>
          <LogoutIcon />
          <span className="sideText">로그아웃</span>
        </Styled.MenuItem>
      </div>
    </Styled.SidebarContainer>
  )
}
