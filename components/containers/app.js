import React { Component } from 'react'
import { connect } from 'react-redux'
import { Header, Nav, Content } from '../presentations/'

class App extends Component {
	render() {
		const { actions, todos } = this.props;
		return (
			<div>
				<Header />
				<NavBar />
				<Content />
			</div>
		)
	}
}

function mapStateToProps(state) {
	return {
		
	}
}

function mapDispatchToProps(dispatch) {
	return {
		
	}
}

export default connect({
	
})(App)