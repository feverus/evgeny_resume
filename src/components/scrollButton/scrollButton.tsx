import C from './scrollButton.module.scss';

export function ScrollButton(props: { direction: 'bottom' | 'top' }) {
    let st, caption
    
    if (props.direction === 'bottom') {
        st = C.to_bottom + ' ' + C.a
        caption = 'Прокрути вниз'
    } else {
        st = C.to_top + ' ' + C.a
        caption = 'Прокрути вверх'
    }

    return (
        <div className={st}>
            <a href="#to_bottom">
                <div className={C.ankor_button}>
                    <div className={C.ankor_button_text}>{caption}</div>
                    <div className={C.ankor_button_img}><img src="/svg/view_arrow.svg" /></div>
                </div>
            </a>
        </div>
    )
}
