import * as Styled from './style'
import { api } from '@/utils/api'
import { useEffect, useState, useCallback } from 'react'
import { useParams } from 'react-router-dom'
import { useDebounce } from '@/hooks/useDebounce'
import Slider from 'react-slick'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'

/* Icons */
import HeartIcon from '@/components/icons/HeartIcon'
import FullHeartIcon from '@/components/icons/FullHeartIcon'
import ShareIcon from '@/components/icons/ShareIcon'
import DoubleQuotes from '@/components/icons/DoubleQuotes'

/* Components */
import ImageAndCircle from '@/components/ImageAndCircle'
import ShowHashTag from '@/components/detailPage/ShowHashTag'
import StarsArray from '@/components/StarsArray'
import Review from '@/components/detailPage/Review'
import CreateReview from '@/components/detailPage/CreateReview'

/* Colors */
import { deepGreen, thirdPink } from '@/assets/styleVariables'

const rateTitle = ['도수', '단맛', '신맛', '쓴맛']
//slik-slider
const settings = {
  dots: true,
  infinite: false,
  speed: 500,
  slidesToShow: 1,
  slidesToScroll: 1,
}

export default function Detail({ data, type }) {
  const [isWished, setWished] = useState(data.isWished)
  const [rates, setRates] = useState(0)

  const { abv, sweet, sour, bitter } = data
  const rateArr = [abv, sweet, sour, bitter]
  const recipeArr = data.recipes

  const { id } = useParams()

  console.log(data)
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

  //카카오톡 공유하기
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

  const renderFromType = useCallback(() => {
    return (
      <Styled.CommentBox fill={type === 'cocktail' ? thirdPink : deepGreen}>
        <DoubleQuotes width={25} />
        <Styled.Text>{data.description}</Styled.Text>
        <DoubleQuotes width={25} />
      </Styled.CommentBox>
    )
  })

  //평점
  function avrRate() {
    if (!data.reviews) return
    const ratesArr = data.reviews.map((i) => i.rating)
    const sum = ratesArr.reduce((acc, value) => acc + value, 0)
    const avr = sum / ratesArr.length
    setRates(avr)
  }

  useEffect(() => {
    avrRate()
  }, [data.reviews])

  console.log(data.reviews)

  return (
    <Styled.Container>
      {data.base && (
        <Styled.BaseAndBtns>
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
        </Styled.BaseAndBtns>
      )}

      <Styled.BorderBox>
        <div>
          <Styled.Title>{data.name}</Styled.Title>
          <ShowHashTag data={data.tags} type={type} tagColor={0} ftColor={0} />
        </div>
        {type === 'cocktail' ? (
          <ImageAndCircle imgUrl={data.image} circleColor={0} />
        ) : (
          <div className="imgWrap">
            <img src={data.image} alt={data.name} />
          </div>
        )}

        <Styled.RatingBox>
          {rateArr[0] &&
            rateArr.map((i, index) => (
              <Styled.Rating key={index + 'rate'}>
                <div className="rateTitle">{rateTitle[index]}</div>
                <StarsArray key={index} starCount={i} />
              </Styled.Rating>
            ))}
        </Styled.RatingBox>
      </Styled.BorderBox>

      <Styled.Comment type={type}>{renderFromType()}</Styled.Comment>

      <Styled.BorderBox>
        <Styled.TitleBadge type={type}>재료</Styled.TitleBadge>
        <Styled.TextBox>{data.ingredient}</Styled.TextBox>
      </Styled.BorderBox>

      <Styled.BorderBox>
        <Styled.TitleBadge type={type}>레시피</Styled.TitleBadge>
        <div className="slideContainer">
          <Slider {...settings}>
            {recipeArr &&
              recipeArr.map((i, index) => (
                <Styled.SlideBox key={'recipe' + index}>
                  <div className="singleSlide">
                    <div>
                      <img src={i.image} alt="레시피사진" />
                    </div>
                    <pre>{i.content}</pre>
                  </div>
                </Styled.SlideBox>
              ))}
          </Slider>
        </div>
      </Styled.BorderBox>

      <Styled.AverageRate>
        <p>평점</p>
        <Styled.StarArrWrap>
          <StarsArray starCount={parseInt(rates)} />
        </Styled.StarArrWrap>
        {!rates ? (
          <p className="nonAveRate">
            아직 별점이 없어요
            <br />
            리뷰와 함께 남겨주세요 ~!
          </p>
        ) : (
          <p className="averageRate">{rates}</p>
        )}
      </Styled.AverageRate>

      {data.reviews && <Review type={type} data={data} id={id} />}

      <CreateReview type={type} />
    </Styled.Container>
  )
}
