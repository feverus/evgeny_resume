import defaultStore from '~/store/defaultStore'
import useMain from "./cover.service";
import C from './cover.module.scss'
import Magic_circle from '../magic_circle/';
import { ScrollButton } from '../scrollButton/scrollButton';

export function Cover() {
	const [state, api] = useMain() 

	return (
    <section className={C.cover}>
        <nav className={C.social}>
			<div className={C.social_div}>
				<a target="_blank" href="https://github.com/feverus"><img src="/svg/github.svg" /></a>
				<a target="_blank" href="https://t.me/feverus"><img src="/svg/telegram.svg" /></a>
				<a  href="mailto:evgeny.fun@mail.ru"><img src="/svg/email.svg" /></a>
			</div>
        </nav>
        <div className={C.inactive + ' ' + C.hello + ' ' + C.a}>
            <div className={C.hello_title}>
                frontend developer <br />
                react/javascript/php
            </div>
            <div className={C.text}>
            Привет, меня зовут Евгений, я&nbsp;занимаюсь web&nbsp;-&nbsp;разработкой и&nbsp;версткой.<br /><br />
            Окончил КАИ им. А.Н.Туполева по специальности информационная безопасность и&nbsp;более 10&nbsp;лет работаю&nbsp;над своими проектами.
            </div>
        </div>
		<a href="#my-works" className={C.my_works}>
			<div className={C.button}>
				<div className={C.button_text}>Посмотреть работы</div>
				<div className={C.button_img}><img src="/svg/view_arrow.svg" /></div>
			</div>
		</a>

        <Magic_circle />

        <ScrollButton direction='bottom' />
    </section>
	)
}



