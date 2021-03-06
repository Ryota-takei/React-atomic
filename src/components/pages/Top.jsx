import { useContext } from "react";
import { useHistory } from "react-router-dom";
import styled from "styled-components";
import { UserContext } from "../../providers/UserProvider";
import { SecondaryButton } from "../atoms/button/SecondaryButton";

export const Top = () => {
  const history = useHistory();
  const { setUserInfo } = useContext(UserContext);

  const onClcikAdmin = () => {
    setUserInfo({ isAdmin: true });
    history.push("./users");
  };
  const onClickGeneral = () => {
    setUserInfo({ isAdmin: false });
    history.push("./users");
  };
  return (
    <SContainer>
      <h2>Topページです。</h2>
      <SecondaryButton onClick={onClcikAdmin}>管理者ユーザー</SecondaryButton>
      <br />
      <br />
      <SecondaryButton onClick={onClickGeneral}>一般ユーザー</SecondaryButton>
    </SContainer>
  );
};

const SContainer = styled.div`
  text-align: center;
`;
