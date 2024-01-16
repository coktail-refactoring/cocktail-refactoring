import { api } from '@/utils/api'
import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import styled from 'styled-components'
import Spacing from '@/utils/Spacing'
import { paddingBottom } from '@/assets/styleVariables'
import { thirdGray } from '@/assets/styleVariables'
import { useDebounce } from '@/hooks/useDebounce'
import HeartIcon from '@/components/icons/HeartIcon'
import FullHeartIcon from '@/components/icons/FullHeartIcon'
import ShareIcon from '@/components/icons/ShareIcon'

/* component */
import CocktailHeader from '@/components/detailPage/CocktailHeader'
import Information from '@/components/detailPage/Information'
import Comment from '@/components/detailPage/Comment'
import Ingredients from '@/components/detailPage/Ingredients'
import Recipe from '@/components/detailPage/Recipe'
import AverageRate from '@/components/detailPage/AverageRate'
import Review from '@/components/detailPage/Review'

const type = 'cocktail'

export default function CocktailDetailPage() {
  const [data, setData] = useState({})
  const [isWished, setWished] = useState(data.isWished)

  const { id } = useParams()

  const cocktailData = async () => {
    const response = await api.get(`/cocktails/${id}`)
    const getData = response.data
    setData(getData)
  }

  useEffect(() => {
    cocktailData()
  }, [])

  //optimistic Ui and Debounce
  const onWishlistClickHandler = async () => {
    setWished((cur) => !cur)
    setWishDebounce(!isWished)
  }

  const wishApi = async (isWishedCheck) => {
    if (isWishedCheck) {
      const response = await api.post(`/users/wishlist/${data._id}`)
    } else {
      const response = await api.delete(`/users/wishlist/${data._id}`)
    }
  }
  const setWishDebounce = useDebounce(wishApi, 500)

  //공유하기
  useEffect(() => {
    // Kakao SDK 로드
    const script = document.createElement('script')
    script.src = 'https://developers.kakao.com/sdk/js/kakao.js'
    script.async = true
    document.head.appendChild(script)

    script.onload = () => {
      // Kakao SDK 초기화
      Kakao.init('1d894b6db0ee7cd26558b7a0056bc7f3')
    }
  }, [])
  // 카카오 링크 전송 함수
  const sendKakaoLink = () => {
    Kakao.Link.sendDefault({
      objectType: 'feed',
      content: {
        title: data.name,
        description: data.description,
        // 이미지 전달 어떤식으로 해야할지..?
        imageUrl: data.image,
        link: {
          mobileWebUrl: 'http://kdt-sw-7-team07.elicecoding.com/',
          webUrl: 'http://kdt-sw-7-team07.elicecoding.com/',
        },
      },
      buttons: [
        {
          title: '자세히 보기',
          link: {
            mobileWebUrl: 'http://kdt-sw-7-team07.elicecoding.com/',
            webUrl: 'http://kdt-sw-7-team07.elicecoding.com/',
          },
        },
      ],
    })
  }

  return (
    <Container>
      {data && (
        <BaseAndBtns>
          <div className="base">
            <span>{data.base.name}</span>
          </div>
          <div className="btnGroup">
            <button onClick={onWishlistClickHandler}>
              {isWished ? <FullHeartIcon /> : <HeartIcon />}
            </button>
            <button onClick={sendKakaoLink}>
              <ShareIcon />
            </button>
          </div>
        </BaseAndBtns>
      )}

      {/* {data.reviews && (
        <>
          <CocktailHeader type={type} data={data} />
          <Information type={type} data={data} />
          <Comment type={type} data={data} />
          <Ingredients type={type} data={data} />
          <Recipe type={type} data={data} />
          <AverageRate type={type} data={data} />
          <Review type={type} data={data} id={id} />
          <Spacing size={paddingBottom} />
        </>
      )} */}
    </Container>
  )
}

const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 28px;
  padding: 0 2em;
`

const BaseAndBtns = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  .base {
    font-size: 20px;
    font-weight: bold;
    color: ${thirdGray};
  }

  .btnGroup {
    display: flex;
    align-items: center;
  }
`
