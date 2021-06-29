import React from "react";

import { Container, Header, LogoImg, Title, MenuContainer, MenuItem } from "./styles";
import logoSvg from "../../assets/logo.svg";
import { MdDashboard, MdArrowDownward, MdArrowUpward, MdExitToApp} from "react-icons/md";

const Aside: React.FC = () => {
    return (
        <Container>
            <Header>
                <LogoImg src={logoSvg} alt="Logo - My Wallet" />
                <Title>My Wallet</Title>
            </Header>

            <MenuContainer>
                <MenuItem href="#">
                    <MdDashboard/> Dashboard
                </MenuItem>
                <MenuItem href="#">
                    <MdArrowUpward/> Receitas
                </MenuItem>
                <MenuItem href="#">
                    <MdArrowDownward/> Despesas
                </MenuItem>
                <MenuItem href="#">
                    <MdExitToApp/> Sair
                </MenuItem>
            </MenuContainer>
        </Container>
    );
}

export default Aside;