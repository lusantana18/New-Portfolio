import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Olá, eu sou <span className="purple">Lucas Santana de Meireles </span>
            sou de <span className="purple">São paulo, SP </span>
            <br /> Estou cusrsando o terceiro semestre da faculdade de <span className="purple">análise e desenvolvimento de sistemas</span>
            <br />
            Minha renda principal ainda não vem da área, mas estou focado em torná-lo central em minha carreira..
            <br />
            <br />
          </p>

          <p style={{ color: "rgb(155 126 172)" }}>
            "Programar é pensar, não digitar."{" "}
          </p>
          <footer className="blockquote-footer">Richard Feynman</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
