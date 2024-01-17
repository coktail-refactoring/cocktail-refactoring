import * as Styled from './Main.style'

//icon
import DeleteIcon from '@components/icons/DeleteIcon'

const DeleteBtn = ({ value, deleteHandler }) => {
  const OnDelete = () => {
    if (confirm('삭제하시겠습니까?')) {
      deleteHandler(value)
    }
  }

  return (
    <Styled.Btn onClick={OnDelete}>
      <DeleteIcon width={25} height={30} />
    </Styled.Btn>
  )
}

export default DeleteBtn
