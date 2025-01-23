import BurgerWrapper from "../BurgerWrapper";
import BurgerLine from "../BurgerLine";
import { useCallback } from "react";

interface IProps {
  isActive: boolean
  setIsActive: (active: boolean) => void;
}

const BurgerComponent = ({isActive, setIsActive}: IProps) => {
  
  const handlerToggleIsActive = useCallback(() => {
    setIsActive(!isActive)
  }, [isActive, setIsActive])

  return (
    <BurgerWrapper type="button" onClick={handlerToggleIsActive}>
      <BurgerLine/>
      <BurgerLine/>
      <BurgerLine/>
    </BurgerWrapper>
  )
}

export default BurgerComponent