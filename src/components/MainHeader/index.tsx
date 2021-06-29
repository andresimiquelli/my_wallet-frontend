import React, { useMemo } from "react";

import { Container, Profile, Welcome, UserName } from "./styles";
import emojis from "../../Utils/Emojis";
import Toogle from "../Toogle";

const MainHeader: React.FC = () => {

    const emoji = useMemo(() => {
        const i = Math.floor(Math.random()*emojis.length);
        return emojis[i];
    }, []);
    return (
        <Container>
            <Toogle/>

            <Profile>
                <Welcome>Olá {emoji}</Welcome>
                <UserName>João André</UserName>
            </Profile>
        </Container>
    );
}

export default MainHeader;