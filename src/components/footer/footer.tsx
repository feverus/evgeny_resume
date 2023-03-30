import defaultStore from '~/store/defaultStore'
import useFooter from "./footer.service"
import C from './footer.module.scss'
import { ScrollButton } from '../scrollButton/scrollButton'

export function Footer() {
	const [state, api] = useFooter() 

	return (
		<footer id="to_bottom">
				<div className={C.title}>
						контакты
				</div>
				<div className={C.column}>
						<div className={C.column_block + ' ' + C.column_block_2}>
								<div className={C.column_text}>
										<div className={C.footer_block}>
												<a target="_blank" href="https://github.com/feverus">
														<div><img src="svg/github.svg" /></div>
														<div>GitHab</div>
												</a>
										</div>
										<div className={C.footer_block}>
												<a target="_blank" href="https://t.me/feverus">
														<div><img src="svg/telegram.svg" /></div>
														<div>Telegram</div>
												</a>
										</div>
										<div className={C.footer_block}>
												<a href="mailto:evgeny.fun@mail.ru">
														<div><img src="svg/email.svg" /></div>
														<div>Mail</div>
												</a>
										</div>
								</div>
						</div>
				</div>

				<ScrollButton direction='top' />
		</footer>
	)
}