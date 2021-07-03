import styled from "styled-components";

interface ILegend {
    color: string;
}

export const Container = styled.div`
    width: 100%;
    
    display: flex;
    flex-direction: column;

    background-color: ${props => props.theme.colors.tertiary};
    color: ${props => props.theme.colors.white};

    padding: 30px 20px;
    margin: 10px 0;

    border-radius: 7px;
`;

export const Header = styled.header`
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;

    padding: 0 20px;
    margin-bottom: 20px;
    > h2 {
        font-size: 1rem;
    }
`;

export const ChartContainer = styled.div`
    width: 100%;
    height: 260px;
`;

export const LegendContainer = styled.ul`
    list-style: none;
    display: flex;
    margin-right: 10px;
`;

export const Legend = styled.li<ILegend>`
    display: flex;
    align-items: center;
    > div {
        width: 30px;
        height: 30px;
        background-color: ${props => props.color};
        border-radius: 7px;
        margin: 0 10px;
    }
`;