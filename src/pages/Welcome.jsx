import React from "react";

import styled from "styled-components";

import { FcGoogle } from "react-icons/fc";
import { FaApple } from "react-icons/fa";

const Page = styled.div`
  margin: 0; /* Sayfanın kenar boşluklarını sıfırlar */
  padding: 0; /* Sayfa içeriğinin kenar boşluklarını sıfırlar */
  height: 100vh; /* Ekran yüksekliği kadar sayfa yüksekliği ayarlar */
  display: flex; /* İçeriği yatayda hizalar */
  flex-direction: row; /* İçeriği sütun şeklinde hizalar */
  gap: 10rem;
`;
const Imgdiv = styled.div`
  width: 50%;
  background-image: url("https://static.dezeen.com/uploads/2023/07/x-logo-twitter-elon-musk_dezeen_2364_col_0.jpg");
  background-size: cover; /* Resmi arka plan boyunca yaymayı sağlar */
  background-position: center; /* Resmi ortalamak için konumlandırır */
  background-repeat: no-repeat; /* Resmin tekrarlanmasını engeller */
`;

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

function Welcome() {
  return (
    <Page>
      <Imgdiv></Imgdiv>
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
        <BlueButton>Hesap oluştur</BlueButton>
        <HesapOlusturP>
          By signing up, you agree to the Terms of Service and Privacy
          <br /> Policy, including Cookie Use.
        </HesapOlusturP>

        <p>Zaten bir hesabın var mı?</p>
        <BlackButton>Giriş yap</BlackButton>
      </Form>
    </Page>
  );
}

export default Welcome;
