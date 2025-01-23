import LoginLogoWrapper from "../LoginLogoWrapper"

interface IProps {
  icon: () => React.ReactNode
}

const LoginLogo = ({icon}: IProps) => {
  return (
    <LoginLogoWrapper>
      {icon()}
    </LoginLogoWrapper>
  )
}

export default LoginLogo