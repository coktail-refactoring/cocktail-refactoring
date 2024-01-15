const AlcoholIcon = ({
  width = '11',
  height = '11',
  fill = 'black',
  viewBox = '0 0 11 11',
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
        d="M3.4375 3.20833L2.52083 2.29167H8.47917L7.5625 3.20833M5.04167 5.95833V8.70833H2.75V9.625H8.25V8.70833H5.95833V5.95833L9.625 2.29167V1.375H1.375V2.29167L5.04167 5.95833Z"
        fill={fill}
      />
    </svg>
  )
}

export default AlcoholIcon
