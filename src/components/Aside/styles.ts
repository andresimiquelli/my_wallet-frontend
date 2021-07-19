import styled, { css } from "styled-components";

interface IContainerProps {
    isOpen: boolean;
}

interface IThemeFooterProps {
    isOpen: boolean;
}

export const Container = styled.div<IContainerProps>`
    grid-area: AS;
    background-color: ${props => props.theme.colors.secondary};
    color: ${props => props.theme.colors.white};
    padding-left: 20px;
    border-right: 1px solid ${props => props.theme.colors.gray};

    position: relative;

    @media(max-width: 600px){
        position: fixed;
        z-index: 2;

        height: ${props => props.isOpen? '100vh' : '70px'};
        overflow: hidden;
        width: 200px;

        ${props => !props.isOpen && css`
            border: none;
            border-bottom: 1px solid ${props => props.theme.colors.gray};
        `};
    }
`;

export const Header = styled.header`
    display: flex;
    align-items: center;
    height: 70px;
`;

export const LogoImg = styled.img`
    width: 3rem;
    height: 3rem;

    @media(max-width: 600px){
        display: none;
    }
`;

export const Title = styled.h3`
    color: ${props => props.theme.colors.white};
    margin-left: 10px;

    @media(max-width: 600px){
        display: none;
    }
`;

export const MenuContainer = styled.ul`
    display: flex;
    flex-direction: column;
    margin-top: 50px;
`;

export const MenuItem = styled.li`
    list-style: none;
    color: ${props => props.theme.colors.info};
    margin: 7px 0%;

    > a {
        color: ${props => props.theme.colors.info};
        text-decoration: none;

        transition: opacity .3s;

        &:hover{
            opacity: .6;
        }

        display: flex;
        align-items: center;

        > svg{
            font-size: 1.5rem;
            margin-right: 5px;
        }
    }

    > button {
        font-size: 1rem;
        color: ${props => props.theme.colors.info};
        text-decoration: none;

        background: none;

        transition: opacity .3s;

        &:hover{
            opacity: .6;
        }

        display: flex;
        align-items: center;

        > svg{
            font-size: 1.5rem;
            margin-right: 5px;
        }
    }

    @media(max-width: 768px){
        > button {
            font-size: 1.3rem;
        }

        > a {
            font-size: 1.3rem;
        }
    }
`;

export const ToogleMenu = styled.button`
    width: 40px;
    height: 40px;
    background-color: ${props => props.theme.colors.warning};
    color: ${props => props.theme.colors.white};
    font-size: 1.5rem;
    border-radius: 7px;
    display: flex;
    align-items: center;
    justify-content: center;

    @media(min-width: 601px){
        display: none;
    }
`;

export const ThemeToogleFooter = styled.footer<IThemeFooterProps>`
    display: none;
    position: absolute;
    bottom: 30px;

    @media(max-width: 600px){
        display: ${props => props.isOpen ? 'flex' : 'none'};
    }
`;