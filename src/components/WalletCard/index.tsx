import React, { useMemo } from "react";
import CountUp from "react-countup";

import { Container } from "./styles";

import dollasSignImg from "../../assets/dollar.svg";
import arrowUpImg from "../../assets/arrow-up.svg";
import arrowDownImg from "../../assets/arrow-down.svg";

interface IWalletCard {
    title: string;
    amount: number;
    footerLabel: string;
    icon: 'dollarSign' | 'arrowUp' | 'arrowDown';
    color: string; 
}

const WalletCard: React.FC<IWalletCard> = (props) => {

    const selectedIcon = useMemo(() => {
        switch (props.icon) {
            case "dollarSign":
                return dollasSignImg;
            case "arrowUp":
                return arrowUpImg;
            case "arrowDown":
                return arrowDownImg;  
            default:
                return dollasSignImg;
        }
    },[props.icon])

    return (
        <Container color={props.color}>
            <span>{props.title}</span>
            <h1>
                <CountUp 
                    end={props.amount}
                    prefix="R$ "
                    separator="."
                    decimal=","
                    decimals={2}
                    duration={.5}
                />
            </h1>
            <small>{props.footerLabel}</small>
            <img src={selectedIcon} alt={props.title}/>
        </Container>
    )
}

export default WalletCard;