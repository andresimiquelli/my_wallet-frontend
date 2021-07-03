import React from "react";

import {Container, Header} from "./styles";

interface IMessageBox {
    title: string;
    description: string;
    footerText: string;
    icon: string;
}

const MessageBox: React.FC<IMessageBox> = (props) => {
    return (
        <Container>
            <Header>
                <h1>{props.title}<img src={props.icon} alt="Message" /></h1>
                <p>{props.description}</p>
            </Header>
            <small>{props.footerText}</small>
        </Container>
    )
}

export default MessageBox;