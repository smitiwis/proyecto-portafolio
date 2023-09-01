import { useEffect, useState } from "react";
import { Container } from "react-bootstrap";
import { CardSkill } from "./CardSkill";

const Habilidades = () => {
  return (
    <>
      <div className="skills my-5">
        <CardSkill title="HTML" image="html5.png" />
        <CardSkill title="CSS" image="css3.png" />
        <CardSkill title="Sass" image="sass.png" />
        <CardSkill title="JavaScript" image="js.png" />
        <CardSkill title="TypesScript" image="ts.png" />
        <CardSkill title="Nodejs" image="node.png" />
      </div>

      <div className="skills my-5">
        <CardSkill title="React / Native" image="react1.png" />
        <CardSkill title="Angular" image="angular.png" />
        <CardSkill title="Ionic" image="ionic.png" />
      </div>

      <div className="skills my-5">
        <CardSkill title="Bootstrap" image="bootstrap.png" />
        <CardSkill title="Material MUI" image="material.png" />
        <CardSkill title="Antdesign" image="antdesign.png" />
      </div>

      <div className="skills my-5">
        <CardSkill title="Git" image="git.png" />
        <CardSkill title="Github" image="github1.png" />
        <CardSkill title="Bem" image="bem.png" />
        <CardSkill title="Wordpress" image="wordpress.png" />
      </div>
    </>
  );
};

export default Habilidades;
