import React, { Component } from 'react'
import Card from 'material-ui/lib/card/card'
import CardActions from 'material-ui/lib/card/card-actions'
import CardHeader from 'material-ui/lib/card/card-header'
import CardMedia from 'material-ui/lib/card/card-media'
import CardTitle from 'material-ui/lib/card/card-title'
import CardText from 'material-ui/lib/card/card-text'

class Essay extends Component {
  render() {
    const { cardHeader, media, text, action } = this.props
    
    return (
        <Card style={{ width: '900px', height: 'auto', margin: '100px auto' }}>
          <CardHeader
            title={cardHeader.title}
            subtitle={cardHeader.subtitle}
            avatar={cardHeader.avatar}
            actAsExpander={true}
            showExpandableButton={true}
            />
          <CardMedia
            overlay={<CardTitle title={media.overlay.title} subtitle={media.overlay.subtitle}/>} expandable={true}>
            { media.overlay.children }
          </CardMedia>
          <CardText expandable={true}>
            { text }
          </CardText>
          <CardActions expandable={true}>
            { action }
          </CardActions>
        </Card>
    );
  }
}

export default Essay
