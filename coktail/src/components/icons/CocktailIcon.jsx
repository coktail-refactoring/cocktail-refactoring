const CocktailIcon = ({
  width = '20',
  height = '20',
  fill = '#FFFFFF',
  viewBox = '0 0 22 22',
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
        d="M5.5 4.88889L3.05556 2.44444H18.9444L16.5 4.88889M9.77778 12.2222V19.5556H3.66667V22H18.3333V19.5556H12.2222V12.2222L22 2.44444V0H0V2.44444L9.77778 12.2222Z" 
        fill={fill}
      />
    </svg>
  )
}

export default CocktailIcon
