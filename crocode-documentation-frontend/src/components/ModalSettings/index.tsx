import { useState, useCallback, useEffect, useContext } from "react";
import EditorModalSettings from "./EditorModalSettings";
import SignInButton from "./SignInButton";
import UserContext from "@context/UserContext";
import ModalWrapperComponent from "@components/Modal/ModalWrapper/ModalWrapperComponent";

interface ISettings {
  isOpenEditor: boolean;
  openLoginModal: boolean;
  setOpenLoginModal: (active: boolean) => void;
  handleOpenerEditor: () => void;
}

const _defaultSettings = {
  fontType: "Inter",
  isFullWidth: false,
  isSmallText: false,
};

const SettingsModal = ({
  isOpenEditor,
  openLoginModal,
  setOpenLoginModal,
  handleOpenerEditor,
}: ISettings) => {
  const { user, logout } = useContext(UserContext);

  const handleOpenLoginModal = useCallback(() => {
    handleOpenerEditor();
    setOpenLoginModal(!openLoginModal);
  }, [setOpenLoginModal, openLoginModal, handleOpenerEditor]);

  const handleLogOut = useCallback(() => {
    handleOpenerEditor();
    logout();
  }, [logout, handleOpenerEditor]);

  return (
    <ModalWrapperComponent handler={handleOpenerEditor} state={isOpenEditor} variant="transparent">
      <EditorModalSettings isOpenEditor={isOpenEditor}>
        {user ? (
          <SignInButton onClick={handleLogOut}>Log Out</SignInButton>
          ) : (
          <SignInButton onClick={handleOpenLoginModal}>Sign In</SignInButton>
          )}
      </EditorModalSettings>
    </ModalWrapperComponent>
  );
};

export default SettingsModal;
