import React from "react";

import { Container, ToogleLabel, ToogleSelector } from "./styles";


interface IToogleProps {
    labelLeft: string;
    labelRight: string;
    checked: boolean;
    onChange(): void;
}

const Toogle: React.FC<IToogleProps> = ( props ) => (
    <Container>
        <ToogleLabel>{props.labelLeft}</ToogleLabel>
        <ToogleSelector 
            checked={props.checked}
            uncheckedIcon={false}
            checkedIcon={false}
            onChange={props.onChange}
        />
        <ToogleLabel>{props.labelRight}</ToogleLabel>
    </Container>
);

export default Toogle;