import styled from "styled-components";
import { BsTwitterX } from "react-icons/bs";
import { useHistory } from "react-router-dom";
import { IoClose } from "react-icons/io5";

const Page = styled.div``;

const Form = styled.div`
  width: 25rem;
  height: 32rem;
  background-color: #242d34;
  position: fixed;
  z-index: 9999;
  top: 10%;
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

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1rem;
`;
const TitleText = styled.div`
  width: 12.5rem;
  display: flex;
  justify-content: flex-start;
  align-self: flex-start;
  margin-left: 3.5rem;
`;

const TextBox = styled.input`
  background-color: #242d34;
  height: 2.5rem;
  width: 17rem;
  border: 0.5px solid #818589;
  border-radius: 0.5rem;
  color: white;
`;
const DogumtarihiText = styled.p`
  font-size: 10px;
  margin: 0 3.5rem;
  text-align: left;
`;
const DogumtarihiTitle = styled.h5`
  margin-left: 3.5rem;
`;
const DogumtarihiContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
`;
const DateSelecter = styled.div`
  display: flex;
  flex-direction: row;
  align-self: center;
  margin-top: 5px;
  gap: 10px;
`;
const WhiteButton = styled.button`
  width: 70%;
  border-radius: 10rem;
  font-size: 12px;
`;
const CustomSelect = styled.select`
  background-color: #242d34;
  color: white;
  height: 2rem;
  width: 5rem;
`;

function SignInForm() {
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
            <h2>Hesabını oluştur</h2>
          </TitleText>
          <TextBox type="text" placeholder="İsim" />
          <TextBox type="text" placeholder="Telefon" />
          <br />
          <DogumtarihiContainer>
            <DogumtarihiTitle>Doğum tarihi</DogumtarihiTitle>
            <DogumtarihiText>
              Bu, herkese açık olarak gösterilmeyecek. Bu hesap bir işletme,
              evcil hayvan veya başka bir şey için olsa bile kendi yaşını
              doğrulaman gerekir.
            </DogumtarihiText>
            <DateSelecter>
              <CustomSelect id="month" name="month" placeholder="Ay">
                <option value="Ay">Ay</option>
                <option value="1">Ocak</option>
                <option value="2">Şubat</option>
                <option value="3">Mart</option>
                <option value="4">Nisan</option>
                <option value="5">Mayıs</option>
                <option value="6">Haziran</option>
                <option value="7">Temmuz</option>
                <option value="8">Ağustos</option>
                <option value="9">Eylül</option>
                <option value="10">Ekim</option>
                <option value="11">Kasım</option>
                <option value="12">Aralık</option>
              </CustomSelect>

              <CustomSelect id="day" name="day">
                <option value="Gün">Gün</option>
                <option value="1">1</option>
                <option value="2">2</option>
                <option value="3">3</option>
                <option value="4">4</option>
                <option value="5">5</option>
                <option value="6">6</option>
                <option value="7">7</option>
                <option value="8">8</option>
                <option value="9">9</option>
                <option value="10">10</option>
                <option value="11">11</option>
                <option value="12">12</option>
                <option value="13">13</option>
                <option value="14">14</option>
                <option value="15">15</option>
                <option value="16">16</option>
                <option value="17">17</option>
                <option value="18">18</option>
                <option value="19">19</option>
                <option value="20">20</option>
                <option value="21">21</option>
                <option value="22">22</option>
                <option value="23">23</option>
                <option value="24">24</option>
                <option value="25">25</option>
                <option value="26">26</option>
                <option value="27">27</option>
                <option value="27">28</option>
                <option value="29">29</option>
                <option value="30">30</option>
                <option value="31">31</option>
              </CustomSelect>

              <CustomSelect id="year" name="year" placeholder="Yıl">
                <option value="Yıl">Yıl</option>
                <option value="1990">1990</option>
                <option value="2000">2000</option>
                <option value="2010">2010</option>
                <option value="2020">2020</option>
                <option value="2030">2030</option>
              </CustomSelect>
            </DateSelecter>
          </DogumtarihiContainer>
          <WhiteButton onClick={ileriButtonClick}>İleri</WhiteButton>
        </Container>
      </Form>
    </Page>
  );
}

export default SignInForm;
