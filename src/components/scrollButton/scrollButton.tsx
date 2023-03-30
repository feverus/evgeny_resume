import C from './scrollButton.module.scss'
import { scrollTo } from '~/service/scrollTo'

export function ScrollButton(props: { direction: 'bottom' | 'top' }) {
    let st, caption
    
    if (props.direction === 'bottom') {
        st = C.to_bottom
        caption = 'Прокрути вниз'
    } else {
        st = C.to_top
        caption = 'Прокрути вверх'
    }

    return (
        <button
            className={st}
            onClick={() => scrollTo(`to_${props.direction}`)}
        >
            <div className={C.ankor_button}>
                <div className={C.ankor_button_text}>{caption}</div>
                <div className={C.ankor_button_img}><img src="/svg/view_arrow.svg" /></div>
            </div>
        </button>
    )
}
