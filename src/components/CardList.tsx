import React from "react";
import { Robot } from "../redux/actions/requestActions";
import Card from "./Card";

interface CardListProps {
  robots: Robot[];
}

const CardList: React.FC<CardListProps> = ({ robots }) => {
  return (
    <div>
      {robots.map((user, i) => {
        return (
          <Card
            key={i}
            id={robots[i].id}
            name={robots[i].name}
            email={robots[i].email}
          />
        );
      })}
    </div>
  );
};

export default CardList;
