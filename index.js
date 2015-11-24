import React { Component } from 'react'
import { render } from 'react-dom'
import { Provider } from 'react-redux'
import App from './components/containers/app.js'

const root = document.getElementById('root');

render(
	<Provider> 
		<App /> 
	</Provider>
	, root
)