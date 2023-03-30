import defaultStore from '~/store/defaultStore'
import useStack from "./stack.service";
import C from './stack.module.scss'

export function Stack() {
	const [state, api] = useStack() 

	return (
    <section id="stack" className={C.content}>
        <div className={C.title}>
            мой стэк
        </div>
        <div className={C.column}>
            <div className={C.column_block + ' ' + C.column_block_3}>
                <div className={C.column_block_title}>
                Программы
                </div>
                <div className={C.column_text}>
                Visual studio code / Adobe XD / Figma / Adobe Photoshop
                </div>
            </div>
            <div className={C.column_block + ' ' + C.column_block_3}>
                <div className={C.column_block_title}>
                Языки
                </div>
                <div className={C.column_text}>
                JavaScript / TypeScript / PHP / Delphi / 1C  
                </div>
            </div>
            <div className={C.column_block + ' ' + C.column_block_3}>
                <div className={C.column_block_title}>
                Инструменты
                </div>
                <div className={C.column_text}>
                HTML5 / CSS3 / React JS / React Redux / mobX / LESS / SASS/
                </div>
            </div>
            </div>
    </section>
	)
}