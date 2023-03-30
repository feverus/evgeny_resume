import {observer, inject} from "mobx-react";
import {Footer} from './footer'

export default
	inject('defaultStore')
	(observer(Footer));

export type { StateType, ApiType, UseFooter } from './footer.props'