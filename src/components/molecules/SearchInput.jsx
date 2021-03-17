import React, { memo } from "react";
import styled from "styled-components";
import { PrimaryButton } from "../atoms/button/PrimaryButton";
import { Input } from "../atoms/input/Input";

export const SearchInput = memo(() => {
  return (
    <Container>
      <Input placeholder="検索条件を入力" />
      <ButtonWrapper>
        <PrimaryButton>検索</PrimaryButton>
      </ButtonWrapper>
    </Container>
  );
});

const Container = styled.div`
  display: flex;
  align-items: center;
`;

const ButtonWrapper = styled.div`
  padding-left: 8px;
`;
