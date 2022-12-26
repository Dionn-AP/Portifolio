import { useState } from 'react'
import { ThemeProvider } from 'styled-components';
import { themes } from '../global/colors.js';
import { Link, animateScroll as scroll } from "react-scroll";

import {
  ContainerMain,
  TextLeftHeader,
  Header,
  UnotherListLinkHeader,
  ListLinkHeader,
  LinksHeader,
  ContainerContentInto,
  ContainerTop,
  ContainerTopContentLeft,
  ContainerTopContentLeftText,
  ContainerTopContentLeftTextSubTitle,
  ContainerTopLeftButtons,
  ContainerTopLeftButton,
  ContainerTopContentImage,
  ContainerAboutMe,
  ContainerAboutMeTitle,
  ContainerAboutMeSubTitle,
  ContainerIcons,
  ContainerProjects,
  WrapperProjects,
  ContainerProjectsText,
  ContainerServices,
  WrapperServices,
  CardServiceText,
  ContainerSkill,
  WrapperSkill,
  CardSkillText,
  IconToggleTheme,
  TougleButonTheme,
  BoxMessage,
  BoxMessageText
} from './Main_Styled.js';

import ImageDevelopment from '../../src/assets/image-development.png';
import {
  dataIcons,
  cardProject,
  cardService,
  cardSkill
} from '../data/index.js';

import CardIcons from '../components/CardIcons/CardIcons.jsx';
import CardProject from '../components/CardProject/CardProject.jsx';
import CardService from '../components/CardService/CardService.jsx';
import CardSkill from '../components/CardSkill/CardSkill.jsx';
import Footer from '../components/Footer/Footer.jsx';
import ButtonScrollTop from '../components/ButtonScrollTop/ButtonScrollTop.jsx';

import IconSun from '../assets/icon-sun.svg';
import IconMoon from '../assets/icon-moon.svg';

function App() {

  let leftOrRight = 'flex-start';
  let themeDarkorLight;

  const [togleBtn, setTogleBtn] = useState(false);

  if (togleBtn) {
    themeDarkorLight = themes.white;
  }
  if (!togleBtn) {
    themeDarkorLight = themes.black;
  }

  return (
    <ThemeProvider theme={themeDarkorLight}>
      <ContainerMain
        themeColor={leftOrRight}
      >
        <ContainerContentInto>
          <Header>
            <TextLeftHeader>
              Portifólio
            </TextLeftHeader>
            <UnotherListLinkHeader>
              <ListLinkHeader>
                <Link
                  offset={-20}
                  smooth={true}
                  to='aboutme'>
                  <LinksHeader>Sobre min</LinksHeader>
                </Link>

              </ListLinkHeader>
              <ListLinkHeader>
                <Link
                  offset={-20}
                  smooth={true}
                  to='projects'>
                  <LinksHeader>Projetos</LinksHeader>
                </Link>
              </ListLinkHeader>
              <ListLinkHeader>
                <Link
                  offset={-20}
                  smooth={true}
                  to='services'>
                  <LinksHeader>Serviços</LinksHeader>
                </Link>
              </ListLinkHeader>
              <ListLinkHeader>
                <Link
                  offset={-20}
                  smooth={true}
                  to='skills'>
                  <LinksHeader>Minhas skills</LinksHeader>
                </Link>
              </ListLinkHeader>
            </UnotherListLinkHeader>
          </Header>
          <ContainerTop>
            <ContainerTopContentLeft>
              <ContainerTopContentLeftText>
                Olá, eu sou o <br></br>
                Dionnatan Alves
              </ContainerTopContentLeftText>
              <ContainerTopContentLeftTextSubTitle>
                Desenvolvedor Front-End
              </ContainerTopContentLeftTextSubTitle>
              <ContainerTopLeftButtons>
                <ContainerTopLeftButton
                  colorButton={"#F9F9F9"}
                  bgColorButton={"#00DF5E"}
                  borderColor={"transparent"}
                >
                  Download CV
                </ContainerTopLeftButton>
                <ContainerTopLeftButton
                  colorButton={togleBtn ? "#171717" : "#F9F9F9"}
                  bgColorButton={"transparent"}
                  borderColor={"#00DF5E"}
                >
                  Entrar em contato
                </ContainerTopLeftButton>
              </ContainerTopLeftButtons>
            </ContainerTopContentLeft>
            <ContainerTopContentImage
              srcImage={ImageDevelopment}
            />
          </ContainerTop>
          <ContainerAboutMe id="aboutme">
            <ContainerAboutMeTitle>
              Sobre mim
            </ContainerAboutMeTitle>
            <ContainerAboutMeSubTitle>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
              tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
              quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
              Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu
              fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident
            </ContainerAboutMeSubTitle>
          </ContainerAboutMe>
          <ContainerIcons>
            {dataIcons.map(item => (
              <CardIcons
                key={item.id}
                image={item.image}
                alt={item.alt}
                title={item.title}
                subtitle={item.subtitle}
              />
            ))}
          </ContainerIcons>
          <ContainerProjects id="projects">
            <ContainerProjectsText>Projetos</ContainerProjectsText>
            <WrapperProjects>
              {cardProject.map(item => (
                <CardProject
                  key={item.id}
                  title={item.title}
                  subtitle={item.subtitle}
                />
              ))}
            </WrapperProjects>
          </ContainerProjects>
          <ContainerServices id="services">
            <CardServiceText>Serviços</CardServiceText>
            <WrapperServices>
              {cardService.map(item => (
                <CardService
                  key={item.id}
                  title={item.title}
                  image={item.image}
                  alt={item.alt}
                />
              ))}
            </WrapperServices>
          </ContainerServices>
          <ContainerSkill id="skills">
            <CardSkillText>Minhas skills</CardSkillText>
            <WrapperSkill>
              {cardSkill.map(item => (
                <CardSkill
                  key={item.id}
                  image={item.image}
                  alt={item.alt}
                />
              ))}
            </WrapperSkill>
          </ContainerSkill>
          <TougleButonTheme
            onClick={() => setTogleBtn(!togleBtn)}
            justfyContent={leftOrRight}
          >
            <IconToggleTheme
              src={togleBtn ? IconSun : IconMoon}
              alt="symbols theme"
            />
            {/* <BoxMessage>
              <BoxMessageText>
                Click para mudar o tema da página
              </BoxMessageText>
            </BoxMessage> */}
          </TougleButonTheme>
        </ContainerContentInto>
        <Footer />
        <ButtonScrollTop />
      </ContainerMain>
    </ThemeProvider>
  )
}

export default App;
