import CrossWrapper from "@components/cross/CrossWrapper"
import CrossLine from "@components/cross/CrossLine"

interface IProps {
  isOpen?: boolean
  onClick: () => void
}

const Cross = ({isOpen, onClick}: IProps) => {

  return (
    <CrossWrapper onClick={onClick}>
      <CrossLine position={'left'}/>
      <CrossLine position={'right'}/>
    </CrossWrapper>
  )
}

export default Cross