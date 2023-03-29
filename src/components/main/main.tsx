import defaultStore from '~/store/defaultStore'
import useMain from "./main.service";
import C from './main.module.scss'
import Cover from '~/components/cover'

export function Main() {
	const [state, api] = useMain() 

	return (
		<div className={C.main} id="to-top">
			<aside>
        <div className={C.text}>
            Portfolio
        </div>
    	</aside>

			<Cover />
		</div>
	)
}