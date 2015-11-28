import { CURRENT } from '../../actions/action.js'

export default function todos(state, action) {
	switch(action.type) {
		case CURRENT:
			return state.map(todo => (
				todo.belong === action.belong && todo.id === action.id ? 
					Object.assign({}, todo, { current: true }) :
					Object.assign({}, todo, { current: false })
			))
	}
}