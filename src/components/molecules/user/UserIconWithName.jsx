import React, { useContext } from "react";
import styled from "styled-components";
import { UserContext } from "../../../providers/UserProvider";

export const UserIconWithName = (props) => {
  const { image, name } = props;
  const { userInfo } = useContext(UserContext);
  const isAdmin = userInfo ? userInfo.isAdmin : false;

  return (
    <Container>
      <Img height={160} width={160} src={image} alt={name} />
      <Name>{name}</Name>
      {isAdmin && <SEdit>編集</SEdit>}
    </Container>
  );
};

const Container = styled.div`
  text-align: center;
`;

const Img = styled.img`
  border-radius: 50%;
`;

const Name = styled.p`
  font-size: 18px;
  font-weight: bold;
  margin: 0;
  color: #40514e;
`;

const SEdit = styled.span`
  text-decoration: underline;
  color: #aaa;
  cursor: pointer;
`;
