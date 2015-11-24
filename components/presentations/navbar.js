import React { component } from 'react'

export default class NavBar extends Component {
	render() {
		const navs = ['首页', '分类', '试验田', '关于']
		const path = {
			avator: '',
			github: ''
		};
				
		return (
			<div id="nav-wrapper">
				<div id="nav">
				  <Avatar src={path.avator} />
					<Nav navs={navs} />
					<GitHubLink src={path.github} />
				</div>
			</div>
		)
	}
}

class Avatar extends Component {
	constructor(props, context) {
		super(props, context)
	}
	
	render() {
		return (
			<img src={this.props.src} alt="avatar" />
		)
	}	
}

class Nav extends Component {
	constructor(props, context) {
		super(props, context)
	}
	
	render() {
		const nav = this.props.navs.map((value) => (
			<li>{value}</li>
		))
		
		return (
			<ul>{nav}</ul>
		)
	}	
}

class GithubLink extends Component {
	constructor(props, context) {
		super(props, context)
	}
	
	render() {
		return (
			<img src={this.props.src} />
		)
	}
}