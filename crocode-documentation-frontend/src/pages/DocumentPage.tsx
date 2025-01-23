import { useState, useCallback } from "react";
import Sidebar from "@sections/Sidebar";
import DocumentWrapper from "@components/Document/DocumentWrapper";
import useDocuments from "@hooks/useDocuments";
import DocumentContext from "@context/DocumentContext";
import SettingsModal from "@components/ModalSettings";
import AuthPage from "./AuthPage";
import { Outlet } from "react-router-dom";
import Header from "@components/header/base/Header";
import Main from "@components/Main";

export interface IAuth {
  setOpenLoginModal: (active: boolean) => void;
  openLoginModal: boolean;
}

const DocumentPage = () => {
  const [isOpenEditor, setIsOpenEditor] = useState<boolean>(false);
  const [openLoginModal, setOpenLoginModal] = useState<boolean>(false);
  const [isOpenSidebar, setIsOpenSidebar] = useState<boolean>(false)
  const {
    documents,
    error,
    activeDocument,
    getActiveDocument,
    getRootDocuments,
    getDocuments,
    updateDocuments,
    createDocument,
    restoreRemovedDocument,
    removedDocuments,
    getRemovedDocuments,
    deleteDocument,
  } = useDocuments();

  const handleOpenerEditor = useCallback((): void => {
    setIsOpenEditor(!isOpenEditor);
  }, [isOpenEditor]);
  // @ts-ignore
  // const updatedTime = () => {
  //   if (activeDocument?.updatedAt) {
  //     const editedDate = new Date(activeDocument?.updatedAt).getTime();
  //     const diffTime = (Date.now() - editedDate) / (60 * 60 * 24 * 1000);
  //     let visibleTime = "";

  //     if (diffTime < 0.04) {
  //       visibleTime = "1h";
  //     }

  //     if (diffTime > 0.04 && diffTime < 0.35) {
  //       visibleTime = "few hours";
  //     }

  //     if (diffTime > 0.35 && diffTime < 1) {
  //       visibleTime = "less then 1d";
  //     }

  //     if (diffTime > 1 && diffTime < 5) {
  //       visibleTime = "few days";
  //     }
  //     if (diffTime > 5 && diffTime < 30) {
  //       visibleTime = "less then month";
  //     }
  //     if (diffTime > 30) {
  //       visibleTime = "more then month";
  //     }

  //     return `Edited ${visibleTime} ago`;
  //   }
  // };

  return (
    <DocumentContext.Provider
      value={{
        documents,
        error,
        activeDocument,
        getActiveDocument,
        getRootDocuments,
        getDocuments,
        updateDocuments,
        createDocument,
        restoreRemovedDocument,
        getRemovedDocuments,
        removedDocuments,
        deleteDocument,
      }}
    >
      <Sidebar isAttached={true} isOpen={isOpenSidebar} setIsOpen={setIsOpenSidebar} />
      <DocumentWrapper>
        <Header 
          activeDocument={activeDocument} 
          isOpenSidebar={isOpenSidebar} 
          setIsOpenSidebar={setIsOpenSidebar} 
          handleOpenerEditor={handleOpenerEditor}
        />
        <AuthPage setOpenLoginModal={setOpenLoginModal} openLoginModal={openLoginModal} />
        <SettingsModal
          handleOpenerEditor={handleOpenerEditor}
          isOpenEditor={isOpenEditor}
          setOpenLoginModal={setOpenLoginModal}
          openLoginModal={openLoginModal}
        />
        <Main>
          <Outlet />
        </Main>
      </DocumentWrapper>
    </DocumentContext.Provider>
  );
};

export default DocumentPage;
