import styled from "styled-components";

export const UserIconWithName = (props) => {
  const { image, name } = props;
  return (
    <Container>
      <Img height={160} width={160} src={image} alt={name} />
      <Name>{name}</Name>
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
