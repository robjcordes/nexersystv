var $ = jQuery.noConflict();
$(document).ready(function() {
    var hostname = window.location.host;
    console.log('hostname: ' + hostname);
    if(hostname == 'nexersystv.principlepointdev.com'){
        
        $.cookie('jarjar', { domain : 'www.nexersystv.localhost:8888' });
    }
    var src = 'nowhere';
console.log(src);
});


