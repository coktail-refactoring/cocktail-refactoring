import styled from 'styled-components'
import { primaryGray, secondGray, deepGreen } from '@/assets/styleVariables'


export const Container = styled.div`
  padding: 0 24px 80px 24px;
`

export const RecipeForm = styled.form`
  display: flex;
  flex-direction: column;
  gap: 28px;
  .gap10 {
    display: flex;
    flex-direction: column;
    gap: 10px;
  }
  .imgFileWrap {
    height: 204px;
  }
`
export const InputBox = styled.div`
  position: relative;
`
export const Input = styled.input`
  width: 100%;
  min-height: 38px;
  border: 2px solid #d5d5d5;
  border-radius: .6rem;
  padding: 0 8px;
  &:focus {
    border: 2px solid #797979;
    outline: none;
  }
`

export const Select = styled.select`
  width: 100%;
  min-height: 38px;
  border: 2px solid #d5d5d5;
  border-radius: .6rem;
`

export const AddTagBtn = styled.button`
  position: absolute;
  right: 8px;
  height: 100%;
  display: flex;
  align-items: center;
  top: 0;
`

export const TagsList = styled.ul`
  display: flex;
  margin-top: -8px;
  flex-wrap: wrap;
  gap: 5px;
  .tagItem {
    div {
      border-radius: 2rem;
      background-color: ${deepGreen};
      padding: 3px 12px;
      color: #000;
      display: flex;
      align-items: center;
      gap: 4px;
    }
    .closeBtn {
      background: none;
      border: none;
      box-shadow: none;
      border-radius: 0;
      padding: 0;
      overflow: visible;
      cursor: pointer;
    }
  }
`
export const RatingBox = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-evenly;
  gap: 22px;
  .ratingWrap {
    display: flex;
    align-items: center;
    gap: 10px;
  }
`
export const TitleAndTextArea = styled.div`
  position: relative;
`

export const TitleBadge = styled.div`
  display: inline-block;
  border-radius: 2rem;
  background-color: #b0d96d;
  padding: 6px 15px;
`

export const Textarea = styled.textarea`
  width: 100%;
  height: 80px;
  resize: none;
  border: 2px solid #d5d5d5;
  border-radius: .6rem;
  padding: 0 8px;
  margin-top: 8px;
  white-space: pre-wrap;
  word-break: break-all;
  &:focus {
    border-color: #797979;
    outline: none;
  }
`

export const Recipe = styled.div`
  .btnBox {
    display: flex;
    justify-content: center;
  }
`
export const Step = styled.div`
  .txtBox {
    display: flex;
    gap: 10px;
  }

  .imgBox {
    margin-top: 8px;
    height: 204px;
  }

  + div {
    margin-top: 20px;
  }
`
export const RemoveRecipeBtn = styled.button`
  background-color: ${primaryGray};
  margin-top: 8px;
  border-radius: 1rem;
`

export const AddRecipeBtn = styled.button`
  margin-top: 8px;
  font-size: 1rem;
  padding: 6px 15px;
  background-color: ${primaryGray};
  border-radius: 2rem;
`

export const ButtonGroup = styled.div`
  display: flex;
  justify-content: flex-end;
  gap: 10px;
  .btn {
    border: none;
    box-shadow: none;
    border-radius: 2rem;
    padding: 0;
    overflow: visible;
    cursor: pointer;
    width: 100px;
    height: 36px;
  }
  .cancelBtn {
    background-color: ${secondGray};
  }
  .submitBtn {
    background-color: ${deepGreen};
  }
`
