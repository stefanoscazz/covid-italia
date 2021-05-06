import styled from "styled-components";

const Navbar = () => {
  return (
    <div>
      <NavBarContainer>
        <h1>CovidItalia</h1>
      </NavBarContainer>
    </div>
  );
};

export default Navbar;

const NavBarContainer = styled.div`
  background-color: #648dae;
  color: white;
  height: 80px;
  padding: 10px;
`;
