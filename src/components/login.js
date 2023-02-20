import styled from "styled-components"
import { connect, Connect } from "react-redux";
import { Navigate } from 'react-router-dom';

import { signInApi } from "../actions";
const Login = (props)=>
{
    return (
      <Container>

        {
          props.user && <Navigate to= "/home" />
        }
        <Nav>
            <a href="/"><img src="/images/login-logo.svg" alt=" " /></a>
        <div>
            <Join>Join now</Join>
            <Signing>Sign in</Signing>
        </div>
        </Nav>
        <Section>
            <Hero>
                <h1>Welcone to linkedin community</h1>
                <img src="/images/login-hero.svg" alt=" "/>
            </Hero>
            <Form>
                <Google onClick={()=>props.signIn()}>
                    <img src="/images/google.svg" alt=" "/>
                Sign in with Google
                </Google>
            </Form>
        </Section>
      </Container>
    )
  }

  const Container = styled.div`
  padding: 0x;
  `;

const Form = styled.div`
margin-top: 100px;
width: 400px;
@media (max-width: 768px){
    margin-top: 20px;
}
`;
const Google = styled.button`
display: flex;
justify-content: center;
background-color: #fff;
align-items: center;
height: 56px;
width: 100%;
border-radius: 28px;
box-shadow: rgba(0, 0, 0, 0.25) 0px 54px 55px, rgba(0, 0, 0, 0.12) 0px -12px 30px, rgba(0, 0, 0, 0.12) 0px 4px 6px, rgba(0, 0, 0, 0.17) 0px 12px 13px, rgba(0, 0, 0, 0.09) 0px -3px 5px;
vertical-align: middle;
z-index: 0;
transition-duration: 167px;
font-size: 20px;
color: rgba(0, 0, 0, 0.6);
&:hover {
    background-color: rgba(207, 207, 207, 0.25);
    color: rgba(0, 0, 0, 0.75);
}
`;
const Hero = styled.div`
width: 100%;
h1{
    padding-bottom: 0;
    width: 55%;
    font-size: 56px;
    color: #2977c9;
    font-weight: 200;
    line-height: 70px;
    @media (max-width: 768px) {
        text-align: center;
        font-size: 20px;
        width: 100%;
        line-height: 2;
    }
}
img{
/* z-index: -1;  */
width: 700px;
height: 670px;
position: absolute;
bottom: -2px;
right: -150px;
@media (max-width: 768px){
 top: 230px;
 width: initial;
 position: initial;
 height: initial;
}
}
`;
  const Signing = styled.a`
  box-shadow: inset 0 0 0 1px #0a66c2;
  color: #0a66c2;
  border-radius: 24px;
  transition-duration: 167ms;
  font-size: 16px;
  font-weight: 600;
  line-height: 40px;
  padding: 10px 24px;
  text-align: center;
  background-color: rgba(0, 0, 0, 0);
  &:hover {
    background-color: rgba(112, 181, 249, 0.15);
    color: #0a66c2;
    text-decoration:none;
  }
 `;

 const Section = styled.section`
 align-items: center;
 min-height: 700px;
 display: flex;
 padding-bottom: 138px;
 padding-top: 40px;
 padding: 60px 0;
 flex-wrap: wrap;
 width: 100%;
 max-width: 1128px;
 margin: auto;
 align-content: start;
 @media (max-width: 768px)
 {
    margin: auto;
    min-height: 0px;
 }
 `;

  const Join = styled.a`
  font-size: 16px;
  padding: 10px 12px;
  text-decoration: none;
  color: rgba(0,0,0,0.6);
  margin-right: 12px;
  border-radius: 4px;
  &:hover{
    background-color: rgba(0,0,0,0.08);
    color: rgba(0,0,0,0.9);
    text-decoration: none;
}
  `;


  const Nav = styled.nav`
  max-width: 1228px;
  margin: auto;
  padding: 12px 0 16px;
  display: flex;
  align-items: center;
  position: relative;
  justify-content: space-between;
  flex-wrap: nowrap;
  
  & >a {
    width: 135px;
    height: 34px;
    @media (max-width: 768px){
        padding: 0 5px;

    }
  }
  `;

const mapStateToProps =(state)=>{
  return{
    user: state.userState.user,
  }
};

const mapDispatchToProps = (dispatch)=>({

  signIn: () => dispatch(signInApi()),
});


export default connect(mapStateToProps, mapDispatchToProps)(Login);
