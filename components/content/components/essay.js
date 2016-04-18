import React, { Component } from 'react'

import { 
  Card,
  CardActions,
  CardHeader,
  CardMedia,
  CardTitle,
  CardText
} from 'material-ui/Card'


class Essay extends Component {
  render() {
    const { cardHeader, cardMedia, cardText, cardAction } = this.props
    
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
            overlay={<CardTitle title={cardMedia.overlay.title} subtitle={cardMedia.overlay.subtitle}/>} expandable={true}>
            { cardMedia.overlay.image }
          </CardMedia>
          <CardText expandable={true}>
            { cardText }
          </CardText>
          <CardActions expandable={true}>
            { cardAction }
          </CardActions>
        </Card>
    );
  }
}

export default Essay
