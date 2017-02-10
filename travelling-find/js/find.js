window.onscroll = function () { 
   var scroll = document.documentElement.scrollTop || document.body.scrollTop,
   		head_fixed = document.querySelector('.header'),
   		return_top = document.querySelector('.back-top');
	if (scroll>1) {
//		console.log('a')
		head_fixed.setAttribute("id","header-fixed");
		return_top.style.display="block";
	}
	else if(scroll===0){
		head_fixed.setAttribute("id","");
		return_top.style.display="none";
	}
	console.log(scroll)
}
