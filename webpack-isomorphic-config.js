// import webpack_isomorphic_tools_plugin from 'webpack-isomorphic-tools/plugin'
var webpack_isomorphic_tools_plugin = require('webpack-isomorphic-tools/plugin')

module.exports = {
  assets: {
    images: {
      extensions: ['png', 'jpg', 'gif', 'ico', 'svg']
    },
    
    styles: {
      extensions: ['css', 'scss'],
      filter(module, regular_expression, options, log) {
				if (options.development) {
					return webpack_isomorphic_tools_plugin.style_loader_filter(module, regular_expression, options, log)
				}
			},

			// How to correctly transform kinda weird `module.name`
			// of the `module` created by Webpack "css-loader" 
			// into the correct asset path:
			path: webpack_isomorphic_tools_plugin.style_loader_path_extractor,

			// How to extract these Webpack `module`s' javascript `source` code.
			// Basically takes `module.source` and modifies its `module.exports` a little.
			parser: webpack_isomorphic_tools_plugin.css_loader_parser
    },
    
    fonts: {
			extensions: ['eot', 'ttf', 'woff', 'woff2']
    }
  }
}