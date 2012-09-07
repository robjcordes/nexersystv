var $ = jQuery.noConflict();
$(document).ready(function() {
    
    $('.gen_url_link').click(function(){
        var genUrl = $('#campaign-node-form .utm_website').val() + '?';
        var urlParams = '';
        //http://test.com/?utm_source=citytheft&utm_medium=banner&utm_term=bike&utm_content=10%25%2Bdiscount&utm_campaign=roberts%2Bcampaign
        $('#campaign-node-form .urlVar').each(function(){
            if($(this).hasClass('utm_src') && $(this).val() != ''){
                urlParams += '&utm_src=' + encodeURIComponent($(this).val());
            }
            if($(this).hasClass('utm_content') && $(this).val() != ''){
                urlParams += '&utm_content=' + encodeURIComponent($(this).val());
            }
            if($(this).hasClass('utm_media') && $(this).val() != ''){
                urlParams += '&utm_media=' + encodeURIComponent($(this).val());
            }
            if($(this).hasClass('utm_term') && $(this).val() != ''){
                urlParams += '&utm_term=' + encodeURIComponent($(this).val());
            }
        });
        var nexid = $('.nexid').html();
        urlParams += '&nexid=' + nexid;
                    urlParams = urlParams.substr(1);
            genUrl = genUrl + urlParams;
        $('#campaign-node-form .genUrl').val(genUrl);
        console.log(genUrl);
    });    
});