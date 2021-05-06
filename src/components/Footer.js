import styled from "styled-components";
import GitHub from "@material-ui/icons/GitHub";
import LinkedIn from "@material-ui/icons/LinkedIn";

const Footer = () => {
  return (
    <FooterContainer>
      <div style={{ margin: "10px" }}>
        <p> CONTATTAMI </p>
      </div>
      <GitHub style={{ fontSize: "35px" }} />
      <LinkedIn style={{ fontSize: "40px" }} />
    </FooterContainer>
  );
};

export default Footer;

const FooterContainer = styled.div`
  background-color: #648dae;
  color: white;
  height: 100px;
  display: flex;
  align-items: center;
  justify-content: center;
`;
