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