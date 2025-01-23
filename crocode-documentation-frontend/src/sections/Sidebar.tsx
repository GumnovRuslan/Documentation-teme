import React, { useCallback, useContext, useState } from "react";

import {
  SidebarWrapper,
  SidebarContent,
  SidebarContentStack,
  SidebarFooter,
  SidebarFooterButton,
  SidebarHeading,
  SidebarLogo,
  SidebarUser,
  SidebarUserName,
  SidebarUserRole,
  SidebarItemsStack,
} from "@components/Sidebar";
import SidebarItem from "../components/Sidebar/SidebarItem";
import DocumentContext from "@context/DocumentContext";
import EmojiPicker from "@components/EmojiPicker";
import useEmojiPicker from "@hooks/useEmojiPicker";
import SearchModal from "@components/SearchModal";
import NewPageModal from "@components/NewPageModal/NewPageModal";
import SidebarContext from "@context/SidebarContext";
import useContextModal from "@hooks/useContextModal";
import SidebarItemsSettingsModal from "@components/Sidebar/SidebarContentItem/SidebarItemModalSettings/SidebarItemsSettingsModal";
import SidebarTrashLink from "@components/Sidebar/SidebarTrashLink";
import TrashModal from "@components/Sidebar/TrashModal/TrashModal";
import UserContext from "@context/UserContext";
import SidebarMenuWrapper from "@components/Sidebar/SidebarMenuWrapper";
import Cross from "../components/cross/base/Cross";
import SidebarCross from "@components/Sidebar/SidebarCross";
import { PlusIcon, TrashIcon } from "@components/icons";

interface PropsOpenSidebar {
  isAttached: boolean;
  isOpen: boolean;
  setIsOpen: (active: boolean) => void;
}

const Sidebar = ({ isAttached, isOpen, setIsOpen }: PropsOpenSidebar): JSX.Element => {
  const { getRemovedDocuments, documents } = useContext(DocumentContext);
  const { user } = useContext(UserContext);

  const {
    handleOpen: emojiPickerHandlerOpen,
    handleClose: emojiPickerHandlerClose,
    handleChooseIcon: emojiPickerHandleChooseIcon,
    isOpen: emojiPickerIsOpen,
    position: emojiPickerPos,
  } = useEmojiPicker();

  const {
    handleOpenModal: sidebarModalOpener,
    handleCloseModal: sidebarModalClose,
    handleEditTitle: itemEditName,
    isOpenModal: sidebarModalOpen,
    positionModal: positionModal,
    handleRemoveDocument,
    title: title,
  } = useContextModal();

  const [searchActive, setSearchActive] = useState<boolean>(false);
  const [newPageActive, setNewPageActive] = useState<boolean>(false);
  const [isChild, setIsChild] = useState<boolean>(false);
  const [id, setId] = useState<string>("root");
  const [trashModalOpen, setTrashModalOpen] = useState<boolean>(false);
  const [logoutModal, setLogoutModal] = useState<boolean>(false);

  const handleSidebarClose = useCallback((): void => {
      setIsOpen(false);
  }, [setIsOpen]);

  const handleCloseLogoutModal = useCallback((): void => {
    setLogoutModal(false);
  }, [setLogoutModal]);

  const handleSidebarOpen = useCallback((): void => {
    if (!isAttached) {
      setIsOpen(true);
    }
  }, [setIsOpen, isAttached]);

  // const handleSearchClick = useCallback((): void => {
  //   setSearchActive(true);
  // }, [setSearchActive]);

  const handleOpenTrashModal = useCallback((): void => {
    getRemovedDocuments();
    setTrashModalOpen(!trashModalOpen);
  }, [setTrashModalOpen, trashModalOpen, getRemovedDocuments]);

  const handleNewPageActive = useCallback(
    (e: any) => {
      setNewPageActive(true);
      setIsChild(!!Number(e.target.dataset.is_child));
      setId(e.target.dataset.parent_id);
    },
    [setNewPageActive],
  );

  return (
    <>
      <SearchModal searchActive={searchActive} setSearchActive={setSearchActive} />

      <SidebarWrapper
        onMouseLeave={handleSidebarClose}
        onMouseEnter={handleSidebarOpen}
        isOpen={isOpen}
      >
        {user?.token ? (
          <SidebarHeading onMouseLeave={handleCloseLogoutModal}>
            <SidebarLogo>
              {user?.nickname
                .split(" ")
                .map((el) => el[0])
                .join("")}
            </SidebarLogo>
            <SidebarUser>
              <SidebarUserName>{user?.nickname}</SidebarUserName>
              <SidebarUserRole>{user?.roles[0]}</SidebarUserRole>
            </SidebarUser>
          </SidebarHeading>
        ) : null}
        <SidebarCross>
          <Cross onClick={handleSidebarClose}/>
        </SidebarCross>
        <SidebarContent>
          <SidebarContentStack>
            {!documents ? (
              <p>Loading...</p>
            ) : (
              <SidebarContext.Provider
                value={{
                  handleOpen: emojiPickerHandlerOpen,
                  handleClose: emojiPickerHandlerClose,
                  handleChooseIcon: emojiPickerHandleChooseIcon,
                  isOpen: emojiPickerIsOpen,
                  position: emojiPickerPos,
                  handleOpenModal: sidebarModalOpener,
                  handleCloseModal: sidebarModalClose,
                  handleEditTitle: itemEditName,
                  handleRemoveDocument,
                  isOpenModal: sidebarModalOpen,
                  positionModal: positionModal,
                  title: title,
                }}
              >
                
                <SidebarItemsStack>
                  {documents!.length > 0 &&
                    documents
                      ?.filter((el) => el.parent_id === null)
                      ?.map((el) => (
                        <SidebarItem
                          key={el.id}
                          {...el}
                          parent_id={el.id}
                          handleNewPageActive={handleNewPageActive}
                          handleSidebarClose={handleSidebarClose}
                        />
                      ))}
                </SidebarItemsStack>
                {documents!.length === 0 && (
                  <div>
                    You don&apos;t have any documents. <br /> Create a new one.
                  </div>
                )}
                <EmojiPicker />
                <SidebarItemsSettingsModal />
              </SidebarContext.Provider>
            )}
          </SidebarContentStack>
        </SidebarContent>
        {user?.roles.includes("ADMIN") && (
          <SidebarFooter>
            <SidebarFooterButton onClick={handleOpenTrashModal}>
              <TrashIcon/>
              Trash
            </SidebarFooterButton>
            <TrashModal
              trashModalOpen={trashModalOpen}
              setTrashModalOpen={setTrashModalOpen}
            />
            
            <SidebarFooterButton onClick={handleNewPageActive}
              data-is_child="0"
              data-parent_id="root"
            >
              <PlusIcon/>
              New page
            </SidebarFooterButton>
            <NewPageModal
              id={id}
              newPageActive={newPageActive}
              setNewPageActive={setNewPageActive}
              isChild={isChild}
            />
          </SidebarFooter>
        )}
      </SidebarWrapper>
    </>
  );
};

export default Sidebar;
