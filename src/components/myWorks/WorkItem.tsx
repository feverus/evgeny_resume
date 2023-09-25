import { WorkItemProps } from './myWorks.props'
import C from './myWorks.module.scss'
import WorkItemSwiper from './WorkItemSwiper/WorkItemSwiper'
import { CustomCursor, CircleWithText } from '@feverus/react-custom-cursor'
import '@feverus/react-custom-cursor/dist/style.css'

const Block2 = (props:{name: string, children: React.ReactNode}) => {
	return (
		<div className={C.column_block + ' ' + C.column_block_2}>
			<div className={C.column_block_title}>
				{props.name}
			</div>
			<div className={C.column_text}>
				{props.children}
			</div>
		</div>
	)
}

export default function WorkItem(props: { data: WorkItemProps; index: number; }) {
	return (
		<div className={C.my_works_block}>
			<div className={C.number}>
				<div>{props.index + 1}</div>
			</div>
			<div className={C.card}>
				<div className={C.name}>
					<div className={C.name_number}>{props.index + 1}</div>
					<div>{props.data.name}</div>
				</div>
				<div className={C.text}
					dangerouslySetInnerHTML={{ __html: props.data.text }}
				>
				</div>

				<div className={C.column}>
					<Block2 name={'Платформа'}>
						{props.data.platform}
					</Block2>
					<Block2 name={'Технологии'}>
						{props.data.tech.map((item) => 
							<div className={C.tag} key={props.index + '_tech_' + item}>{item}</div>
						)}
					</Block2>
				</div>

				{props.data.link &&
					<a target="_blank" rel="noreferrer" href={props.data.link} className={C.card_a}>
						<CustomCursor cursor={<CircleWithText text='Взглянуть на внешний вид' color='#3030f0' donutColor='#0d111740'/>} rotating='auto' >
							<div className={C.button}>
								<div className={C.button_img}>
									<img src="svg/cloud_btn.svg" alt="" />
								</div>
								<div className={C.button_text}>Открыть приложение</div>
							</div>
						</CustomCursor>
					</a>}

				{props.data.git_link && 
					<a target="_blank" rel="noreferrer" href={`https://github.com/${props.data.git_link}`} className={C.card_a}>
						<CustomCursor cursor={<CircleWithText text='Перейти на GitHub и покопаться в коде' color='#f03030' donutColor='#0d111740'/>} rotating='auto' >
							<div className={C.button}>
								<div className={C.button_img}>
									<img src="svg/github_btn.svg" alt="" />
								</div>
								<div className={C.button_text}>Открыть исходный код</div>
							</div>
						</CustomCursor>
					</a>}
				
			</div>

			{props.data.screenshots && 
			<div className={C.screenshots}>
				<WorkItemSwiper images={props.data.screenshots} />
			</div>
		}
		</div>
	);
}
