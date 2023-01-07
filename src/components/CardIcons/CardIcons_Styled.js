import styled from "styled-components";

export const CardsIcon = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
`

export const BoxIcon = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: #212121;
    margin-bottom: 1.8rem;
    height: 6rem;
    width: 6rem;
    border-radius: 50%;
    cursor: pointer;

    :hover {
       transform: scale(1.1);
       transition: all .2s;
    }
`

export const ImageIcon = styled.img`
    height: 3rem;
    width: 3rem;
`

export const TitleIcon = styled.h3`
    color: ${props => props.theme.color_text_primary};
    font-style: normal;
    font-weight: 700;
    font-size: 1.8rem;
    margin-bottom: .7rem;
`

export const SubTitleIcon = styled.h4`
    color: ${props => props.theme.color_text_secondary};
    font-style: normal;
    font-weight: 400;
    font-size: 1.6rem;
`