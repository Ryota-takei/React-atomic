import styled from "styled-components";
import { BaseButton } from "./BaseButton";

export const SecondaryButton = (props) => {
  const { children, onClick } = props;
  return <Button onClick={onClick}>{children}</Button>;
};

const Button = styled(BaseButton)`
  background-color: #11999e;
`;
