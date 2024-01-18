import * as Styled from '@/pages/recipes/recipeRegister.style'
import { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { api } from '@/utils/api'

/* Components */
import Title from '@/components/title'
import ImageUpload from '@/components/recipeUpload/ImageUpload'
import StarRating from '@/components/recipeUpload/StarRating'

/* Icons */
import AddBtnIcon from '@/components/icons/AddBtnIcon'
import CloseIcon from '@/components/icons/CloseIcon'

export default function ModifyRecipe() {
  const [baseData, setBaseData] = useState([])
  const [tag, setTag] = useState('')
  
  const [name, setName] = useState('')
  const [base, setBase] = useState('')
  const [tags, setTags] = useState([])
  const [images, setImages] = useState([])
  const [modifyImages, setModifyImages]=useState([]);
  const [abv, setAbv] = useState(0)
  const [sweet, setSweet] = useState(0)
  const [sour, setSour] = useState(0)
  const [bitter, setBitter] = useState(0)
  const [description, setDescription] = useState('')
  const [ingredient, setIngredient] = useState('')
  const [recipeArr, setRecipeArr] = useState([])
  // console.log(images)

  //디폴트값 담는곳
  const [defaultArr, setDefaultArr] = useState([])
  const [defaultRecipe, setDefaultRecipe] = useState([])

  const { id } = useParams()

  //저장된 값을 setter 에 저장
  const getUserRecipeData = async () => {
    const response = await api.get(`/diy-recipes/${id}`)
    const data = response.data
    //다른값으로 저장후 전달해야 무한렌더링 막음.
    setDefaultArr(data.tags)
    setDefaultRecipe(data.recipes)

    setName(data.name)
    setBase(data.base._id)
    setTags(data.tags)
    setImages(data.image)
    setAbv(data.abv)
    setSweet(data.sweet)
    setSour(data.sour)
    setBitter(data.bitter)
    setDescription(data.description)
    setIngredient(data.ingredient)
  }

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

  function removeStepHandler(e, index) {
    e.preventDefault()
    setRecipeArr((cur) => {
      const newStepArr = [...cur]
      newStepArr.splice(index, 1)
      return newStepArr
    })
  }

  const submitHandler = async (e) => {
    e.preventDefault()

    //image 변경이 없다면 그대로 이미지 이름으로 보내기

    const formData = new FormData()
    formData.append('name', name)
    formData.append('base', base)
    tags.forEach((item) => {
      formData.append('tags', item)
    })
    formData.append('images', modifyImages)
    formData.append('abv', abv)
    formData.append('sweet', sweet)
    formData.append('sour', sour)
    formData.append('bitter', bitter)
    formData.append('description', description)
    formData.append('ingredient', ingredient)
    let recipeImagesGroup = []
    recipeArr.forEach((item) => {
      console.log(item)
      formData.append('recipeImages', item.image)
      formData.append('content', item.content)
    })

    for (const [key, value] of formData) {
      console.log("이건 수정할떄 데이터" ,key, value)
    }

    if (!formData) {
      alert('빈 곳을 모두 채워주세요 :)')
    } else {
      await api.put(`/diy-recipes/${id}`, formData)
      navigate('/mypage/recipes')
    }
  }

  useEffect(() => {
    getUserRecipeData()
  }, [])

  // 취소시 이전페이지 이동
  const navigate = useNavigate()

  function cancelHandler(e) {
    e.preventDefault()
    navigate(-1)
  }

  // useEffect(()=>{
  //   console.log("recipeArr", recipeArr);
  // },[recipeArr])

  return (
    <>
    <Title>DIY레시피 수정</Title>
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
              <Styled.Step key={index + item}>
                <div className='txtBox'>
                  <Styled.Textarea
                    placeholder={`${index + 1}. 설명을 입력해 주세요`}
                  />
                  <Styled.RemoveRecipeBtn onClick={removeStepHandler}>
                    <CloseIcon width={17} fill={'#797979'} />
                  </Styled.RemoveRecipeBtn>
                </div>
                <div className="imgBox">``
                  <ImageUpload />
                </div>
              </Styled.Step>
            ))}
            <div className="btnBox">
              <Styled.AddRecipeBtn onClick={addStepHandler}>
                + 추가
              </Styled.AddRecipeBtn>
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
      {/* <Title>DIY레시피 수정</Title>
      <Container>
        <RecipeForm onSubmit={submitHandler}>
          <Naming
            setName={setName}
            setBase={setBase}
            setTagArr={setTags}
            defaultName={name}
            defaultBase={base}
            defaultTagArr={defaultArr}
          />
          <div className="imgFileWrap">
            {images.length > 0 && (
              <ImageUpload
                setImgs={setModifyImages}
                defaultValue={images}
              />
            )}
          </div>

          <RatingBox>
            <div className="ratingWrap">
              <div>도수</div>
              <StarRating setRating={(r) => setAbv(r)} defaultValue={abv} />
            </div>
            <div className="ratingWrap">
              <div>단맛</div>
              <StarRating setRating={(r) => setSweet(r)} defaultValue={sweet} />
            </div>
            <div className="ratingWrap">
              <div>신맛</div>
              <StarRating setRating={(r) => setSour(r)} defaultValue={sour} />
            </div>
            <div className="ratingWrap">
              <div>쓴맛</div>
              <StarRating
                setRating={(r) => setBitter(r)}
                defaultValue={bitter}
              />
            </div>
          </RatingBox>
          <TitleAndTextarea
            title="소개글"
            setContent={setDescription}
            defaultValue={description}
          />
          <TitleAndTextarea
            title="재료"
            setContent={setIngredient}
            defaultValue={ingredient}
          />
          {defaultRecipe.length && (
            <RecipeStep
              setRecipes={setRecipeArr}
              defaultRecipe={defaultRecipe}
            />
          )}

          <ButtonGroup>
            <button className="btn cancelBtn" onClick={cancelHandler}>
              취소
            </button>
            <button className="btn submitBtn" type="submit">
              수정하기
            </button>
          </ButtonGroup>
        </RecipeForm>
        <Spacing size={paddingBottom} />
      </Container> */}
    </>
  )
}

// const Container = styled.div`
//   padding: 0 2em;
// `

// const RecipeForm = styled.form`
//   display: flex;
//   flex-direction: column;
//   gap: 20px;
//   .imgFileWrap {
//     height: 248px;
//   }
// `
// const RatingBox = styled.div`
//   display: flex;
//   flex-wrap: wrap;
//   justify-content: space-evenly;
//   gap: 22px;
//   .ratingWrap {
//     display: flex;
//     align-items: center;
//     gap: 1rem;
//   }
// `

// const ButtonGroup = styled.div`
//   display: flex;
//   justify-content: flex-end;
//   gap: 10px;
//   .btn {
//     border: none;
//     box-shadow: none;
//     border-radius: 20rem;
//     padding: 0;
//     overflow: visible;
//     cursor: pointer;
//     width: 100px;
//     height: 36px;
//   }
//   .cancelBtn {
//     background-color: #d5d5d5;
//   }
//   .submitBtn {
//     background-color: #b0d96d;
//   }
// `
