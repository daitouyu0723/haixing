// JavaScript Document

var flag;
function tabChange(indexTab){
	flag = indexTab;
	var doc = document;
	
	var getDivWrap = doc.getElementById("tabInfos");
	var getDivs = getDivWrap.getElementsByTagName("div");
	var getSpanWrap = doc.getElementById("tabTitle");
	var getSpans = getSpanWrap.getElementsByTagName("span");
	
	//设置未选中状态
	for(var i=0;i<getDivs.length;i++){
		getDivs[i].style.display = 'none';	
		getSpans[i].className = 'booksPart';
	}
	
	//设置选中状态
	getDivs[flag].style.display = 'block';	
	getSpans[flag].className = 'tabActive';
}