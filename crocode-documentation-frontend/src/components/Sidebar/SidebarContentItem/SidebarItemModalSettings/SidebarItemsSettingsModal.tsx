import ModalWrapperComponent from "@components/Modal/ModalWrapper/ModalWrapperComponent";
import ModalChangeTitle from "@components/ModalSettings/ModalChangeTitle";
import SidebarContext from "@context/SidebarContext";
import { useCallback, useContext, useState } from "react";
import { FC, SVGProps } from 'react';
import ModalItem from "./ModalItem";
import ModalItemSettingsWrapper from "./ModalItemSettingsWrapper";
import { CopyIcon, DeleteIcon, DublicateIcon, RenameIcon } from "@components/icons";

interface IModalItems {
  name: string
  alt_name?: string
  click?: (e: any) => void
  icon: FC<SVGProps<SVGSVGElement>>
}

const SidebarItemsSettingsModal = () => {
  const [isOpenEditModal, setIsOpenEditModal] = useState<boolean>(false);

  const { isOpenModal, positionModal, handleCloseModal, handleRemoveDocument } = useContext(SidebarContext);

  const handleOpenEditModal = useCallback(() => {
    handleCloseModal();
    setIsOpenEditModal(!isOpenEditModal);
  }, [setIsOpenEditModal, isOpenEditModal, handleCloseModal]);

  const handlerDelteDocument = useCallback((e: any) => {
    handleRemoveDocument(e)
    handleCloseModal();
  }, [handleCloseModal, handleRemoveDocument])

  const MODAL_ITEMS: IModalItems[] = [
    {
      name: 'Rename',
      click: handleOpenEditModal,
      icon: RenameIcon,
      alt_name: 'edit' 
    },
    {
      name: 'Duplicate',
      icon: DublicateIcon,
    },
    {
      name: 'Copy link',
      icon: CopyIcon,
    },
    {
      name: 'Delete',
      click: handlerDelteDocument,
      icon: DeleteIcon,
    }
  ]

  return (
    <>
      <ModalChangeTitle
        setIsOpenEditModal={setIsOpenEditModal}
        isOpenEditModal={isOpenEditModal}
        handleOpenEditModal={handleOpenEditModal}
      />
      <ModalWrapperComponent handler={handleCloseModal} state={isOpenModal} variant="transparent">
        <ModalItemSettingsWrapper isOpen={isOpenModal} position={positionModal}>
          {MODAL_ITEMS.map((item, i) => 
            <ModalItem data-name={item?.alt_name || ''} onClick={item?.click} key={i}>
              <>
                {item?.icon && <item.icon/>}
                {item.name}
              </>
            </ModalItem>
          )}
        </ModalItemSettingsWrapper>
      </ModalWrapperComponent>
    </>
  );
};

export default SidebarItemsSettingsModal;
