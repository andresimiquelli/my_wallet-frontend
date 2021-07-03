import styled from "styled-components";

export const Container = styled.div`
    width: 48%;
    height: 260px;
    
    background-color: ${props => props.theme.colors.tertiary};
    color: ${props => props.theme.colors.white};

    border-radius: 7px;
    margin: 10px 0;
    padding: 30px 20px;

    display: flex;
    flex-direction: column;
    justify-content: space-between;
`;

export const Header = styled.header`
    > h1 {
        > img {
            width: 35px;
            margin: 0 10px;
        }
    }

    > p {
        font-size: 1rem;
    }
`;