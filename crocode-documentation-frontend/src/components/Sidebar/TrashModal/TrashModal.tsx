import { useCallback, useContext, useState } from "react";
import ModalSearch from "@components/Document/ModalSearch";
import ModalSearchWrapper from "@components/Document/ModalSearchWrapper";
import ModalWrapperComponent from "@components/Modal/ModalWrapper/ModalWrapperComponent";
import ModalTrashContent from "./ModalTrashContent";
import ModalTrashList from "./ModalTrashList";
import ModalCloseComponent from "@components/Modal/ModalWrapper/ModalCloseComponent";
import ModalTrashItemComponent from "./ModalTrashItemComponent";
import DocumentContext from "@context/DocumentContext";
import { SearchIcon } from "@components/icons";

interface ITrash {
  trashModalOpen: boolean;
  setTrashModalOpen: (active: boolean) => void;
}

const TrashModal = ({ trashModalOpen, setTrashModalOpen }: ITrash) => {
  const { removedDocuments } = useContext(DocumentContext);
  const [search, setSearch] = useState<string>("");

  const handleChangeInput = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      setSearch(e.target.value);
    },
    [setSearch],
  );
  return (
    <ModalWrapperComponent handler={setTrashModalOpen} state={trashModalOpen}>
      <ModalTrashContent>
        <ModalCloseComponent handler={setTrashModalOpen} state={trashModalOpen} />
        {/* <ModalSearchWrapper>
          <SearchIcon size={18}/>
          <ModalSearch
            placeholder="Search..."
            type="text"
            value={search}
            onChange={handleChangeInput}
          />
        </ModalSearchWrapper> */}
        <ModalTrashList>
          {removedDocuments &&
            removedDocuments.map((el) => (
              <ModalTrashItemComponent
                key={el.id}
                el={el}
                trashModalOpen={trashModalOpen}
                setTrashModalOpen={setTrashModalOpen}
              />
            ))}
        </ModalTrashList>
      </ModalTrashContent>
    </ModalWrapperComponent>
  );
};

export default TrashModal;
