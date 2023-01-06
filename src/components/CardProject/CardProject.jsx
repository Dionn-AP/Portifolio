import {
    ContinerCard,
    IntoCard,
    EmptyProject,
    TextProjectSoon,
    CardProjectTitle,
    CardProjectSubTitle
} from './CardProject_Styled';


function CardProject({ title, subtitle, image, link }) {

    const openUrl = (urlLink) => {
        if (link) {
            window.open(urlLink);
        }
    }

    return (
        <ContinerCard onClick={() => openUrl(link)}>
            {
                image
                    ? <IntoCard
                        imageProject={image}
                    />
                    : <EmptyProject>
                        <TextProjectSoon>Em breve</TextProjectSoon>
                    </EmptyProject>
            }
            {
                title &&
                <CardProjectTitle>{title}</CardProjectTitle>}
            {
                subtitle &&
                <CardProjectSubTitle>{subtitle}</CardProjectSubTitle>
            }

        </ContinerCard>
    )
}

export default CardProject;