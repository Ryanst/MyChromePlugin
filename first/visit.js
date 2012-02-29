function func()
{
	var backtotop=document.createElement("input");
	backtotop.type = "image";
	var imgURL=chrome.extension.getURL("backtotop.png");
	backtotop.src=imgURL;
	backtotop.style.position='fixed';
	backtotop.style.bottom='20px';
    backtotop.style.right='20px';
	backtotop.style.zIndex = 2147483647;
	backtotop.onclick=back;
	document.body.appendChild(backtotop);
}

 function back()
 {
    //window.scrollTo(0,0);
	$( 'html, body' ).animate( { scrollTop: 0 }, 500 );
 }

window.onload=func;