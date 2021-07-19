import React, { useState } from "react";
import { Link } from "react-router-dom";

import { Container, Header, LogoImg, Title, MenuContainer, MenuItem, ToogleMenu, ThemeToogleFooter } from "./styles";
import logoSvg from "../../assets/logo.svg";
import { MdDashboard, MdArrowDownward, MdArrowUpward, MdExitToApp, MdClose, MdMenu} from "react-icons/md";
import { useAuth } from "../../hooks/auth";
import { useTheme } from "../../hooks/theme";
import Toogle from "../Toogle";

const Aside: React.FC = () => {
    const { logout } = useAuth();
    const { toogleTheme, theme } = useTheme();

    const [menuIsOpen, setMenuIsOpen] = useState(false);
    const [darkTheme, setDarkTheme] = useState(() => theme.title === 'dark' ? true : false);

    const toogleMenu = () => {
        setMenuIsOpen(!menuIsOpen);
    }

    const handleChangeTheme = () => {
        setDarkTheme(!darkTheme);
        toogleTheme();
    }

    return (
        <Container isOpen={menuIsOpen}>
            <Header>
                <ToogleMenu onClick={toogleMenu}>
                    {menuIsOpen? <MdClose /> : <MdMenu />}
                </ToogleMenu>

                <LogoImg src={logoSvg} alt="Logo - My Wallet" />
                <Title>My Wallet</Title>
            </Header>

            <MenuContainer>
                <MenuItem>
                    <Link to="/">
                        <MdDashboard/> Dashboard
                    </Link>
                </MenuItem>
                <MenuItem>
                    <Link to="/list/income">
                        <MdArrowUpward/> Receitas
                    </Link>
                </MenuItem>
                <MenuItem>
                    <Link to="/list/exes">
                        <MdArrowDownward/> Despesas
                    </Link>
                </MenuItem>
                <MenuItem>
                    <button onClick={logout}>
                            <MdExitToApp/> Sair
                    </button>
                </MenuItem>
            </MenuContainer>
            <ThemeToogleFooter isOpen={menuIsOpen}>
                <Toogle
                    labelLeft="Light"
                    labelRight="Dark"
                    checked={darkTheme}
                    onChange={handleChangeTheme}
                />
            </ThemeToogleFooter>
        </Container>
    );
}

export default Aside;