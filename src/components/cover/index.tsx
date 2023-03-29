import {observer, inject} from "mobx-react";
import {Cover} from './cover'

export default
	inject('defaultStore')
	(observer(Cover));

export type { StateType, ApiType, UseCover } from './cover.props'