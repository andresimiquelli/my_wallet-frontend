import styled from "styled-components";

interface IContainerProps{
    color: string;
}

export const Container = styled.div<IContainerProps>`
    width: 32%;
    height: 150px;
    margin: 10px 0;
    color: ${props => props.theme.colors.white};
    background-color: ${props => props.color};

    border-radius: 7px;
    padding: 10px 20px;

    position: relative;

    overflow: hidden;

    > img {
        height: 110%;
        position: absolute;
        top: -10px;
        right: -20px;
        opacity: .3;
    }

    > span {
        font-size: 1rem;
        font-weight: 500;
    }

    > h1 {
        font-size: 2rem;
    }

    > small {
        font-size: 0.8rem;
        position: absolute;
        bottom: 10px;
    }

    @media(max-width: 770px){
        > span {
            font-size: .9rem;
        }

        > h1 {
            font-size: 1rem;

            > strong {
                display: inline-block;
                width: 100%;
                font-size: .6rem;
            }
        }       

        > small {
            font-size: 0.6rem;
        }
    }

    @media(max-width: 411px){
        width: 100%;

        > span {
            font-size: 1rem;
        }

        > h1 {
            font-size: 2rem;

            > strong {
                display: inline;
                font-size: 1.8rem;
            }
        }       

        > small {
            font-size: 0.8rem;
        }
    }
`;