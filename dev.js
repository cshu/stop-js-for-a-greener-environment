//note this can be used as bookmarklet

//document.title=document.title+' '+location.href;//note modify title can pollute the browser history

//? Strangely it seems blocking script works on normal web pages but does not work on file:/// ???
//? wait... sometimes... if you do not remove <script>, they still run? or maybe just because the <script> is under <iframe>??
for(var selem of Array.from(document.getElementsByTagName('script'))){
	selem.remove();
}
for(var selem of Array.from(document.getElementsByTagName('iframe'))){
	selem.setAttribute('sandbox','');
	//selem.remove();
}
for(var selem of Array.from(document.getElementsByTagName('frame'))){
	selem.remove();
}
document.head.insertAdjacentHTML('afterbegin','<meta http-equiv="Content-Security-Policy" content="script-src \'none\';">');
var rewin=open('');
rewin.document.write('<!doctype html>'+document.documentElement.outerHTML);
rewin.document.close();
document.write('<!doctype html><title>x</title>');
document.close();
//note it seems document.write can erase most javascript, but setTimeout before the erasure still remains and works!
