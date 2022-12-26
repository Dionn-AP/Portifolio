import styled from "styled-components";

export const ContinerCard = styled.div`
    display: flex;
    flex-direction: column;
    background-color: #212121;
    border: 1px solid ${props => props.theme.border_color_main};
    height: auto;
    width: 35rem;
    padding: 2rem 2.3rem;
    cursor: pointer;
    transition: all 0.2s;

    :hover {
        transform: scale(1.03);
        transition: all 0.2s;
    }
`

export const IntoCard = styled.div`
    display: flex;
    flex-direction: column;
    background-color: #171717;
    border: 1px solid ${props => props.theme.border_color_main};
    height: 13rem;
    width: 100%;
    margin-bottom: 2.3rem;
`

export const CardProjectTitle = styled.h3`
    color: #F9F9F9;
    font-style: normal;
    font-weight: 500;
    font-size: 1.8rem;
    margin-bottom: 1.2rem;
`

export const CardProjectSubTitle = styled.h3`
    color: ${props => props.theme.color_text_secondary};
    font-style: normal;
    font-weight: 400;
    font-size: 1.4rem;
`