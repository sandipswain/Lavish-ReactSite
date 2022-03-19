import React from "react";
import { FaFire } from "react-icons/fa";
import { Link } from "react-router-dom";
import { Button } from "./Button";
import { BsXDiamondFill } from "react-icons/bs";
import { GiCrystalize } from "react-icons/gi";
import { IconContext } from "react-icons/lib";
import "./Pricing.css";

const priceConfig = [
  {
    link: "sign-up",
    icon: { iconName: FaFire },
    header: "Starter",
    price: "$8.99",
    estimate: "per month",
    transaction: "100 Transaction",
    cashback: "2% Cashback",
    limit: "$10,000 Limit",
    buttonColor: "primary",
  },
  {
    link: "sign-up",
    icon: { iconName: BsXDiamondFill },
    header: "Gold",
    price: "$28.99",
    estimate: "per month",
    transaction: "1000 Transaction",
    cashback: "2.5% Cashback",
    limit: "$100,000 Limit",
    buttonColor: "blue",
  },
  {
    link: "sign-up",
    icon: { iconName: GiCrystalize },
    header: "Diamond",
    price: "$98.99",
    estimate: "per month",
    transaction: "Unlimited Transaction",
    cashback: "5% Cashback",
    limit: "Unlimited Spending",
    buttonColor: "primary",
  },
];
const Pricing = () => {
  return (
    <IconContext.Provider value={{ color: "#fff", size: 64 }}>
      <div className="pricing__section">
        <div className="pricing__wrapper">
          <h1 className="pricing__header">Pricing</h1>
          <div className="pricing__container">
            {priceConfig.map(
              ({
                link,
                header,
                icon,
                price,
                estimate,
                transaction,
                cashback,
                limit,
                buttonColor,
              }) => {
                return (
                  <Link to={`/${link}`} className="pricing__container-card">
                    <div className="pricing__container-cardInfo">
                      <div className="icon">{<icon.iconName />}</div>
                      <h3>{header}</h3>
                      <h4>{price}</h4>
                      <p>{estimate}</p>
                      <ul className="pricing__container-features">
                        <li>{transaction}</li>
                        <li>{cashback}</li>
                        <li>{limit}</li>
                      </ul>
                      <Button buttonSize="btn--wide" buttonColor={buttonColor}>
                        Choose Plan
                      </Button>
                    </div>
                  </Link>
                );
              }
            )}
          </div>
        </div>
      </div>
    </IconContext.Provider>
  );
};

export default Pricing;
