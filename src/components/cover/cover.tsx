import useMain from "./cover.service"
import C from './cover.module.scss'
import Magic_circle from '../magic_circle/'
import { ScrollButton } from '../scrollButton/scrollButton'
import { scrollTo } from '~/service/scrollTo'
import { CustomCursor } from '@feverus/react-custom-cursor'
import '@feverus/react-custom-cursor/dist/style.css'

const MorfingText = () => {
	return (
		<span className={C.blob_shell}>
			<span className={C.blob_text}>&nbsp;java</span>
			<span className={C.blob_text}>type</span>
			<svg xmlns="http://www.w3.org/2000/svg" version="1.1">
				<defs>
					<filter id="goo">
						<feGaussianBlur in="SourceGraphic" stdDeviation="1.5" result="blur" />
						<feColorMatrix in="blur" mode="matrix" values="1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 18 -10" result="goo" />
						<feBlend in="SourceGraphic" in2="goo" />
					</filter>
				</defs>
			</svg>	
		</span>	
	)
}

export function Cover() {
	const [state, api] = useMain() 

	return (
    <section className={C.cover}>
			<nav className={C.social}>
				<div className={C.social_div}>
					<a target="_blank" href="https://github.com/feverus">
							<img src="/svg/github.svg" alt="Ссылка на гитхаб" />
					</a>
					<a target="_blank" href="https://t.me/feverus">
							<img src="/svg/telegram.svg" alt="Ссылка на телеграм" />
					</a>					
					<a  href="mailto:evgeny.fun@mail.ru">
							<img src="/svg/email.svg" alt="Ссылка на почту" />
					</a>
					
				</div>
			</nav>

			
				<div className={C.hello + ' ' + C.a}>
						<div className={C.hello_title}>
								frontend developer <br />
								react/{MorfingText()}script
						</div>
						<CustomCursor cursor={'🖐'} scale={3}>
							<div className={C.text}>
								Привет, меня зовут Евгений, я&nbsp;занимаюсь web&nbsp;-&nbsp;разработкой и&nbsp;версткой.
								<ul>
									<li>2+ года опыта Frontend разработки с применением JavaScript, TypeScript, React</li>
									<li>10+ лет опыта веб-разработки и верстки</li>
								</ul>
							</div>
						</CustomCursor>
				</div>
				

			<button  
				className={C.button + ' ' + C.my_works}
				onClick={() => scrollTo(`my_works`)}
			>
				<div className={C.button_text}>Посмотреть работы</div>
				<div className={C.button_img}><img src="/svg/view_arrow.svg" /></div>
			</button>

			<Magic_circle />

			<ScrollButton direction='bottom' />
    </section>
	)
}



