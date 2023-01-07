import styled from "styled-components";

export const CardContentService = styled.div`
    display: flex;
    position: relative;
    flex-direction: column;
    align-items: flex-start;
    justify-content: center;
    padding: 2.5rem 3rem;
    background-color: #212121;
    border: 1px solid ${props => props.theme.border_color_main};
    border-bottom: 2.5px solid #00DF5E;
    height: auto;
    width: 35rem;
    transition: all 0.2s;
    box-sizing: border-box;
    :hover {
        transform: scale(1.03);
        transition: all 0.2s;
    }
`

export const ImageCard = styled.img`
    height: 5rem;
    width: 5rem;
    margin-bottom: 5.2rem;
`

export const CardServiceTitle = styled.h2`
    color: ${props => props.theme.color_text_secondary};
    font-style: normal;
    font-weight: 500;
    font-size: 2.4rem;
    line-height: 4rem;
`