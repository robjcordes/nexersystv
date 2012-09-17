$(document).ready(function() {
    var cookie = $.cookie('nexersystv_campaign');
    if(cookie != ''){
        cookie =     $.parseJSON(cookie);
        phone = cookie['campaign_phone'];
        params = cookie['campaign_params'];
        params = params.substr(1);
        $('.camp_landing_phone').html(phone);
        $('.panel-box dd').html(phone);
    }
    $('.view-mode-full').append('<a href="#" onclick="camp_landing_delete_cookie();">Delete campaign cookie</a>');
    var logoLink = $('.logo a').attr('href');
    adjustedLogoLink = logoLink + '?' + params;
    $('.logo a').attr('href', adjustedLogoLink);
    $('.section-footer ul.nexlinks ').each(function(){

        var test = $(this);
        test.children().each(function(e){
    
        var footerLink = $(this).children().attr('href');
        adjustedFooterLink = footerLink + '?' + params;
        $(this).children().attr('href', adjustedFooterLink);

    });


    
});
   
   //show/hide the company name field on generic versions of the form based on the model selected
   $('.company_name.togglable').hide();
   $('.company_control').livequery('change', function(event) { 
                             var modelTypeSelected = $('.company_control').val();
                             if(modelTypeSelected == 'Commercial'){
                                 $('.company_name').show();
                                 console.log('selected com');
                             }else{
                                 
                                 $('.company_name').hide();
                             }
                            return false; 
                         }); 
    
    
});
    function camp_landing_delete_cookie(){
        $.removeCookie('nexersystv_campaign');
        location.reload();
    }