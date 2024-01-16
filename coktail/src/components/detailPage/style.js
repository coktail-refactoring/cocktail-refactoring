import styled from 'styled-components'
import {
    deepGreen,
    primaryPink,
    thirdPink,
    primaryGreen,
    thirdGray,
  } from '@/assets/styleVariables'

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 14px;
  padding: 0 24px 80px 24px;
`

export const BaseAndBtns = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  .base {
    font-size: 1rem;
    font-weight: bold;
    color: ${thirdGray};
  }

  .btnGroup {
    display: flex;
    align-items: center;
  }
`
export const BorderBox = styled.div`
  border-radius: 0.7rem;
  box-shadow: 0px 0px 4px 0px rgba(0, 0, 0, 0.25);
  padding: 24px;
  box-sizing: border-box;
`
export const Title = styled.h2`
  font-size: 1.2rem;
  font-weight: bold;
  line-height: 1.4rem;
  margin-bottom: 12px;
`
export const RatingBox = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 20px 20px;
  padding: 5px 25px;
  justify-content: space-between;
  margin-top: 12px;
`
export const Rating = styled.div`
  display: flex;
  max-width: 124px;
  justify-content: space-between;

  .rateTitle {
    width: 60px;
  }
`

export const Comment = styled.div`
  position: relative;
  width: 100%;
  min-height: 100px;
  background-color: ${({ type }) =>
    type === 'cocktail' ? primaryPink : primaryGreen};
  border-radius: 0.7rem;
  text-align: center;
`
export const Text = styled.pre`
  padding: 60px;
  font-size: 1rem;
  line-height: 1.4rem;
  white-space: pre-wrap;
`

export const CommentBox = styled.div`
  svg:first-child {
    position: absolute;
    top: 25px;
    left: 25px;
  }
  svg:last-child {
    position: absolute;
    bottom: 25px;
    right: 25px;
    transform: rotate(180deg);
  }

  path {
    fill: ${(props) => props.fill || primaryPink};
  }
`

export const TitleBadge = styled.span`
  background-color: ${({ type }) =>
    type === 'cocktail' ? thirdPink : deepGreen};
  padding: 5px 15px;
  border-radius: 2rem;
  color: #ffffff;
`

export const TextBox = styled.pre`
  padding-top: 26px;
  line-height: 1.4rem;
  white-space: pre-wrap;
`

export const SlideBox = styled.div`
  display: flex;
  justify-content: center;
  .singleSlide {
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;

    div {
      margin-top: 18px;
      display: flex;
      justify-content: center;
      align-items: center;
      width: 100%;
      height: 200px;
      overflow: hidden;

      img {
        width: 100%;
        height: 100%;
        object-fit: contain;
      }
    }
    p {
      padding: 22px;
      line-height: 1.4rem;
      text-align: center;
      width: 100%;
    }
  }
`

export const AverageRate = styled.div`
  padding: 30px;
  margin: 30px 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  p {
    font-size: 2em;
    font-weight: bold;
  }
  .averageRate {
    background-color: #fee995;
    border-radius: 3rem;
    font-size: 3rem;
    font-weight: bold;
    margin-top: 30px;
    padding: 20px 56px;
  }
  .nonAveRate {
    font-size: 1rem;
    background-color: #fee995;
    border-radius: 3rem;
    text-align: center;
    padding: 20px 50px;
    margin-top: 30px;
    line-height: 1.2rem;
  }
`
export const StarArrWrap = styled.div`
  padding-top: 30px;
  svg {
    width: 38px;
    height: 38px;
  }
`
