import React from "react";
import { Link } from "react-router-dom";

import { Container, Header, LogoImg, Title, MenuContainer, MenuItem } from "./styles";
import logoSvg from "../../assets/logo.svg";
import { MdDashboard, MdArrowDownward, MdArrowUpward, MdExitToApp} from "react-icons/md";
import { useAuth } from "../../hooks/auth";

const Aside: React.FC = () => {
    const { logout } = useAuth();

    return (
        <Container>
            <Header>
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
        </Container>
    );
}

export default Aside;