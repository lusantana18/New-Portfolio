import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import leaf from "../../Assets/Projects/leaf.png";
import emotion from "../../Assets/Projects/emotion.png";
import editor from "../../Assets/Projects/codeEditor.png";
import chatify from "../../Assets/Projects/andraseg.jpg";
import manutencao from "../../Assets/Projects/manutencao.jpg";
import suicide from "../../Assets/Projects/suicide.png";
import bitsOfCode from "../../Assets/Projects/blog.png";

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          Meus projetos <strong className="purple">Recentes </strong>
        </h1>
        <p style={{ color: "white" }}>
          Aqui estão alguns projetos em que trabalhei recentemente.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={chatify}
              isBlog={false}
              title="Andraseg"
              description="Desenvolvi a parte de front-end do site da andraseg segurança do trabalho, proporcionando uma experiência de usuário excepcional, design responsivo e recursos de acompanhamento em tempo real. Me orgulho de ter contribuído para o sucesso deste projeto inovador."
              demoLink="https://www.andraseg.com/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={manutencao}
              isBlog={false}
              title="em manutenção!!"
              description="Lorem Ipsum is simply dummy text of the printing and typesetting industry.
               Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an 
               unknown printer took a galley of type and scrambled it to make a type specimen book."
              demoLink="#"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={manutencao}
              isBlog={false}
              title="em manutenção!!"
              description="Lorem Ipsum is simply dummy text of the printing and typesetting industry.
               Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an 
               unknown printer took a galley of type and scrambled it to make a type specimen book."
              demoLink="#"
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
