import {
    CardContentService,
    CardServiceTitle,
    ImageCard
} from './CardService_Styled';

function CardService({title, image, alt}) {

    return (
        <CardContentService>
            <ImageCard
                src={image}
                alt={alt}
            />
            <CardServiceTitle>{title}</CardServiceTitle>
        </CardContentService>
    )
}

export default CardService;