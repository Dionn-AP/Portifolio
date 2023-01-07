import styled from "styled-components";

export const CardContentSkill = styled.div`
    display: flex;
    position: relative;
    flex-direction: column;
    align-items: flex-start;
    justify-content: center;
    padding:  3.5rem;
    background-color: #212121;
    border: 1px solid ${props => props.theme.border_color_main};
    height: auto;
    width: auto;
    transition: all 0.2s;

    :hover {
        transform: scale(1.03);
        transition: all 0.2s;
    }
`

export const ImageCard = styled.img`
    height: 6rem;
    width: 6rem;
`
