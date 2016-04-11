import React, { Component } from 'react'
import Essay from './components/essay'

class Content extends Component {
  render() {
    const { cards, actions } = this.props
    return (
      <div>
        {cards.map(essay => 
          <Essay key={essay.id} {...essay} {...actions} />
        )}
      </div>
    )
  }
}

export default Content