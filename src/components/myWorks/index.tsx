import {observer, inject} from "mobx-react";
import {MyWorks} from './myWorks'

export default
	inject('defaultStore')
	(observer(MyWorks));

export type { StateType, ApiType, UseMyWorks } from './myWorks.props'