import styled from "styled-components";

const Navbar = () => {
  return (
    <div>
      <NavBarContainer>
        <h1>
          <span style={{ color: "green" }}>Covid</span>Ita
          <span style={{ color: "red" }}>lia</span>
        </h1>
      </NavBarContainer>
    </div>
  );
};

export default Navbar;

const NavBarContainer = styled.div`
  background-color: #648dae;
  color: white;
  height: 100px;
  padding: 10px;
  display: flex;
  align-items: center;
`;
