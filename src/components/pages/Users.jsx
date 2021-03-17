import React, { useContext } from "react";
import styled from "styled-components";
import { UserContext } from "../../providers/UserProvider";
import { SecondaryButton } from "../atoms/button/SecondaryButton";
import { SearchInput } from "../molecules/SearchInput";
import { UserCard } from "../organisms/user/UserCard";

const users = [...Array(10).keys()].map((val) => {
  return {
    id: val,
    name: `ryota${val}`,
    image: "https://source.unsplash.com/NE0XGVKTmcA",
    email: "11111234@example.com",
    phone: "000-0000-000",
    company: {
      name: "テスラ"
    },
    website: "httops://google"
  };
});

export const Users = () => {
  const { userInfo, setUserInfo } = useContext(UserContext);
  const onClickSwitch = () => {
    return setUserInfo({ isAdmin: !userInfo.isAdmin });
  };
  return (
    <SContainer>
      <h2>User一覧ページです。</h2>
      <SearchInput />
      <br />
      <SecondaryButton onClick={onClickSwitch}>切り替え</SecondaryButton>
      <SUserArea>
        {users.map((user) => {
          return <UserCard key={user.id} user={user} />;
        })}
      </SUserArea>
    </SContainer>
  );
};

const SContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 24px;
`;

const SUserArea = styled.div`
  padding-top: 40px;
  width: 100%;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  grid-gap: 20px;
`;
