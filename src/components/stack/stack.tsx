import defaultStore from '~/store/defaultStore'
import useStack from "./stack.service";
import C from './stack.module.scss'
import data from './data.json';

const Block_3 = (props:{name: string, children: React.ReactNode}) => {
    return (
        <div className={C.column_block + ' ' + C.column_block_3}>
            <div className={C.column_block_title}>
                {props.name}
            </div>
            <div className={C.column_text}>
                {props.children}
            </div>
        </div>
    )
}

export function Stack() {
	const [state, api] = useStack() 

	return (
    <section id="stack" className={C.content}>
        <div className={C.title}>
            мой стэк
        </div>
        <div className={C.column}>
            {data.map(({name, list}) => 
                <Block_3 name={name} key={'block3'+name}>
                    {list}
                </Block_3>
            )}
        </div>
    </section>
	)
}