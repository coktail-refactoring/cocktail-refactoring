const PencilIcon = ({
  width = '13',
  height = '13',
  fill = 'black',
  viewBox = '0 0 13 13',
}) => {
  return (
    <svg
      width={width}
      height={height}
      viewBox={viewBox}
      fill={fill}
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M9.75 0L8.125 1.625L11.375 4.875L13 3.25L9.75 0ZM6.5 3.25L0 9.75V13H3.25L9.75 6.5L6.5 3.25Z"
        fill={fill}
      />
    </svg>
  )
}

export default PencilIcon
