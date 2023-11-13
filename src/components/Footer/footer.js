import React from "react";
import { VscGithubAlt } from "react-icons/vsc";
import { AiOutlineLinkedin } from "react-icons/ai";

function Footer() {
  return (
    <footer style={{ position: "fixed", bottom: "0", width: "100%", textAlign: "center", background: "orange", color: "white", md: "12" }}>
        
      <ul style={{ listStyle: "none", padding: "0", display: "flex", justifyContent: "center" }}>
        <li style={{ marginTop: "10px" }}>
          <a href="https://github.com/amattock">
            <VscGithubAlt style={{ fontSize: "2em", color: "white" }} />
          </a>
        </li>
        <li style={{ marginTop: "10px" }}>
          <a href="https://www.linkedin.com/in/alexandermattock/">
            <AiOutlineLinkedin style={{ fontSize: "2em", color: "white" }} />
          </a>
        </li>
      </ul>
    
    </footer>
  );
}

export default Footer;

