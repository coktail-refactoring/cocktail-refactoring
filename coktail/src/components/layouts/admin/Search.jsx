import * as Styled from './Main.style'
import AdminSearchIcon from '@components/icons/AdminSearchIcon'

const Search = ({ value, onChange, onSearchClickHandler }) => (
  <Styled.SearchWrapper>
    <input
      className="searchBox"
      type="text"
      value={value}
      onChange={onChange}
      onKeyDown={(e) => {
        if (e.key === 'Enter') {
          onSearchClickHandler()
        }
      }}
    ></input>
    <div className="IconWrapper">
      <AdminSearchIcon onClick={onSearchClickHandler} />
    </div>
  </Styled.SearchWrapper>
)

export default Search
