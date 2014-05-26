require.config({
	baseUrl:"js/frameworks",
	paths:{
		"jquery-private":"../jquery-private"
	},
	shim:{
		'jquery':{
			exports: 'jquery'
		}
	}
});

//Initialize the startup module.
require(['jquery-private'],function(jqPr){
	jqPr.appendText();
});