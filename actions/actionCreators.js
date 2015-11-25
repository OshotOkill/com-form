import * as actions from './actionCreators'

export function selected(id) {
	return {
		type: actions.SELETECED,
		id
	}
}