import React from "react";
import { Col, Row } from "react-bootstrap";
import { CgCPlusPlus } from "react-icons/cg";
import {
  DiJavascript1,
  DiReact,
  DiBootstrap,
  DiLaravel
} from "react-icons/di";
import {
  SiRedis,
  SiFirebase,
  SiNextdotjs,
  SiSolidity,
  SiPostgresql,
} from "react-icons/si";
import { TbBrandGolang } from "react-icons/tb";

function Techstack() {
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
  <Col xs={4} md={2} className="tech-icons">
    <DiJavascript1 />
  </Col>
  <Col xs={4} md={2} className="tech-icons">
    <DiReact />
  </Col>
  <Col xs={4} md={2} className="tech-icons">
    <DiBootstrap />
  </Col>
  <Col xs={4} md={2} className="tech-icons">
    <DiLaravel />
  </Col>
</Row>

  );
}

export default Techstack;
