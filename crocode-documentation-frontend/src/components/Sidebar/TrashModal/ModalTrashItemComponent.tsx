import EmojiIcon from "@components/Emoji";
import { IDoc } from "@hooks/useDocuments";
import { useCallback, useState } from "react";
import ConfirmDeleteModal from "./ConfirmDeleteModal";
import ModalTrashIconWrapper from "./ModalTrashIconWrapper";
import ModalTrashItem from "./ModalTrashItem";
import ModalTrashItemName from "./ModalTrashItemName";
import { BackArrowIcon, TrashIcon } from "@components/icons";

interface IProps {
  trashModalOpen: boolean;
  setTrashModalOpen: (active: boolean) => void;
  el: IDoc;
}

const ModalTrashItemComponent = ({ trashModalOpen, setTrashModalOpen, el }: IProps) => {
  const [openConfirm, setOpenConfirm] = useState<boolean>(false);

  const handleOpenConfirmModal = useCallback(() => {
    setOpenConfirm(!openConfirm);
  }, [setOpenConfirm, openConfirm]);

  return (
    <>
      <ModalTrashItem>
        <EmojiIcon id={el.icon} />
        <ModalTrashItemName>{el.title}</ModalTrashItemName>
        <ModalTrashIconWrapper>
          <BackArrowIcon size={16}/>
        </ModalTrashIconWrapper>
        <ModalTrashIconWrapper onClick={handleOpenConfirmModal}>
          <TrashIcon size={17}/>
        </ModalTrashIconWrapper>
      </ModalTrashItem>
      <ConfirmDeleteModal
        openConfirm={openConfirm}
        handleOpenConfirmModal={handleOpenConfirmModal}
        el={el}
      />
    </>
  );
};

export default ModalTrashItemComponent;
