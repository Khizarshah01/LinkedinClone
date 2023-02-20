import styled from "styled-components";

const Main = (props) => {
  return (
    <Container>
      <Sharebox>
        Share
      </Sharebox>
      <ImageContainer>
        <img src="/images/user.svg" alt="" />
      </ImageContainer>
      <ButtonContainer>
        <ActionButton>
          <img src="/images/photo-icon.svg" alt="" />
          <span>Photo</span>
        </ActionButton>
        <ActionButton>
          <img src="/images/video-icon.svg" alt="" />
          <span>Video</span>
        </ActionButton>
        <ActionButton>
          <img src="/images/event-icon.svg" alt="" />
          <span>Event</span>
        </ActionButton>
        <ActionButton>
          <img src="/images/article-icon.svg" alt="" />
          <span>Write article</span>
        </ActionButton>
      </ButtonContainer>
    </Container>
  );
};

const Container = styled.div`
  grid-area: main;
`;

const CommonCard = styled.div`
  text-align: center;
  overflow: hidden;
  margin-bottom: 8px;
  background-color: #fff;
  border-radius: 5px;
  position: relative;
  border: none;
  box-shadow: rgba(60, 64, 67, 0.3) 0px 1px 2px 0px,
    rgba(60, 64, 67, 0.15) 0px 1px 3px 1px;
`;

const Sharebox = styled(CommonCard)`
  display: flex;
  flex-direction: column;
  color: #958b7b;
  margin: 0 0 8px;
  padding: 16px;
  border-bottom: 1px solid rgba(0, 0, 0, 0.15);
  background-color: white;
`;

const ImageContainer = styled.div`
  text-align: center;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 12px;
  /* img {
    width: 100%;
    border-radius: 50%;
    max-width: 68px;
  } */
`;

const ButtonContainer = styled.div`
  display: flex;
  justify-content: space-around;
  margin: 4px 0;
  padding: 4px 0;
  button {
    display: flex;
    align-items: center;
    padding: 8px;
    color: rgba(0, 0, 0, 0.5);
    background-color: transparent;
    border: none;
    font-size: 14px;
    span {
      margin-left: 8px;
    }
    :hover {
      background-color: rgba(0, 0, 0, 0.05);
      border-radius: 5px;
      cursor: pointer;
    }
  }
`;

const ActionButton = styled.button`
  display: flex;
  align-items: center;
`;

export default Main;
