/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable no-nested-ternary */
/* eslint-disable react/prop-types */
import { useEffect, useState } from "react";

function Card({
  mySrc,
  visible,
  handleSelection,
  selectCard,
  handleScore,
  reload,
}) {
  const [isVisible, setIsVisible] = useState(visible);
  const [goodChoice, setGoodChoice] = useState([]);

  useEffect(() => {
    if (selectCard && selectCard.length === 2) {
      handleScore();
      if (selectCard[0] === selectCard[1]) {
        setGoodChoice([...goodChoice, selectCard[0]]);
        handleSelection();
      } else {
        setTimeout(() => {
          handleSelection();
          setIsVisible(false);
        }, 1000);
      }
    }
  }, [selectCard]);

  useEffect(() => {
    setIsVisible(visible);
    setGoodChoice([]);
  }, [reload]);

  const handleVisible = () => {
    setIsVisible(true);
    handleSelection(mySrc);
  };

  return (
    <div className="card" onClick={handleVisible}>
      <img
        src={
          goodChoice.find((choice) => mySrc === choice)
            ? mySrc
            : isVisible
            ? mySrc
            : "../src/assets/public/saucisse.png"
        }
        alt="Card"
        id="cardback"
      />
    </div>
  );
}

export default Card;
