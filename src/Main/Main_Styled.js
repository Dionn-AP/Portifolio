import styled from 'styled-components';

export const ContainerMain = styled.div`
    display: flex;
    position: relative;
    flex-direction: column;
    align-items: center;
    justify-content: fle;
    min-height: auto;
    max-width: 100vw;
    background-color: ${props => props.theme.background_main};
` 

export const ContainerContentInto = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    min-height: auto;
    padding: 0 14rem;
    width: 100%;
` 

export const Header = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    width: 100%;
    margin-bottom: 10rem;
    padding: 4rem 0;
`

export const TextLeftHeader = styled.p`
    color: ${props => props.theme.color_text_primary};
    font-style: normal;
    font-weight: 700;
    font-size: 2.6rem;
`

export const UnotherListLinkHeader = styled.ul`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    width: 40%;
`

export const ListLinkHeader = styled.li`
    font-style: normal;
    font-weight: 400;
    font-size: 1.8rem;
    list-style: none;
`

export const LinksHeader = styled.a`
    color: ${props => props.theme.color_text_primary};
    cursor: pointer;
    text-decoration: none;

    :hover {
        opacity: 0.7;
        transition: all 0.3s;
    }
`

export const ContainerTop = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    width: 100%;
    margin-bottom: 16.8rem;
`

export const ContainerTopContentLeft = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: center;
    height: auto;
    width: 27%;
`

export const ContainerTopContentLeftText = styled.h2`
    color: ${props => props.theme.color_text_primary};
    font-style: normal;
    font-weight: 700;
    font-size: 3.2rem;
    line-height: 4.6rem;
    margin-bottom: 1.8rem;
`

export const ContainerTopContentLeftTextSubTitle = styled.h4`
    color: ${props => props.theme.color_text_secondary};
    font-style: normal;
    font-weight: 500;
    font-size: 1.8rem;
    margin-bottom: 3.2rem;
`

export const ContainerTopLeftButtons = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    height: auto;
    width: 100%;
`

export const ContainerTopLeftButton = styled.button`
    color: ${props => props.colorButton};
    background-color: ${props => props.bgColorButton};
    border: 1px solid ${props => props.borderColor};
    font-style: normal;
    font-weight: 500;
    font-size: 1.4rem;
    padding: 1.2rem 2.7rem;
    cursor: pointer;
    
    :hover {
        animation: btn .3s;
        @keyframes btn {
            0% {
                transform: scale(1);
            }
            50% {
                transform: scale(1.02);
            }
            100% {
                transform: scale(1);
            } 
        }
    }
`

export const ContainerTopContentImage = styled.div`
    background-image: ${props => `url(${props.srcImage})`};
    background-repeat: no-repeat;
    background-position: center;
    background-size: 100%;
    height: 35rem;
    width: 35rem;
`

export const ContainerAboutMe = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    height: auto;
    width: 100%;
    margin-bottom: 8rem;
`

export const ContainerAboutMeTitle = styled.h2`
    color: ${props => props.theme.color_text_primary};
    font-style: normal;
    font-weight: 700;
    font-size: 3.2rem;
    margin-bottom: 3rem;
`

export const ContainerAboutMeSubTitle = styled.h2`
    color: ${props => props.theme.color_text_secondary};
    text-align: center;
    width: 60%;
    font-style: normal;
    font-weight: 400;
    font-size: 1.8rem;
    line-height: 3rem;
    margin-bottom: 3rem;
`

export const ContainerIcons = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    height: auto;
    width: 100%;
    gap: 10rem;
    margin-bottom: 12.5rem;
`

export const ContainerProjects = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    height: auto;
    width: 100%;
    margin-bottom: 12.5rem;
`

export const WrapperProjects = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    flex-wrap: wrap;
    width: 100%;
    gap: 4.5rem;
`

export const ContainerCardProject = styled.div`
    display: flex;
    flex-direction: column;
    height: auto;
    width: 32rem;
`

export const ContainerProjectsText = styled.h2`
    color: ${props => props.theme.color_text_primary};
    font-style: normal;
    font-weight: 700;
    font-size: 3.2rem;
    margin-bottom: 3rem;
`

export const ContainerServices = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    height: auto;
    width: 100%;
    margin-bottom: 12.5rem;
`

export const WrapperServices = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    flex-wrap: wrap;
    width: 100%;
    gap: 4.5rem;
`

export const CardServiceText = styled.h2`
    color: ${props => props.theme.color_text_primary};
    font-style: normal;
    font-weight: 700;
    font-size: 3.2rem;
    line-height: 4rem;
    margin-bottom: 3rem;
`

export const ContainerSkill = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    height: auto;
    width: 100%;
    margin-bottom: 18rem;
`

export const WrapperSkill = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    flex-wrap: wrap;
    width: 100%;
    gap: 4.4rem;
`

export const CardSkillText = styled.h2`
    color: ${props => props.theme.color_text_primary};
    font-style: normal;
    font-weight: 700;
    font-size: 3.2rem;
    line-height: 4rem;
    margin-bottom: 3rem;
`

export const TougleButonTheme = styled.div`
    display: flex;
    align-items: center;
    position: absolute;
    top: 1rem;
    right: 1.2rem;
    flex-direction: row;
    justify-content: center;
    border: 1.7px solid #828282;
    border-radius: 1.2rem;
    height: 2.5rem;
    width: 2.6rem;
    cursor: pointer;
    
`

export const IconToggleTheme = styled.img`
    height: 1.5rem;
    width: 1.5rem;
`

export const BoxMessage = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    position: absolute;
    top: 2.8rem;
    right: -1rem;
    background-color: #F9F9F9;
    border-radius: .5rem;
    padding: .25rem;
    width: 9rem;
`

export const BoxMessageText = styled.p`
    text-align: center;
    color: #171717;
    font-style: normal;
    font-weight: 400;
    font-size: 1rem;


    /* color: ${props => props.theme.color_text_primary}; */
`

// export const ButtonTheme = styled.button`
//     background-color: ${props => props.theme.color_text_primary};
//     height: 1.4rem;
//     width: 1.4rem;
//     border-radius: 50%;
//     cursor: pointer;
//     transition-duration: all .3s;
// `
