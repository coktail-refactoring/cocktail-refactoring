import * as Styled from './Main.style'

//icon
import EditIcon from '@components/icons/EditIcon'

const EditBtn = ({ value, editHandler }) => {
  const OnEdit = () => {
    editHandler(value)
  }

  return (
    <Styled.Btn onClick={OnEdit}>
      <EditIcon width={30} height={30} />
    </Styled.Btn>
  )
}

export default EditBtn
