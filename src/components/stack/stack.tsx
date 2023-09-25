import defaultStore from '~/store/defaultStore'
import useStack from "./stack.service";
import C from './stack.module.scss'
import data from './data.json';

const Block4 = (props:{name: string, children: React.ReactNode}) => {
	return (
		<div className={C.column_block + ' ' + C.column_block_4}>
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
				мой стек
			</div>
			<div className={C.column}>
				{data.map(({name, list}) => 
					<Block4 name={name} key={'block3'+name}>
						{list}
					</Block4>
				)}
			</div>
    </section>
	)
}