import styled from "styled-components";

export const Container = styled.div`
    height: 100vh;
    display: flex;
    flex-direction: column;
    flex: 1;
    justify-content: center;
    align-items: center;
    background-color: ${props => props.theme.colors.primary};
`;

export const Logo = styled.div`
    display: flex;
    align-items: center;
    margin-bottom: 30px;
    > h3 {
        color: ${props => props.theme.colors.white};
        margin-left: 7px;
    }

    > img {
        width: 40px;
    }
`;

export const Form = styled.form`
    width: 300px;
    height: 300px;
    padding: 30px;
    border-radius: 10px;
    background-color: ${props => props.theme.colors.tertiary};
`;

export const FormHeader = styled.h3`

    color: ${props => props.theme.colors.white};

    &::after {
        content: '';
            border-bottom: 7px solid ${props => props.theme.colors.warning};
            display: block;
            width: 55px;
    }
`;

export const FormBody = styled.div`
    margin-top: 40px
`;