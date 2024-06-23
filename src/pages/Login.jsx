import React from "react";
import styled from "styled-components";
import LoginForm from "../components/LoginForm";
import WelcomeForm from "../components/WelcomeForm";

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

function Login() {
  return (
    <Page>
      <Imgdiv></Imgdiv>
      <WelcomeForm></WelcomeForm>
      <LoginForm></LoginForm>
    </Page>
  );
}

export default Login;
