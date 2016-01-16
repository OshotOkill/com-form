import * as actions from './actionCreators'

export function category(id) {
	return {
		type: actions.CURRENT,
		id
	}
}