import {
    CardsIcon,
    BoxIcon,
    ImageIcon,
    TitleIcon,
    SubTitleIcon
} from './CardIcons_Styled';

function CardIcons({ image, alt, title, subtitle, link }) {

    const openUrl = (urlLink) => {
        if (title !== "E-mail") {
            window.open(urlLink);
        }
    }

    return (
        <CardsIcon>
            <BoxIcon onClick={() => openUrl(link)}>
                <ImageIcon
                    src={image}
                    alt={alt} />
            </BoxIcon>
            <TitleIcon>{title}</TitleIcon>
            <SubTitleIcon>{subtitle}</SubTitleIcon>
        </CardsIcon>
    )
}

export default CardIcons;