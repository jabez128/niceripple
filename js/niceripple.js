void function(window,undefined){
	function niceripple(e){
		var tp = document.createElement("div");
		var color = e.target.getAttribute("data-ripple-color") || "red";
		var time = e.target.getAttribute("data-ripple-time") || "1s";
		tp.classList.add('ripple-effect');
		tp.style.top = (e.offsetY - 25)+"px";
		tp.style.left = (e.offsetX - 25)+"px";
		tp.style.backgroundColor = color;
		tp.style.animationDuration = time;
		tp.style.animationName = "ripple";
		e.target.appendChild(tp)
		setTimeout(function(){
			e.target.removeChild(tp);
		},parseInt(time.split('s')[0])*1000)
	}
	var $ = document.querySelectorAll.bind(window.document);
	var ripples = $('.ripple');
	Array.prototype.forEach.call(ripples,function(item){
		item.onclick = niceripple;
	})
	
}(window)