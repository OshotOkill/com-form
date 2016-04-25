import React, { Component } from 'react';
import Essay from './components/essay';

class Content extends Component {
  render() {
    const { cards } = this.props;
    return (
      <div>
        {cards.map(essay => 
          <Essay key={essay.id} {...essay} />
        )}
      </div>
    )
  }
}

export default Content;