import styled from "styled-components";
import SideBar from "../components/SideBar";

const Page = styled.div`
  display: flex;
  flex-direction: row;
  width: 100%;
  height: 100vh;
`;
const LeftSide = styled.div`
  width: 30%;
  background-color: gray;
`;
const MiddleSection = styled.div`
  width: 40%;
  background-color: red;
`;
const RightSide = styled.div`
  width: 30%;
  background-color: green;
`;

function Home() {
  return (
    <Page>
      <LeftSide>
        <SideBar></SideBar>
      </LeftSide>
      <MiddleSection></MiddleSection>
      <RightSide></RightSide>
    </Page>
  );
}

export default Home;
