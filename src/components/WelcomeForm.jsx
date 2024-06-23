import React from "react";
import styled from "styled-components";
import { FcGoogle } from "react-icons/fc";
import { FaApple } from "react-icons/fa";
import { useHistory } from "react-router-dom";

const PwithLine = styled.div`
  width: 45%;
  text-align: center;
`;
const HesapOlusturP = styled.p`
  font-size: 8px;
`;

const Form = styled.div`
  width: 35%;
  height: 100%;
  display: flex;
  flex-direction: column;
  gap: 1rem;
  align-items: flex-start;
  text-align: left;
`;

const WhiteButton = styled.button`
  width: 50%;
  border-radius: 10rem;
  font-size: 12px;
`;

const BlueButton = styled.button`
  width: 50%;
  border-radius: 10rem;
  background-color: #1d9bf0;
  font-size: 12px;
`;

const BlackButton = styled.button`
  width: 50%;
  border-radius: 10rem;
  background-color: black;
  border: 1px solid #1d9bf0;
  font-size: 12px;
  color: #1d9bf0;
`;

function WelcomeForm() {
  let history = useHistory();
  const hesapOlusturButtonClick = () => {
    history.push("/signin");
  };
  const girisYapButtonClick = () => {
    history.push("/login");
  };
  return (
    <Form>
      <h1>Şu anda olup bitenler</h1>
      <h2>Hemen katıl.</h2>
      <WhiteButton>
        <FcGoogle />
        <span> </span>
        Google ile kaydol
      </WhiteButton>
      <WhiteButton>
        <FaApple />
        <span></span>Apple ile kaydol
      </WhiteButton>
      <PwithLine>-------------veya-------------</PwithLine>
      <BlueButton onClick={hesapOlusturButtonClick}>Hesap oluştur</BlueButton>
      <HesapOlusturP>
        By signing up, you agree to the Terms of Service and Privacy
        <br /> Policy, including Cookie Use.
      </HesapOlusturP>

      <p>Zaten bir hesabın var mı?</p>
      <BlackButton onClick={girisYapButtonClick}>Giriş yap</BlackButton>
    </Form>
  );
}

export default WelcomeForm;
