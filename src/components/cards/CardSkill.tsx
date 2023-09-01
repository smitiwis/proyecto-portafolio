import React, { FC } from "react";

interface Props {
  image: string;
  title: string
}

const PUBLIC_URL = `${process.env.PUBLIC_URL}/images`;

export const CardSkill: FC<Props> = ({ image, title }) => {
  return (
    <div className="card-skill-wrapper">
      <h1 className="card-skill-title">{title}</h1>
      <div className="card-skill">
        <div className="card-skill__content">
          <div className="skill-front">
            <div className="skill-front__content">
              <img src={`${PUBLIC_URL}/${image}`} alt={image} />
            </div>
          </div>
          <div className="skill-back">
            <div className="skill-back__content">
              <img src={`${PUBLIC_URL}/${image}`} alt={image} />
            </div>
          </div>
        </div>
        <span className="card-skill__shadow"></span>
      </div>
    </div>
  );
};
