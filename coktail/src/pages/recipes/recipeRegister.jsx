import * as Styled from './recipeRegister.style'
import { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { api } from '@/utils/api'

/* Components */
import Title from '@/components/title'
import ImageUpload from '@/components/recipeUpload/ImageUpload'
import StarRating from '@/components/recipeUpload/StarRating'

/* Icons */
import AddBtnIcon from '@/components/icons/AddBtnIcon'
import CloseIcon from '@/components/icons/CloseIcon'


export default function RecipeRegister() {
  const [baseData, setBaseData] = useState([])
  const [tag, setTag] = useState('')

  const [name, setName] = useState('')
  const [base, setBase] = useState('657c3fdc3d11af1efa276d9f')
  const [tags, setTags] = useState([])
  const [images, setImages] = useState([])
  const [abv, setAbv] = useState(0)
  const [sweet, setSweet] = useState(0)
  const [sour, setSour] = useState(0)
  const [bitter, setBitter] = useState(0)
  const [description, setDescription] = useState('')
  const [ingredient, setIngredient] = useState('')
  const [recipeArr, setRecipeArr] = useState([
    {
      image: '',
      content: '',
    },
  ])

  
  //baseApi
  const getBaseData = async () => {
    const response = await api.get('/bases')
    const data = response.data.bases
    setBaseData(data)
  }

  useEffect(() => {
    getBaseData()
  }, [])

  //tagHandler
  function submitTagHandler(e) {
    e.preventDefault()
    const cleanedTag = tag.replace(/[^a-zA-Z가-힣]/g, '')
    if (cleanedTag.trim() !== '') {
      setTags([...tags, cleanedTag])
      setTag('')
    }
  }

  function deleteHandler(index) {
    const newArr = [...tags]
    newArr.splice(index, 1)
    setTags(newArr)
  }

  //recipe Step
  function addStepHandler(e) {
    e.preventDefault()
    const newStepArr = { image: '', content: '' }
    setRecipeArr([...recipeArr, newStepArr])
  }

  //form Data
  const submitHandler = async (e, index) => {
    e.preventDefault()
    const formData = new FormData()
    formData.append('name', name)
    formData.append('base', base)
    tags.forEach((item) => {
      formData.append('tags', item)
    })
    formData.append('images', images)
    formData.append('abv', abv)
    formData.append('sweet', sweet)
    formData.append('sour', sour)
    formData.append('bitter', bitter)
    formData.append('description', description)
    formData.append('ingredient', ingredient)
    recipeArr.forEach((item) => {
      formData.append('recipeImages', item.image)
      formData.append('content', item.content)
    })

    for (let value of formData.values()) {
      console.log('이건 등록할떄 데이터 ', value)
    }

    if (!formData) {
      alert('값을 빼먹지말고 입력하라우')
    } else {
      await api.post('/diy-recipes', formData)
      navigate('/recipes')
    }
  }

  // 취소시 이전페이지 이동
  const navigate = useNavigate()

  function cancelHandler(e) {
    e.preventDefault()
    navigate(-1)
  }

  return (
    <>
      <Title>DIY레시피 등록</Title>
      <Styled.Container>
        <Styled.RecipeForm onSubmit={submitHandler}>
          <div className="gap10">
            <Styled.InputBox>
              <Styled.Input
                type="text"
                placeholder="칵테일 이름"
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
            </Styled.InputBox>

            <Styled.Select
              value={base}
              onChange={(e) => setBase(e.target.value)}
            >
              {baseData.map((i, index) => (
                <option key={index + i} value={i._id}>
                  {i.name}
                </option>
              ))}
            </Styled.Select>

            <Styled.InputBox>
              <Styled.Input
                type="text"
                value={tag}
                onChange={(e) => setTag(e.target.value)}
                placeholder="해시태그를 입력해주세요"
              />
              <Styled.AddTagBtn onClick={submitTagHandler}>
                <AddBtnIcon width={15} />
              </Styled.AddTagBtn>
            </Styled.InputBox>
            <Styled.TagsList>
              {tags.map((item, index) => (
                <li key={item + index} className="tagItem">
                  <div>
                    {'#' + item}
                    <button className="closeBtn" onClick={deleteHandler}>
                      <CloseIcon width={10} height={10} fill={'#000000'} />
                    </button>
                  </div>
                </li>
              ))}
            </Styled.TagsList>
          </div>

          <div className="imgFileWrap">
            <ImageUpload setImgs={setImages} />
          </div>

          <Styled.RatingBox>
            <div className="ratingWrap">
              <div>도수</div>
              <StarRating setRating={(r) => setAbv(r)} />
            </div>
            <div className="ratingWrap">
              <div>단맛</div>
              <StarRating setRating={(r) => setSweet(r)} />
            </div>
            <div className="ratingWrap">
              <div>신맛</div>
              <StarRating setRating={(r) => setSour(r)} />
            </div>
            <div className="ratingWrap">
              <div>쓴맛</div>
              <StarRating setRating={(r) => setBitter(r)} />
            </div>
          </Styled.RatingBox>

          <Styled.TitleAndTextArea>
            <Styled.TitleBadge>소개글</Styled.TitleBadge>
            <Styled.Textarea
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              placeholder="내용을 입력해주세요 :)"
              required
            ></Styled.Textarea>
          </Styled.TitleAndTextArea>
          
          <Styled.TitleAndTextArea>
            <Styled.TitleBadge>재료</Styled.TitleBadge>
            <Styled.Textarea
              value={ingredient}
              onChange={(e) => setIngredient(e.target.value)}
              placeholder="재료를 입력해주세요 :)"
              required
            ></Styled.Textarea>
          </Styled.TitleAndTextArea>

          <Styled.Recipe>
            <Styled.TitleBadge>레시피</Styled.TitleBadge>
            {recipeArr.map((item, index) => (
              <Styled.Step key={index+item}>
                <Styled.Textarea placeholder={`${index + 1}. 설명을 입력해 주세요`} />
                <div className="imgBox">
                  <ImageUpload />
                </div>
              </Styled.Step>
            ))}
            <div className="btnBox">
              <Styled.AddRecipeBtn onClick={addStepHandler}>+ 추가</Styled.AddRecipeBtn>
            </div>
          </Styled.Recipe>

          <Styled.ButtonGroup>
            <button className="btn cancelBtn" onClick={cancelHandler}>
              취소
            </button>
            <button className="btn submitBtn" type="submit">
              등록하기
            </button>
          </Styled.ButtonGroup>
        </Styled.RecipeForm>
      </Styled.Container>
    </>
  )
}
