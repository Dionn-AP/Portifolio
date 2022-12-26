import {
    CardContentSkill,
    ImageCard
} from './CardSkill_Styled';

function CardSkill({ title, image, alt }) {

    return (
        <CardContentSkill>
            <ImageCard
                src={image}
                alt={alt}
            />
        </CardContentSkill>
    )
}

export default CardSkill;