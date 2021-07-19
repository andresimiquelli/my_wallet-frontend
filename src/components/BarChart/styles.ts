import styled from "styled-components";

interface ILegend {
    color: string;
}

export const Container = styled.div`
    width: 48%;
    min-height: 260px;

    margin: 10px 0;
    background-color: ${props => props.theme.colors.tertiary};
    color: ${props => props.theme.colors.white};

    border-radius: 7px;

    display: flex;

    @media(max-width: 768px){
        width: 100%;
        display: flex;
        flex-direction: column;
    }
`;

export const SideLeft = styled.div`
    padding: 30px 20px;
    > h2 {
        margin-bottom: 10px;
        font-size: 1rem;
    }
`;

export const LegendContainer = styled.ul`
    list-style: none;
    display: flex;
    flex-direction: column;

    @media(max-width: 768px){
        flex-direction: row;
    }
`;

export const Legend = styled.li<ILegend>`
    display: flex;
    align-items: center;
    padding: 10px 0;

    > div {
        width: 45px;
        height: 40px;
        background-color: ${props => props.color};
        border-radius: 7px;
        text-align: center;
        font-size: 1rem;
        font-weight: bold;
        line-height: 40px;
    }

    > span {
        padding-left: 10px;
    }

    @media(max-width: 768px){
        > div {
            font-size: .8rem;
        }

        > span {
            font-size: .7rem;
        }

        margin-right: 10px;
    }
`;

export const SideRight = styled.div`
    flex: 1;
    height: 100%;
    padding: 30px 20px;

    @media(max-width: 768px){
        width: 100%;
        height: 140px;
    }
`; 