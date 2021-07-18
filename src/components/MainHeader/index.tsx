import React, { useMemo, useState } from "react";

import { Container, Profile, Welcome, UserName } from "./styles";
import emojis from "../../utils/Emojis";
import Toogle from "../Toogle";

import { useTheme } from '../../hooks/theme';

const MainHeader: React.FC = () => {

    const { toogleTheme, theme } = useTheme();
    const [darkTheme, setDarkTheme ] = useState( () => theme.title === 'dark'? true : false );

    const emoji = useMemo(() => {
        const i = Math.floor(Math.random()*emojis.length);
        return emojis[i];
    }, []);

    const handleChangeTheme = () => {
        setDarkTheme(!darkTheme);
        toogleTheme();
    }

    return (
        <Container>
            <Toogle
                labelLeft="Light"
                labelRight="Dark"
                checked={darkTheme}
                onChange={handleChangeTheme}
            />

            <Profile>
                <Welcome>Olá {emoji}</Welcome>
                <UserName>João André</UserName>
            </Profile>
        </Container>
    );
}

export default MainHeader;