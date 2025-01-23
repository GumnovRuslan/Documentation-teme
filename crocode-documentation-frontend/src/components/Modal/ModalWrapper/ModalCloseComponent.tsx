import { useCallback } from "react";
import ModalCloseIconWrapper from "./ModalCloseIconWrapper";
import { CrossIcon } from "@components/icons";

interface IProps {
  state: boolean;
  handler: (active: boolean) => void;
}

const ModalCloseComponent = ({ state, handler }: IProps) => {
  const handleCloseModal = useCallback(() => {
    handler(!state);
  }, [handler, state]);

  return (
    <ModalCloseIconWrapper onClick={handleCloseModal}>
      <CrossIcon/>
    </ModalCloseIconWrapper>
  );
};

export default ModalCloseComponent;
