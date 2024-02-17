interface LogoSvgProps {
  fillColor?: string
  height: number
  width: number
}

const LogoSvg = ({ fillColor, height, width }: LogoSvgProps) => {
  return (
    <svg
      fill={fillColor ?? '#F9F6EE'}
      width={width}
      height={height}
      viewBox='0 0 24 24'
      xmlns='http://www.w3.org/2000/svg'
    >
      <path d='M13,2l9,13.6L13,22ZM11,2,2,15.6,11,22Z' />
    </svg>
  )
}

export default LogoSvg
