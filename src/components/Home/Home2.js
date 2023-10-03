import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import myImg from "../../Assets/avatar.svg";
import Tilt from "react-parallax-tilt";
import {
  AiFillGithub,
  AiOutlineTwitter,
  AiFillInstagram,
} from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";

function Home2() {
  return (
    <Container fluid className="home-about-section" id="about">
      <Container>
        <Row>
          <Col md={8} className="home-about-description">
            <h1 style={{ fontSize: "2.6em" }}>
              Sobre <span className="purple"> Mim </span> 
            </h1>
            <p className="home-about-body">
            Olá, sou Lucas Santana de Meireles, um entusiasta do desenvolvimento front-end apaixonado por
             criar experiências digitais cativantes. Minhas habilidades abrangem projetos responsivos usando
              HTML5, CSS3, Bootstrap, Javascript, React.js e Laravel. Tenho uma sólida formação, com cursos relevantes pela Udemy
               e Alura, focados em acessibilidade web, design responsivo e chamativos. Participei de projetos
                marcantes, inclusive na construção completa de um site desde o início, usando HTML, CSS, Javascript e React.js.
              <br />
              <br />Minha abordagem valoriza o design responsivo para proporcionar a melhor experiência possível em todos os dispositivos. Trabalhei em equipes colaborativas, focando no desenvolvimento front-end enquanto colegas cuidavam do back-end, mostrando a importância da comunicação alinhada. Enfrento desafios técnicos com determinação, buscando soluções em plataformas como Alura, Udemy, Google e também recorrendo a IA quando necessário. Sou ávido por tendências e novidades no desenvolvimento front-end, sempre atualizado para aplicar as técnicas mais recentes em meus projetos. Embora o desenvolvimento front-end não seja minha principal fonte de renda no momento, estou focado em torná-lo central em minha carreira em breve. Estou ansioso para compartilhar mais sobre minha jornada no mundo do desenvolvimento front-end.
            </p>
          </Col>
          <Col md={4} className="myAvtar">
            <Tilt>
              <img src={myImg} className="img-fluid" alt="avatar" />
            </Tilt>
          </Col>
        </Row>
        <Row>
          <Col md={12} className="home-about-social">
            <h1>Me encontre</h1>
            <p>
              Sinta-se à vontade  <span className="purple">para se conectar comigo </span>
            </p>
            <ul className="home-about-social-links">
              <li className="social-icons">
                <a
                  href="https://github.com/lusantana18"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <AiFillGithub />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://www.linkedin.com/in/lucas-santana-023905246/"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <FaLinkedinIn />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://instagram.com/ls_meirelles?igshid=NGVhN2U2NjQ0Yg=="
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour home-social-icons"
                >
                  <AiFillInstagram />
                </a>
              </li>
            </ul>
          </Col>
        </Row>
      </Container>
    </Container>
  );
}
export default Home2;
