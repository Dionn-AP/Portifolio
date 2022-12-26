import {
    ContainerButtonScroll,
    ImageScroll
} from './ButtonScrollTop_Styled';

import { useEffect } from 'react';
import ScrollReveal from 'scrollreveal';
import IconScroll from '../../assets/icon-scroll.svg';

export default function ButtonScrollTop() {
    useEffect(() => {
        const srScroll = ScrollReveal({
            distance: '50px',
            duration: 1000,
            reset: true
        });
        srScroll.reveal('#scroll', { delay: 100, origin: 'bottom' });
    }, []);

    return (
        <ContainerButtonScroll
            id='scroll'
            onClick={() => window.scroll({ top: 0, behavior: 'smooth' })}>
            <ImageScroll src={IconScroll} alt='scroll up' />
        </ContainerButtonScroll>
    )
};