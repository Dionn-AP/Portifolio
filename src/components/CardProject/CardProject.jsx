import {
    ContinerCard,
    IntoCard,
    CardProjectTitle,
    CardProjectSubTitle
} from './CardProject_Styled';


function CardProject({ title, subtitle }) {

    return (
        <ContinerCard>
            <IntoCard />
            <CardProjectTitle>{title}</CardProjectTitle>
                <CardProjectSubTitle>{subtitle}</CardProjectSubTitle>
        </ContinerCard>
    )
}

export default CardProject;