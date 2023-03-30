import defaultStore from '~/store/defaultStore'
import useMain from "./main.service";
import C from './main.module.scss'
import Cover from '~/components/cover'
import Stack from '~/components/stack'
import MyWorks from '~/components/myWorks'
import Footer from '~/components/footer'


export function Main() {
	const [state, api] = useMain() 

	return (
		<div className={C.main} id="to_top">
			<aside>
        <div className={C.text}>
            Portfolio
        </div>
    	</aside>

			<Cover />
			<Stack />
			<MyWorks />
			<Footer />
		</div>
	)
}