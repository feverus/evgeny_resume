import {observer, inject} from "mobx-react";
import {Stack} from './stack'

export default
	inject('defaultStore')
	(observer(Stack));

export type { StateType, ApiType, UseStack } from './stack.props'