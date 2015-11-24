import React { Component } from 'react'

export default class Header extends Component {
  rende() {
		const url = './logo.png'
		const options = ['one', 'two', 'three']
		return (
			<div>
			  <Logo url={url} />
				<LinkList options={options} />
			</div>
		) 
	}
}

class Logo extends Component {
	constructor(props, context) {
		super(props, context)
	}
	
	render() {
		return <img src={this.props.src} alt="logo"/>
	}
}

class LinkList extends Component {
	constructor(props, context) {
		super(props, context)
	}
	
	render() {
		const option = this.props.options.map((option, i) => (
			<Link value={option} key={i} />
		))
		
		return <ul>{option}</ul>
	}
}

class Link extends Component {
	constructor(props, context) {
		super(props, context)
	}
	
	render() {
		return <li>{this.props.value}</li>
	}
}