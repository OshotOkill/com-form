import React, { Component } from 'react';
import { renderToString } from 'react-dom/server';

class Html extends Component {
  render() {
    const {assets, layer, initialState} = this.props;
    const component = layer ? renderToString(layer) : '';

    return (
      <html>
        <head>
          <meta charset="UTF-8" />
          <meta name="viewport" content="width=device-width, initial-scale=1" />
          
          {/* Production mode */}
          {Object.keys(assets.styles).map((style, key) =>
            <link href={assets.styles[style]} key={key} rel="stylesheet" />
          )}
          
          {/* Development mode */}
          {Object.keys(assets.styles).length === 0
              ? <style dangerouslySetInnerHTML={{
                  __html: require('../isomorphic/public/css/global.css') + 
                          require('../isomorphic/public/css/materialdesignicons.min.css')}} 
                  />
              : null
          }          
          <title>com-form</title>
        </head>

        <body>
          <div id="root" dangerouslySetInnerHTML={{__html: component}} />
          <script dangerouslySetInnerHTML={{__html: `window.__INITIAL_STATE__ = ${JSON.stringify(initialState)}`}} />
          <script src={assets.javascript.main}></script>
        </body>
      </html>
    );
  }
}

export default Html;