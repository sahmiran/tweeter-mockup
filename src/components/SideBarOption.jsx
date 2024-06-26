import styled from "styled-components";

const MenuItem = styled.div`
  width: 100%;
  gap: 1rem;
  display: flex;
  flex-direction: row;
  align-items: center;
`;
const Logo = styled.div``;
const MenuName = styled.div``;
function SideBarOption() {
  return (
    <MenuItem>
      <Logo>Logo</Logo>
      <MenuName>İsim</MenuName>
    </MenuItem>
  );
}

export default SideBarOption;
