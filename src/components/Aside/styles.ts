import styled from "styled-components";

export const Container = styled.div`
    grid-area: AS;
    background-color: ${props => props.theme.colors.secondary};
    color: ${props => props.theme.colors.white};
    padding-left: 20px;
    border-right: 1px solid ${props => props.theme.colors.gray};
`;

export const Header = styled.header`
    display: flex;
    align-items: center;
    height: 70px;
`;

export const LogoImg = styled.img`
    width: 3rem;
    height: 3rem;
`;

export const Title = styled.h3`
    color: ${props => props.theme.colors.white};
    margin-left: 10px;
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
`;