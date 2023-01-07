import { useState, useEffect } from 'react'
import { ThemeProvider } from 'styled-components';
import { themes } from '../global/colors.js';
import { Link, animateScroll as scroll } from "react-scroll";
import { setStorage, getStorage } from '../services/storage';
import Typed from 'react-typed';

import {
  ContainerMain,
  TextLeftHeader,
  Header,
  TextTopHeader,
  UnotherListLinkHeader,
  ListLinkHeader,
  LinksHeader,
  ContainerContentInto,
  ContainerTop,
  ContainerTopContentLeft,
  ContainerTopContentLeftText,
  ContainerTopContentLeftTextSubTitle,
  ContainerTopLeftButtons,
  ContainerTopDownButtons,
  ContainerTopLeftButton,
  ContainerTopContentImage,
  ContainerAboutMe,
  ContainerAboutMeTitle,
  ContainerAboutMeSubTitle,
  TagCubosAcademy,
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
  const [theme, setTheme] = useState(getStorage("theme"));

  if (theme == null) {
    setStorage("theme", "black");
    setTheme(getStorage("theme"));
  }

  const setThemes = () => {
    if (theme == "black") {
      setStorage("theme", "white");
      setTheme(getStorage("theme"));
    }
    if (theme == "white") {
      setStorage("theme", "black");
      setTheme(getStorage("theme"));
    }
  }

  useEffect(() => {
  }, [theme])

  return (
    <ThemeProvider theme={(theme == "" || theme == "black") ? themes.black : themes.white}>
      <ContainerMain>
        <ContainerContentInto>
          <TextTopHeader>Portifólio</TextTopHeader>
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
              <Typed
                strings={["Olá, eu sou o Dionnatan Alves"]}
                typeSpeed={50}
                showCursor={false}
              >
                <ContainerTopContentLeftText>

                </ContainerTopContentLeftText>
              </Typed>
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
                  colorButton={theme == "white" ? "#171717" : "#F9F9F9"}
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
            <ContainerTopDownButtons>
                <ContainerTopLeftButton
                  colorButton={"#F9F9F9"}
                  bgColorButton={"#00DF5E"}
                  borderColor={"transparent"}
                >
                  Download CV
                </ContainerTopLeftButton>
                <ContainerTopLeftButton
                  colorButton={theme == "white" ? "#171717" : "#F9F9F9"}
                  bgColorButton={"transparent"}
                  borderColor={"#00DF5E"}
                >
                  Entrar em contato
                </ContainerTopLeftButton>
              </ContainerTopDownButtons>
          </ContainerTop>
          <ContainerAboutMe id="aboutme">
            <ContainerAboutMeTitle>
              Sobre mim
            </ContainerAboutMeTitle>
            <ContainerAboutMeSubTitle>
              Olá! É um prazer ter você aqui. Me chamo Dionnatan e sou 
              Desenvolvedor Web FullStack formado pela escola de tecnologia  
              <TagCubosAcademy href='https://cubos.academy/' target="_blank"> Cubos Academy</TagCubosAcademy>. Fique a vontade 
              para conhecer meus projetos e entrar em contato comigo para podermos criar 
              algo novo juntos.
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
                link={item.link}
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
                  image={item.image}
                  link={item.link}
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
            onClick={() => setThemes()}
          >
            <IconToggleTheme
              src={theme == "white" ? IconSun : IconMoon}
              alt="symbols theme"
            />
          </TougleButonTheme>
        </ContainerContentInto>
        <Footer />
        <ButtonScrollTop />
      </ContainerMain>
    </ThemeProvider>
  )
}

export default App;
