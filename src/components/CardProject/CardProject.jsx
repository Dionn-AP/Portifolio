import {
    ContinerCard,
    IntoCard,
    CardProjectTitle,
    CardProjectSubTitle
} from './CardProject_Styled';


function CardProject({ title, subtitle, image, link }) {

    const openUrl = (urlLink) => {
        window.open(urlLink)
    }

    return (
        <ContinerCard onClick={() => openUrl(link)}>
            <IntoCard
                imageProject={image}
            />
            <CardProjectTitle>{title}</CardProjectTitle>
            <CardProjectSubTitle>{subtitle}</CardProjectSubTitle>
        </ContinerCard>
    )
}

export default CardProject;