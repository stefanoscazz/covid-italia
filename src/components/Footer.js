import styled from "styled-components";
import GitHub from "@material-ui/icons/GitHub";
import LinkedIn from "@material-ui/icons/LinkedIn";

const Footer = () => {
  return (
    <FooterContainer>
      <div style={{ margin: "10px" }}>
        <p> Realizzato da Stefano Scazzi seguimi su </p>
      </div>
      <Social>
        <a href="https://www.linkedin.com/in/stefano-scazzi-7a9185156/">
          {" "}
          <LinkedIn style={{ fontSize: "40px", color: "white" }} />
        </a>
        <a href="https://github.com/stefanoscazz">
          <GitHub
            style={{ fontSize: "35px", marginRight: "6px", color: "white" }}
          />
        </a>
      </Social>
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
  flex-direction: column;
`;
const Social = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  a {
    margin: 7px;
  }
`;
