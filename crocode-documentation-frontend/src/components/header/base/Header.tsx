import Burger from "@components/burger/base/Burger"
import DocumentTop from "@components/Document/DocumentTop"
import DocumentTopButton from "@components/Document/DocumentTopButton"
import DocumentTopWrapper from "@components/Document/DocumentTopWrapper"
import { DotesIcon } from "@components/icons"
import SidebarHeadingDotes from "@components/Sidebar/SidebarHeadingDotes"
import Breadcrumbs from "@sections/Breacrumbs"
import HeaderTop from "../HeaderTop"
import HeaderBreadcrumbsWrapper from "../HeaderBreadcrumbsWrapper"

interface IProps {
  activeDocument: any
  isOpenSidebar: boolean
  setIsOpenSidebar: (active: boolean) => void;
  handleOpenerEditor: () => void
}

const Header = ({activeDocument, isOpenSidebar, setIsOpenSidebar, handleOpenerEditor}: IProps) => {
  return (
    <DocumentTop>
      <HeaderBreadcrumbsWrapper>
        <Breadcrumbs activeDocument={activeDocument} />
      </HeaderBreadcrumbsWrapper>

      <HeaderTop>
        <Burger isActive={isOpenSidebar} setIsActive={setIsOpenSidebar}/>
        <DocumentTopWrapper>
          <DocumentTopButton to="/contact-us">Contact us</DocumentTopButton>
          <SidebarHeadingDotes onClick={handleOpenerEditor}>
            <DotesIcon size={25}/>
          </SidebarHeadingDotes>
        </DocumentTopWrapper>
      </HeaderTop>
          
    </DocumentTop>
  )
} 

export default Header