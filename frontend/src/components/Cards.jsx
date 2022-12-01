/* eslint-disable react/prop-types */
import { useEffect, useState } from "react";
import Card from "./Card";
import sausageArray from "../utils/sausageArray";

function Cards({ handleScore, reload }) {
  const [allCardDisplay, setAllCardDisplay] = useState();
  const [selectionnedCard, setSelectionnedCard] = useState();

  const sausageMaker = () => {
    const allCard = [...sausageArray];
    const allCardsDisplay = [];
    for (let i = 0; i < 18; i += 1) {
      const random = Math.floor(Math.random() * allCard.length) + 0;
      allCardsDisplay.push(allCard[random]);
      allCard.splice(random, 1);
    }
    return allCardsDisplay;
  };

  useEffect(() => {
    const allCardsArray = sausageMaker();
    setAllCardDisplay(allCardsArray);
  }, [reload]);

  const handleSelection = (myArray) => {
    if (!myArray) {
      setSelectionnedCard();
    } else if (!selectionnedCard) {
      setSelectionnedCard([myArray]);
    } else if (selectionnedCard.length < 2) {
      setSelectionnedCard([...selectionnedCard, myArray]);
    } else {
      setSelectionnedCard();
    }
  };

  return (
    <div className="cards">
      {allCardDisplay &&
        allCardDisplay.map((card) => {
          return (
            <Card
              mySrc={card.source}
              visible={card.state}
              handleSelection={handleSelection}
              selectCard={selectionnedCard}
              handleScore={handleScore}
              reload={reload}
            />
          );
        })}
    </div>
  );
}

export default Cards;
