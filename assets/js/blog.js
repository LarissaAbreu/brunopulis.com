// const audima = document.querySelector('#audima-iframe');

// audima.setAttribute('title', 'Ouça o post via audio');

if('loading' in HTMLImageElement.prototype) {
	const images = document.querySelectorAll('img.lazyload');

	images.forEach(img => {
		img.src = img.dataset.src;
	})
} else {
	let script = document.createElement('script');
	script.async = true;
	script.src = "https://cdnjs.cloudflare.com/ajax/libs/lazysizes/4.1.8/lazysizes.min.js";

	document.body.appendChild(script);
}
$(document).ready(function() {
	
	/* ======= Highlight.js Plugin ======= */ 
    /* Ref: https://highlightjs.org/usage/ */     
    $('pre code').each(function(i, block) {
	    hljs.highlightBlock(block);
	 });
});


document.getElementById('toggle-box-checkbox').addEventListener('change', function(event) {
	(event.target.checked) ? document.body.setAttribute('data-theme', 'dark') :
	document.body.removeAttribute('data-theme');
});
