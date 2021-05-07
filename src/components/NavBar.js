import styled from "styled-components";

const Navbar = () => {
  return (
    <div>
      <NavBarContainer>
        <h1>
          Covid<span style={{ color: "#2c4150" }}>Italia</span>
        </h1>
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
