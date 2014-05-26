define(['jquery'],function($){
	var contentObj = {
		'appendText': function(){
		$("#testid").append("<br/>Content changed by jquery-private Js file");
	}
};
	return contentObj;
})