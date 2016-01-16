import { CURRENT } from '../../actions/action.js'

export default function todos(state = [], action) {
	switch(action.type) {
		case CURRENT:
			return state.map(todo => (
				// todo.belong === action.belong && todo.id === action.id ? 
				// 	Object.assign({}, todo, { current: true }) :
				// 	Object.assign({}, todo, { current: false })
				if()
			))
	}
}


const catalogData = {
	react : [
		{ id: 0, text: 'v0.14' },
		{ id: 1, text: 'v0.13' },
		{ id: 2, text: 'v0.12' }
	],
	
	angular: [
		{ id: 0, text: 'v2.0' },
		{ id: 1, text: 'v1.5.0' },
		{ id: 2, text: 'v1.4' }		
	],
	
	typescript: [
		{ id: 0, text: 'v1.7.1' },
		{ id: 1, text: 'v1.6.2' },
		{ id: 2, text: 'v1.5.3' }
	],
	
	current : {}
}


export function catalogData(state = InitialState, action) {
	switch(action.type) {
		case CURRENT :
			Object.keys(state).map((key) => {
				if(key === action.key) {
					
					Object.assign({}, current, {})					
				}
				
			})
	}
}