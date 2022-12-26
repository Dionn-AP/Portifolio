import {
    CardsIcon,
    BoxIcon,
    ImageIcon,
    TitleIcon,
    SubTitleIcon
} from './CardIcons_Styled';

function CardIcons({ image, alt, title, subtitle }) {

    return (
        <CardsIcon>
            <BoxIcon>
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