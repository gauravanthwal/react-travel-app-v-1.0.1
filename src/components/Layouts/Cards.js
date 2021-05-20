import React from "react";
import CardItem from "./CardItem";
import "./Cards.css";

const Cards = () => {
  return (
    <div className="cards">
      <h1>Check out these EPIC Destination!</h1>
      <div className="cards__container">
        <div className="cards__wrapper">
          <ul className="cards__item">
            <CardItem
              src="https://raw.githubusercontent.com/briancodex/react-website-v1/starter/public/images/img-9.jpg"
              text="Explore the hidden waterfall deep inside amazon jungle"
              label="Adventure"
              path="/services"
            />
            <CardItem
              src="https://raw.githubusercontent.com/briancodex/react-website-v1/starter/public/images/img-2.jpg"
              text="Travel through the Island of Bali in a Private Cruise"
              label="Luxury"
              path="/services"
            />
          </ul>
          <ul className="cards__item">
            <CardItem
              src="https://raw.githubusercontent.com/briancodex/react-website-v1/starter/public/images/img-9.jpg"
              text="Explore the hidden waterfall deep inside amazon jungle"
              label="Adventure"
              path="/services"
            />
            <CardItem
              src="https://raw.githubusercontent.com/briancodex/react-website-v1/starter/public/images/img-2.jpg"
              text="Travel through the Island of Bali in a Private Cruise"
              label="Luxury"
              path="/services"
            />
            <CardItem
              src="https://raw.githubusercontent.com/briancodex/react-website-v1/starter/public/images/img-2.jpg"
              text="Travel through the Island of Bali in a Private Cruise"
              label="Luxury"
              path="/services"
            />
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Cards;
