import styled from "styled-components";

const Main = (props) => {
  return (
    <Container>
      <Sharebox>
        Share
      <ImageContainer>
        <img src="/images/user.svg" alt="" />
        <ActionButton>Start a post</ActionButton>
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
      </Sharebox>
      <div>
        <Article>
          <SharedActer>
            <a>
              <img src="/images/user.svg" />
              <div>
                <span>Title</span>
                <span>Info</span>
                <span>Date</span>
              </div>
              </a>
              <button>
                <img src="/images/ellipsis.svg" />
              </button>
            </SharedActer>
            <Description>Description</Description>
            <SharedImg>
              <a>
                <img src="images/shared.png" />
              </a>
            </SharedImg>
            <SocialCom>
              <li>
                <button>
                  <img src="/images/like.svg" />
                </button>
                <button>
                <img src="/images/clap.svg" />
                  <span>75</span>
                </button>
                {/* <button>
                  <img src="/images/clap.svg" />
                </button> */}
              </li>
              <li>
                <a>2 Comments</a>
              </li>
            </SocialCom>
            <SocialAction>
<button>
  <img src="/images/like-icon.svg" /> 
  <span>Like</span>
</button>

<button>
  <img src="/images/comments.svg" /> 
  <span>Comments</span>
</button>

<button>
  <img src="/images/share.svg" /> 
  <span>Share</span>
</button>

<button>
  <img src="/images/send.svg" /> 
  <span>Send</span>
</button>
</SocialAction>
        </Article>
      </div>
    </Container>
  );
};



const SocialAction = styled.div`
align-items: center;
display: flex;
justify-content: flex-start;
margin: 0;
min-height: 40px;
padding: 4px 8px;
button{
  display: inline-flex;
  align-items: center;
  padding: 0px;
  color: #0a66c2;

  @media (min-width: 768px)
  {
    span{
      margin-left: 8px;

    }
  }
}
`;
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

const Article = styled(CommonCard)`
  padding: 0;
  margin: 0 0 8px;
  overflow: visible;

`; 

const Sharebox = styled(CommonCard)`
  display: flex;
  flex-direction: column;
  color: #958b7b;
  margin: 0 0 8px;
  padding: 16px;
  border-bottom: 1px solid rgba(0, 0, 0, 0.15);
  background-color: white;
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
    /* &:first-child{
      display: flex;
      align-items: center;
      padding: 8px 16px 0px 16px;
    } */
   &:nth-child(1){
    display: flex;
   }
  }
`;

const ImageContainer = styled.div`
  text-align: center;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 12px;      
   img {
    width: 48px;
    border-radius: 50%;
    margin-right: 8px;
  } 
  button{
    border: 1px solid rgba(0, 0, 0, 0.15);
    flex-grow: 1;
    border-radius: 35px;
    padding-left: 16px;
    margin: 4px 0;
    background-color: white;
    text-align: left;
  }
 
`;

const ButtonContainer = styled.div`
  display: flex;
  justify-content: space-around;
  margin: 4px 0;
  padding: 4px 0;
  button{
    img{
      margin: 0 4px 0 -2px;
    }
    span{
      color: #70b5f9;
    }
  }
  /* display: flex;
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
   
  } */
  /* &:first-child{
      display: flex;
      align-items: center;
      padding: 8px 16px 0px 16px;
    }  */
`;

const ActionButton = styled.button`
  display: flex;
  align-items: center;
`;

const SharedActer = styled.div`
padding-right: 40px;
flex-wrap: nowrap;
padding: 12px 16px 0;
margin-bottom: 8px;
align-items: center;
display: flex;
a{
  margin-right: 12px;
  flex-grow: 1;
  overflow: hidden;
  display: flex;
  text-decoration: none;


  img{
    width: 48px;
    height: 48px;

  }
  & > div{
    display: flex;
    flex-direction: column;
    flex-grow: 1;
    flex-basis: 0;
    margin-left: 8px;
    overflow: hidden;
    span{
      text-align: left;
      &:first-child {
        font-size: 14px;
        font-weight: 700;
        color: rgba(0, 0, 0, 1);
      }
      &:nth-child(n +1){
        font-size: 12px;
        color: rgba(0,0,0, 0.6);
      }
    }
  }
}
button{
  position: absolute;
  right: 12px;
  top: 0;
  background: transparent;
  border: none;
  outline: none;
}
`;

const Description = styled.div`
padding: 0 36px;
overflow: hidden;
color: rgba(0,0,0,0.9);
font-size: 14px;
text-align: left;

`;

const SharedImg = styled.div`
margin-top: 8px;
width: 100%;
display: block;
position: relative;
background-color: #f9fafb;
img{
  object-fit: contain;
  width: 100%;
  height: 100%;
}
`;

const SocialCom = styled.div`
line-height: 1.3;
display: flex;
align-items: flex-start;
margin: 0 16px;
padding: 8px 0;
border-bottom: 1px solid #e9e5df;
list-style: none;
li{
  display: flex;
  margin-right: 5px;
  font-size: 12px;
}
button{
  display: flex;
}

`;


export default Main;
