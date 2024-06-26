import styled from "styled-components";
import { BsTwitterX } from "react-icons/bs";
import { IoClose } from "react-icons/io5";
import { Link, useHistory } from "react-router-dom/cjs/react-router-dom.min";
import { FcGoogle } from "react-icons/fc";
import { FaApple } from "react-icons/fa";

const Page = styled.div``;

const Form = styled.div`
  width: 25rem;
  height: 30rem;
  background-color: #242d34;
  position: fixed;
  z-index: 9999;
  top: 20%;
  left: 35%;
  color: white;
  border-radius: 1rem;
`;
const FormHeader = styled.div`
  display: flex;
`;
const Xbutton = styled.button`
  float: left;
  margin-left: 0.7rem;
  margin-top: 0.7rem;
  background-color: #242d34;
  border-radius: 50%;
  color: white;
`;

const Logo = styled.div`
  position: absolute;
  left: 50%;
  top: 0.7rem;
`;
const WhiteButton = styled.button`
  width: 50%;
  border-radius: 10rem;
  font-size: 12px;
`;

const BlackButton = styled.button`
  width: 50%;
  border-radius: 10rem;
  font-size: 12px;
  background-color: #242d34;
  color: white;
  border: 1px solid white;
`;

const PwithLine = styled.div`
  width: 45%;
  text-align: center;
`;

const TextBox = styled.input`
  background-color: #242d34;
  height: 2.5rem;
  width: 12rem;
  border: 0.5px solid #818589;
  border-radius: 0.5rem;
  color: white;
`;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1rem;
`;

const BottomText = styled.p`
  font-size: 10px;
`;
const TitleText = styled.div`
  width: 12.5rem;
  display: flex;
  justify-content: flex-start;
`;

function LoginForm() {
  let history = useHistory();
  const xButtonClick = () => {
    history.push("/");
  };

  const ileriButtonClick = () => {
    history.push("/home");
  };
  return (
    <Page>
      <Form>
        <FormHeader>
          <Xbutton onClick={xButtonClick}>
            <IoClose />
          </Xbutton>
          <Logo>
            <BsTwitterX />
          </Logo>
        </FormHeader>

        <Container>
          <TitleText>
            <h2>X'e giriş yap</h2>
          </TitleText>
          <WhiteButton onClick={ileriButtonClick}>
            <FcGoogle />
            <span> </span>
            Google ile kaydol
          </WhiteButton>
          <WhiteButton onClick={ileriButtonClick}>
            <FaApple />
            <span></span>Apple ile kaydol
          </WhiteButton>
          <PwithLine>-----------veya------------</PwithLine>
          <TextBox
            type="text"
            placeholder="Telefon numarası,e-posta veya kullanıcı adı"
          ></TextBox>
          <WhiteButton onClick={ileriButtonClick}>İleri</WhiteButton>
          <BlackButton>Şifreni mi unuttun?</BlackButton>
          <BottomText>
            Henüz bir hesabın yok mu? <Link to="/signin">Kaydol</Link>{" "}
          </BottomText>
        </Container>
      </Form>
    </Page>
  );
}

export default LoginForm;
