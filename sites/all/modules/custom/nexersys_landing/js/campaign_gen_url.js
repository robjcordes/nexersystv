var $ = jQuery.noConflict();
$(document).ready(function() {
    
    $('.gen_url_link').click(function(){
        var genUrl = '';
        $('#campaign-node-form .form-text input').each(function(){
            console.log($(this).val());
        });
    });
    //$('.field-name-field-gen-url input').val(genUrl);
    
});