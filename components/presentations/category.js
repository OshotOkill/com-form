import React { Component } from 'react'

// const catalogData = {
// 	react: ['v0.14', 'v0.13'],
// 	angular: ['v2.0', 'v1.x'],
// 	typescript: ['v1.6.2', 'v1.5.3']
// }

const catalogData = [
	{ belong: react, id: 0, text: 'v0.14' current: false },
	{ belong: react, id: 1, text: 'v0.13' current: false },
	{ belong: react, id: 2, text: 'v0.12' current: false },
	{ belong: angular, id: 0, text: 'v2.0' current: false },
	{ belong: angular, id: 1, text: 'v1.5.3' current: false },
	{ belong: angular, id: 2, text: 'v1.4' current: false },
	{ belong: typescript, id: 0, text: 'v1.7.1' current: false },	
	{ belong: typescript, id: 1, text: 'v1.6.2' current: false },	
	{ belong: typescript, id: 2, text: 'v1.5.3' current: false }
]

export default class Category extends Component {
	constructor(props, context) {
		super(props, context)
	}
		
	render() {
		const { catalogData } = this.props
		return (
			<div id="category">
				<CatalogReact data={catalogData.react} />
				<CatalogAngualr data={catalogData.angular} />
				<CatalogTypescript data={catalogData.typescript} />
			</div>
		)
	}
}

class CatalogReact extends Component {
	constructor(props, context) {
		super(props, context)
		this.state = {
			isFolded: true
		}
	}
	
	handleClick(e) {
		this.setState({ 
			isFolded: !isFolded
		})
	}
	
	render() {
		const catalog = this.props.data.map((value, i) => {
			return <CatalogReactRow isFolded={this.state.isFolded} value={value} />
		})
		return (
			<ul>
				<li className="catalog" onclick={this.handleClick.bind(this)}>React</li>
				{ catalog }
			</ul>
		)
	}
}

class CatalogReactRow extends Component {
	constructor(props, context) {
		super(props, context)
	}
	
	render() {
		let realClass
		this.props.isFolded ? realClass = "catalogRow hidden" : realClass = "catalogRow"
		return <li className={realClass}> {this.props.value} </li>			
	}
}

class CatalogAngualr extends Component {
	constructor(props, context) {
		super(props, context)
		this.state = {
			isFolded: true
		}
	}
	
	handleClick(e) {
		this.setState({
			isFolded: !isFolded
		})
	}
	
	render() {
		const catalog = this.props.data.map((value, i) => {
			return <CatalogAngularRow isFolded={this.state.isFolded} value={value} />
		})
		return (
			<ul>
				<li className="catalog" onclick={this.handleClick.bind(this)}>Angular</li>
				{ catalog }
			</ul>
		)
	}
}

class CatalogAngularRow extends Component {
	constructor(props, context) {
		super(props, context)
	}
	
	render() {
		let realClass
		this.props.isFolded ? realClass = "catalogRow hidden" : realClass = "catalogRow"
		return <li className={realClass}> {this.props.value} </li>			
	}
}

class CatalogTypescript extends Component {
	constructor(props, context) {
		super(props, context)
		this.state = {
			isFolded: true
		}
	}
	
	handleClick(e) {
		this.setState({ isFolded: !isFolded })
	}
	
	render() {
		const catalog = this.props.data.map((value, i) => {
			return <CatalogTypescriptRow isFolded={this.state.isFolded} value={value} />
		})
		return (
			<ul>
				<li className="catalog" onclick={this.handleClick.bind(this)}>TypeScript</li>
				{ catalog }
			</ul>
		)
	}
}

class CatalogTypescriptRow extends Component {
	constructor(props, context) {
		super(props, context) 
	}
	
	render() {
		let realClass
		this.props.isFolded ? realClass = "catalogRow hidden" : realClass = "catalogRow"
		return <li className={realClass}> {this.props.value} </li>			
	}
}