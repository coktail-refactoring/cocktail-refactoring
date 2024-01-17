const DeleteIcon = ({
  width = '35',
  height = '35',
  fill = '#545454',
  viewBox = '0 0 35 35',
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
        d="M32.9 6.36364H26.6V4.45455C26.6 3.27313 26.0838 2.1401 25.1648 1.30471C24.2459 0.469317 22.9996 0 21.7 0H13.3C12.0004 0 10.7541 0.469317 9.83518 1.30471C8.91625 2.1401 8.4 3.27313 8.4 4.45455V6.36364H2.1C1.54305 6.36364 1.0089 6.56477 0.615076 6.9228C0.221249 7.28082 0 7.7664 0 8.27273C0 8.77905 0.221249 9.26463 0.615076 9.62266C1.0089 9.98068 1.54305 10.1818 2.1 10.1818H2.8V31.8182C2.8 32.6621 3.16875 33.4714 3.82513 34.0681C4.4815 34.6648 5.37174 35 6.3 35H28.7C29.6283 35 30.5185 34.6648 31.1749 34.0681C31.8313 33.4714 32.2 32.6621 32.2 31.8182V10.1818H32.9C33.457 10.1818 33.9911 9.98068 34.3849 9.62266C34.7787 9.26463 35 8.77905 35 8.27273C35 7.7664 34.7787 7.28082 34.3849 6.9228C33.9911 6.56477 33.457 6.36364 32.9 6.36364ZM12.6 4.45455C12.6 4.28577 12.6737 4.12391 12.805 4.00457C12.9363 3.88523 13.1143 3.81818 13.3 3.81818H21.7C21.8857 3.81818 22.0637 3.88523 22.195 4.00457C22.3263 4.12391 22.4 4.28577 22.4 4.45455V6.36364H12.6V4.45455ZM28 31.1818H7V10.1818H28V31.1818ZM15.4 15.2727V25.4545C15.4 25.9609 15.1788 26.4465 14.7849 26.8045C14.3911 27.1625 13.857 27.3636 13.3 27.3636C12.743 27.3636 12.2089 27.1625 11.8151 26.8045C11.4212 26.4465 11.2 25.9609 11.2 25.4545V15.2727C11.2 14.7664 11.4212 14.2808 11.8151 13.9228C12.2089 13.5648 12.743 13.3636 13.3 13.3636C13.857 13.3636 14.3911 13.5648 14.7849 13.9228C15.1788 14.2808 15.4 14.7664 15.4 15.2727ZM23.8 15.2727V25.4545C23.8 25.9609 23.5787 26.4465 23.1849 26.8045C22.7911 27.1625 22.257 27.3636 21.7 27.3636C21.143 27.3636 20.6089 27.1625 20.2151 26.8045C19.8213 26.4465 19.6 25.9609 19.6 25.4545V15.2727C19.6 14.7664 19.8213 14.2808 20.2151 13.9228C20.6089 13.5648 21.143 13.3636 21.7 13.3636C22.257 13.3636 22.7911 13.5648 23.1849 13.9228C23.5787 14.2808 23.8 14.7664 23.8 15.2727Z"
        fill={fill}
      />
    </svg>
  )
}

export default DeleteIcon
