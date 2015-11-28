import React { Component } from 'react'

const catalogData = {
	react : [
		{ id: 0, text: 'v0.14', current: false },
		{ id: 1, text: 'v0.13', current: false },
		{ id: 2, text: 'v0.12', current: false }
	],
	
	angular: [
		{ id: 0, text: 'v2.0', current: false },
		{ id: 1, text: 'v1.5.0', current: false },
		{ id: 2, text: 'v1.4', current: false }		
	],
	
	typescript: [
		{ id: 0, text: 'v1.7.1', current: false },
		{ id: 1, text: 'v1.6.2', current: false },
		{ id: 2, text: 'v1.5.3', current: false }
	]
}

export default class Category extends Component {
	constructor(props, context) {
		super(props, context)
		this.state = {
			isFolded: null,
			currentOne: null
		}
	}
	
	handleClick(e) {
		this.setState({ 
			isFolded: e.target.value
		})
	}
	
	handleCurrent(e) {
		this.setState({
			currentOne: e.target.text
		})
	}
		
	render() {
		const { catalogData } = this.props
		return (
			<div id="category">
				{
					Object.keys(catalogData).map((key) => {
						const catalogs = catalogData[key]
						const catalog = catalogs.map((props) => 
							<CatalogRow {...props} onCurrent={() => {this.handleCurrent}} />
						)						
						return (
							<ul>
								<li className="catalog" onClick={() => {this.handleClick}}>{key}</li>
								{ catalog }
							</ul>
						)
					})
				}
			</div>
		)
	}
}

class CatalogRow extends Component {
	constructor(props, context) {
		super(props, context)
	}
	
	render() {
		const { text, current, onCurrent } = this.props
		const realClass = current ? 'catalog highlight' : 'catalog'
		return <li className={realClass} onClick={onCurrent} >{text}</li>
	}
}

// export default class Category extends Component {
// 	constructor(props, context) {
// 		super(props, context)
// 	}
		
// 	render() {
// 		const { catalogData } = this.props
// 		return (
// 			<div id="category">
// 				<CatalogReact data={catalogData.react} />
// 				<CatalogAngualr data={catalogData.angular} />
// 				<CatalogTypescript data={catalogData.typescript} />
// 			</div>
// 		)
// 	}
// }

// class CatalogReact extends Component {
// 	constructor(props, context) {
// 		super(props, context)
// 		this.state = {
// 			isFolded: true
// 		}
// 	}
	
// 	handleClick(e) {
// 		this.setState({ 
// 			isFolded: !isFolded
// 		})
// 	}
	
// 	render() {
// 		const catalog = this.props.data.map((value, i) => {
// 			return <CatalogReactRow isFolded={this.state.isFolded} value={value} />
// 		})
// 		return (
// 			<ul>
// 				<li className="catalog" onclick={this.handleClick.bind(this)}>React</li>
// 				{ catalog }
// 			</ul>
// 		)
// 	}
// }

// class CatalogReactRow extends Component {
// 	constructor(props, context) {
// 		super(props, context)
// 	}
	
// 	render() {
// 		let realClass
// 		this.props.isFolded ? realClass = "catalogRow hidden" : realClass = "catalogRow"
// 		return <li className={realClass}> {this.props.value} </li>			
// 	}
// }

// class CatalogAngualr extends Component {
// 	constructor(props, context) {
// 		super(props, context)
// 		this.state = {
// 			isFolded: true
// 		}
// 	}
	
// 	handleClick(e) {
// 		this.setState({
// 			isFolded: !isFolded
// 		})
// 	}
	
// 	render() {
// 		const catalog = this.props.data.map((value, i) => {
// 			return <CatalogAngularRow isFolded={this.state.isFolded} value={value} />
// 		})
// 		return (
// 			<ul>
// 				<li className="catalog" onclick={this.handleClick.bind(this)}>Angular</li>
// 				{ catalog }
// 			</ul>
// 		)
// 	}
// }

// class CatalogAngularRow extends Component {
// 	constructor(props, context) {
// 		super(props, context)
// 	}
	
// 	render() {
// 		let realClass
// 		this.props.isFolded ? realClass = "catalogRow hidden" : realClass = "catalogRow"
// 		return <li className={realClass}> {this.props.value} </li>			
// 	}
// }

// class CatalogTypescript extends Component {
// 	constructor(props, context) {
// 		super(props, context)
// 		this.state = {
// 			isFolded: true
// 		}
// 	}
	
// 	handleClick(e) {
// 		this.setState({ isFolded: !isFolded })
// 	}
	
// 	render() {
// 		const catalog = this.props.data.map((value, i) => {
// 			return <CatalogTypescriptRow isFolded={this.state.isFolded} value={value} />
// 		})
// 		return (
// 			<ul>
// 				<li className="catalog" onclick={this.handleClick.bind(this)}>TypeScript</li>
// 				{ catalog }
// 			</ul>
// 		)
// 	}
// }

// class CatalogTypescriptRow extends Component {
// 	constructor(props, context) {
// 		super(props, context) 
// 	}
	
// 	render() {
// 		let realClass
// 		this.props.isFolded ? realClass = "catalogRow hidden" : realClass = "catalogRow"
// 		return <li className={realClass}> {this.props.value} </li>			
// 	}
// }