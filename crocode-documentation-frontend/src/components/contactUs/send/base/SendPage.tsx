import SendWrapper from "../SendWrapper"
import SendTitle from "../SendTitle"
import SendDescription from "../SendDescription"
import Button from "@components/Button"

interface IProps {
  handlerClick: () => void
}

const SendPage = ({handlerClick}: IProps) => {
  return (
    <SendWrapper>
      <SendTitle>Thanks for contacting us</SendTitle>
      <SendDescription>{`We'll get back to you as soon as possible.`}</SendDescription>
      <Button type="button" onClick={handlerClick}>Back to form</Button>
    </SendWrapper>
  )
}

export default SendPage