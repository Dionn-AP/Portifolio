import styled from "styled-components";

export const ContainerButtonScroll = styled.div`
    position: absolute;
    bottom: 7rem;
    right: 4rem;
    height: auto;
    width: 5rem;
    background-color: transparent;
    cursor: pointer;

    @media only screen and (max-width: 540px) {
        right: 2rem;
    }
`

export const ImageScroll = styled.img`
    height: 5rem;
    width: 5rem;
`