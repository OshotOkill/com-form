import React, { Component } from 'react'
import Card from 'material-ui/lib/card/card'
import CardActions from 'material-ui/lib/card/card-actions'
import CardHeader from 'material-ui/lib/card/card-header'
import CardMedia from 'material-ui/lib/card/card-media'
import CardTitle from 'material-ui/lib/card/card-title'
import CardText from 'material-ui/lib/card/card-text'
import RaisedButton from 'material-ui/lib/raised-button'

import pic1 from '../../../public/imgs/01.jpg'
import pic2 from '../../../public/imgs/02.jpg'

class Essay extends Component {
  render() {
    return (
      <div>
        <Card style={{ width: '900px', height: 'auto', margin: '100px auto' }}>
          <CardHeader
            title="第一个卡片"
            subtitle="This is the first card"
            avatar=""
            actAsExpander={true}
            showExpandableButton={true}
            />
          <CardMedia
            overlay={<CardTitle title="第一个卡片" subtitle="This is the first card" />} expandable={true}>
            <img src={pic1} />
          </CardMedia>
          <CardText expandable={true}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            Donec mattis pretium massa.Aliquam erat volutpat.Nulla facilisi.
            Donec vulputate interdum sollicitudin.Nunc lacinia auctor quam sed pellentesque.
            Aliquam dui mauris, mattis quis lacus id, pellentesque lobortis odio.
          </CardText>
          <CardActions expandable={true}>
            <RaisedButton label="hello" primary={true} />
          </CardActions>
        </Card>
        
        <Card style={{ width: '900px', height: 'auto', margin: '50px auto' }}>
          <CardHeader
            title="第二个卡片"
            subtitle="This is the second card"
            avatar=""
            actAsExpander={true}
            showExpandableButton={true}
            />
            
          <CardMedia 
            overlay={<CardTitle title="第二个卡片" subtitle="This is the Second card" />} 
            expandable={true}
            >
            <img src={pic2} />
          </CardMedia>
        </Card>
      </div>
    );
  }
}

export default Essay
