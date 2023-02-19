import styled from "styled-components";

const Main = (props) => {
  return (
  <Container>
    {/* <Box>
        hero
    </Box> */}
     <Sharebox>
        Share
        </Sharebox>
        <div>
            <img src="/images/user.svg" alt=" " />
        </div>

        <div>
            <button>
                <img src="/images/photo-icon.svg" alt="" />
            <span>Photo</span>
            </button>

            <button>
                <img src="/images/video-icon.svg" alt="" />
            <span>Video</span>
            </button>

            <button>
                <img src="/images/event-icon.svg" alt="" />
            <span>Event</span>
            </button>

            <button>
                <img src="/images/article-icon.svg" alt="" />
            <span>Article</span>
            </button>
            </div> 
    </Container>
  );
};

const Container = styled.div`
  grid-area: main;
`;

// const Box = styled.div(CommonCard)``;
const CommonCard = styled.div`
text-align: center;
overflow: hidden;
margin-bottom: 8px;
background-color: #fff;
border-radius: 5px;
position: relative;
border: none;
box-shadow: rgba(60, 64, 67, 0.3) 0px 1px 2px 0px, rgba(60, 64, 67, 0.15) 0px 1px 3px 1px;
`;

const Sharebox = styled(CommonCard)`
  display: flex;
  flex-direction: column;
  color: #958b7b;
  margin: 0 0 8px;
  background-color: white;

  div {
    & button {
      color: red;
      outline: none;
      color: rgba(0, 0, 0, 0.6);
      font-size: 40px;
      line-height: 1.5;
      background: transparent;
      border: none;
      display: flex;
      align-items: center;
      font-weight: 600;
    }
  }
`;

export default Main;