import { useCallback, useState } from "react";
import {
  SidebarHeading,
  SidebarLogo,
  SidebarUser,
  SidebarUserName,
  SidebarUserRole,
} from "@components/Sidebar";
import SidebarHeadingDotes from "@components/Sidebar/SidebarHeadingDotes";
import SearchBar from "./SearchBar";
import SearchWrapper from "./SearchWrapper";
import UserList from "./UserList";
import UsersListContent from "./UsersListContent";
import UsersListWrapper from "./UsersListWrapper";

interface IUser {
  nickname: string;
  email: string;
  role: string;
}

const list = [
  {
    nickname: "Anastasiya Shtern",
    email: "shtern_anastasiya@gmail.com",
    role: "user",
  },
  {
    nickname: "Anastasiya Shtern",
    email: "shtern_anastasiya@gmail.com",
    role: "user",
  },
  {
    nickname: "Anastasiya Shtern",
    email: "shtern_anastasiya@gmail.com",
    role: "user",
  },
  {
    nickname: "Anastasiya Shtern",
    email: "shtern_anastasiya@gmail.com",
    role: "user",
  },
  {
    nickname: "Anastasiya Shtern",
    email: "shtern_anastasiya@gmail.com",
    role: "user",
  },
  {
    nickname: "Anastasiya Shtern",
    email: "shtern_anastasiya@gmail.com",
    role: "user",
  },
  {
    nickname: "Anastasiya Shtern",
    email: "shtern_anastasiya@gmail.com",
    role: "user",
  },
];

const UsersListComponent = () => {
  const [search, setSearch] = useState<string>("");
  const handleChangeSearch = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      setSearch(e.target.value);
    },
    [setSearch],
  );
  return (
    <UsersListWrapper>
      <UsersListContent>
        <SearchWrapper>
          <svg
            width="18"
            height="18"
            viewBox="0 0 16 16"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <circle cx="7.33229" cy="7.19252" r="5.35902" stroke="black" strokeLinecap="square" />
            <path d="M10.9915 11.1389L14.0271 14.1667" stroke="black" strokeLinecap="round" />
          </svg>
          <SearchBar
            type="text"
            placeholder="Search..."
            onChange={handleChangeSearch}
            value={search}
          />
        </SearchWrapper>
        <UserList>
          {list.map((user: IUser) => (
            <SidebarHeading key={user.email}>
              <SidebarLogo>
                {user?.nickname
                  .split(" ")
                  .map((el) => el[0])
                  .join("")}
              </SidebarLogo>
              <SidebarUser>
                <SidebarUserName>
                  {user?.nickname}
                  {`(${user?.email})`}
                </SidebarUserName>
                <SidebarUserRole>{user?.role}</SidebarUserRole>
              </SidebarUser>

              <SidebarHeadingDotes>
                <svg
                  width="16"
                  height="16"
                  viewBox="0 0 16 16"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <circle cx="3.66675" cy="7.66667" r="1" fill="black" />
                  <circle cx="8.3335" cy="7.66667" r="1" fill="black" />
                  <circle cx="13" cy="7.66667" r="1" fill="black" />
                </svg>
              </SidebarHeadingDotes>
            </SidebarHeading>
          ))}
        </UserList>
      </UsersListContent>
    </UsersListWrapper>
  );
};

export default UsersListComponent;
