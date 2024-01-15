const ThumbsUpIcon = ({
  width = '19',
  height = '20',
  fill = '#FFE1E1',
  stroke = '#FFA1A1',
  viewBox = '0 0 19 20',
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
        fillRule="evenodd" 
        clipRule="evenodd" 
        d="M7.5 0C8.856 0 9.794 0.852 10.395 2.053C10.917 3.098 10.966 4.353 10.992 5.5H15.826C16.2411 5.49994 16.6516 5.58601 17.0317 5.75278C17.4118 5.91954 17.7532 6.16336 18.0342 6.46883C18.3153 6.7743 18.5298 7.13475 18.6644 7.52741C18.799 7.92006 18.8506 8.33637 18.816 8.75L18.455 13.081C18.3093 14.8309 17.5112 16.4621 16.219 17.6511C14.9268 18.8401 13.235 19.5 11.479 19.5H9.967C8.2556 19.5037 6.60289 18.8764 5.325 17.738C5.18891 17.6175 5.028 17.5283 4.85364 17.4768C4.67929 17.4253 4.49574 17.4127 4.316 17.44C4.04587 17.4803 3.77311 17.5003 3.5 17.5C2.392 17.5 1.472 16.88 0.876 15.892C0.296 14.932 0 13.607 0 12C0 10.394 0.297 9.069 0.876 8.109C1.472 7.12 2.392 6.5 3.5 6.5C3.781 6.5 4.079 6.55 4.377 6.634C4.835 5.434 5.161 4.197 5.007 2.899C4.835 1.454 6.016 0 7.5 0Z" 
        fill={fill}
      />
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d="M6.993 2.663C7.162 4.086 6.931 5.57 6.417 6.902C5.848 8.376 5.092 9.972 4.998 11.559C4.919 12.896 5.222 14.478 6.03 15.561C6.915 16.747 8.368 17.5 9.967 17.5H11.479C12.7333 17.5001 13.9418 17.0287 14.8648 16.1794C15.7878 15.3301 16.3579 14.165 16.462 12.915L16.823 8.583C16.8345 8.44512 16.8172 8.30636 16.7723 8.17549C16.7274 8.04463 16.6559 7.9245 16.5622 7.82271C16.4685 7.72092 16.3546 7.63968 16.2279 7.58413C16.1012 7.52859 15.9644 7.49994 15.826 7.5H10.5C10.1036 7.49948 9.7235 7.34241 9.44238 7.06297C9.16126 6.78354 9.0019 6.40437 8.999 6.008C8.991 5.038 9.052 3.841 8.606 2.948C8.206 2.148 7.832 2 7.5 2C7.2 2 6.96 2.393 6.993 2.663ZM7.5 0C8.856 0 9.794 0.852 10.395 2.053C10.917 3.098 10.966 4.353 10.992 5.5H15.826C16.2411 5.49994 16.6516 5.58601 17.0317 5.75278C17.4118 5.91954 17.7532 6.16336 18.0342 6.46883C18.3153 6.7743 18.5298 7.13475 18.6644 7.52741C18.799 7.92006 18.8506 8.33637 18.816 8.75L18.455 13.081C18.3093 14.8309 17.5112 16.4621 16.219 17.6511C14.9268 18.8401 13.235 19.5 11.479 19.5H9.967C9.01837 19.5027 8.07927 19.3108 7.20775 18.9362C6.33622 18.5616 5.55079 18.0122 4.9 17.322C4.44283 17.4408 3.97235 17.5006 3.5 17.5C2.392 17.5 1.472 16.88 0.876 15.892C0.296 14.932 0 13.607 0 12C0 10.394 0.297 9.069 0.876 8.109C1.472 7.12 2.392 6.5 3.5 6.5C3.781 6.5 4.079 6.55 4.377 6.634C4.835 5.434 5.161 4.197 5.007 2.899C4.835 1.454 6.016 0 7.5 0ZM3.696 8.524C3.211 8.424 2.831 8.74 2.589 9.142C2.263 9.682 2 10.606 2 12C2 13.394 2.263 14.319 2.588 14.859C2.898 15.371 3.228 15.5 3.5 15.5C3.564 15.5 3.627 15.498 3.69 15.495C3.154 14.287 2.924 12.755 3.002 11.441C3.049 10.636 3.363 9.523 3.696 8.524Z" 
        fill={stroke}
      />
    </svg>
  )
}

export default ThumbsUpIcon