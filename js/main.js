window.onload = function() {
	mv.app.toTip();
	mv.app.toSell();
	mv.app.toRun();
}

var mv = {};	//命名空间

mv.tools = {};

mv.ui = {};

mv.ui.textChange = function(obj,str) {
	obj.onfocus = function() {
	if (this.value==str) {
		this.value = "";
	}
};
	obj.onblur = function() {
		if (this.value == "") {
			this.value = str;
		}
	}

};

mv.app = {};

mv.app.toTip = function() {
	var oText1 = document.getElementById("text1");
	var oText2 = document.getElementById("text2");
	mv.ui.textChange(oText1,'Search website');
	mv.ui.textChange(oText2,'Search website');
}

mv.app.toSell=function() {
	var oSel=document.getElementById("sell");
	var aDd=oSel.getElementsByTagName("dd");
	var aUl=oSel.getElementsByTagName("ul");
	for (var i = 0; i < aDd.length; i++) {
		aDd[i].index=i;
		aDd[i].onclick=function(ev) {
			var ev=ev||window.event;
			var This=this;
			for (var i = 0; i < aUl.length; i++) {
				aUl[i].style.display="none";
			}
			aUl[this.index].style.display="block";
			document.onclick=function() {
				aUl[This.index].style.display="none";
			};
			ev.cancelBubble=true;
		}
	}
}

