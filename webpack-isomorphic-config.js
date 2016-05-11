var webpack_isomorphic_tools_plugin = require('webpack-isomorphic-tools/plugin');

module.exports = {
	// debug: true,
	
  assets: {
    images: {
      extensions: ['png', 'jpg', 'jpeg', 'gif', 'ico'],
			parser: webpack_isomorphic_tools_plugin.url_loader_parser
    },
		
		svg: {
			extensions: ['svg'],
			regular_expression: /\.svg(\?v=\d+\.\d+\.\d+)?$/,
		  parser: webpack_isomorphic_tools_plugin.url_loader_parser
		},
		
		styles: {
      extensions: ['css'],
      filter: function(module, regular_expression, options, log) {
				if (options.development) {
					return webpack_isomorphic_tools_plugin.style_loader_filter(module, regular_expression, options, log);
				}
			},

			path: webpack_isomorphic_tools_plugin.style_loader_path_extractor,

			parser: webpack_isomorphic_tools_plugin.css_loader_parser
    },
    
    // style_modules: {
    //   extensions: ['css'],
    //   filter: function(module, regex, options, log) {
		// 		if (options.development) {
		// 			return webpack_isomorphic_tools_plugin.style_loader_filter(module, regex, options, log);
		// 		} 
		// 		return regex.test(module.name);				
		// 	},

		// 	path: function(module, options, log) {
		// 		if (options.development) {
		// 			return webpack_isomorphic_tools_plugin.style_loader_path_extractor(module, options, log);
		// 		}
		// 		return module.name;
		// 	},
			
		// 	parser: function(module, options, log) {
		// 		if (options.development) {
		// 			return webpack_isomorphic_tools_plugin.css_modules_loader_parser(module, options, log);
		// 		}
		// 		return module.source;
		// 	}
    // },
		
    fonts: {
			extensions: ['eot', 'ttf', 'woff', 'woff2'],
			regular_expression: /(\.eot(\?v=\d+\.\d+\.\d+)?$)|(\.ttf(\?v=\d+\.\d+\.\d+)?$)|(\.woff(\?v=\d+\.\d+\.\d+)?$)|(\.woff2(\?v=\d+\.\d+\.\d+)?$)/,
			parser: webpack_isomorphic_tools_plugin.url_loader_parser
    }
  }    
}